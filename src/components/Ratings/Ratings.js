import { useState, useEffect } from 'react'
import { Rating } from 'react-simple-star-rating'
import { FaTimes} from 'react-icons/fa';
import toast from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux'

import colors from '@colors'
import { add, set, get } from '@/utils/firebase'
import { setElement, addRaitng } from '@/redux/reducer';
import RatingListItem from '../RatingListItem';
import {
  RateContainer,
  RateMessage,
  RateMessageSend,
  RateTopInfo,
  CloseButton,
  AddRating,
  NoRatings
} from './style';

function calcRating(average_rating, total_ratings, rating) {
  return (average_rating * total_ratings + rating) / (total_ratings + 1)
}

function addIdToLocalStorage(id) {
  const myRatings = JSON.parse(localStorage.getItem('myRatings'))
  const ratings = myRatings ? [...myRatings, id] : [id]

  localStorage.setItem('myRatings', JSON.stringify(ratings));
}

function isInMyRatings(id) {
  const myRatings = JSON.parse((localStorage).getItem('myRatings'))

  if(!!myRatings) {
    return myRatings.includes(id)
  } else {
    return false
  }
}

export default function Ratings ({item, database, type}) {
  const { average_rating, total_ratings, id} = item
  const [ rating, setRating ] = useState(0)
  const [ message, setMessage ] = useState('')
  const [ showAdd, setShowAdd ] = useState(false)
  const [ canAdd, setCanAdd ] = useState(false)

  console.log(item);

  const { ratings } = useSelector((state) => state)

  const dispatch = useDispatch();

  useEffect(() => {
    const rated = isInMyRatings(id)
    setCanAdd(!rated)
  }, [average_rating, total_ratings, id])

  useEffect(() => {
    if (ratings?.id !== id || ratings.list.length === 0) {
      getRatings()
    }
  }, [])

  async function getRatings() {
    const data = await get({database: `${database}/${id}/ratings`, sort: {by: 'created_at', type: 'desc'}})
    dispatch(setElement({data: {id, list: [...data]}, type: 'ratings'}));
  }

  async function pushRating(e) {
    e.preventDefault()
    const data = { rating, created_at: new Date() }

    if(message !== '') {
      data.message = message
    }

    console.log(data);
    console.log(`${database}/${id}/ratings`);
    let { ok } = await add({database: `${database}/${id}/ratings`, data})

    if (ok) {
      const updatedItem = {
        ...item,
        average_rating: calcRating(average_rating, total_ratings, rating),
        total_ratings: total_ratings + 1
      }
      const result = await set({database, id, data: updatedItem})
      ok = result.ok
      dispatch(setElement({data: updatedItem, type}));
      dispatch(addRaitng(data))
      addIdToLocalStorage(id)
    }

    if (ok) {
      setShowAdd(false)
      toast('Gracias por la reseña!')
    } else {
      toast('Algo ha fallado al subir la reseña')
    }
  }
  return (
    <div>
      <div>
        { canAdd &&
          <RateContainer onSubmit={pushRating}>
            {!showAdd ?
            <AddRating type="button" onClick={() => setShowAdd(true)}>Añadir reseña</AddRating> :
            <>
              <RateTopInfo>
                <Rating
                  ratingValue={rating}
                  onClick={setRating}
                  allowHalfIcon
                  fillColor={colors.primary.dark}
                  emptyColor={colors.primary.light}
                  size="40"
                />
                <CloseButton type="button" onClick={() => setShowAdd(false)}>
                  <FaTimes />
                </CloseButton>
              </RateTopInfo>
              <RateMessage rows="8" onChange={(e)=>setMessage(e.target.value)} value={message}/>
              <RateMessageSend type="submit">Enviar</RateMessageSend>
              </>
            }
          </RateContainer>
        }
      </div>
      { ratings?.id && ratings?.list.length > 0 ?
        ratings?.list?.map((rating =>
          <RatingListItem item={rating} key={rating.id}/>
        )) : <NoRatings>No hay ninguna reseña</NoRatings>
      }
    </div>
  )
}