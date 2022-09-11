import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'
import { Rating } from 'react-simple-star-rating'
import { FaUser, FaStar } from 'react-icons/fa'

import { getDocument } from '@database';
import { setElement } from '@/redux/reducer';
import colors from '@colors'
import { types, transformTypesToObject } from '@/utils/types'
import Ratings from '@/components/Ratings'
import {
  EducatorContainer,
  EducatorMain,
  EducatorImage,
  EducatorContent,
  EducatorTitle,
  EducatorDescription,
  EducatorTopInfo,
  EducatorInfo,
  MoreInfoLink,
  EducatorType
} from './styles'

const educatorTypes = transformTypesToObject(types.educators);

function formatRating(rating) {
  return (rating / 20).toFixed(1)
}


export default function Educator() {
  const { id } = useParams();

  const { educator } = useSelector((state) => state)
  const dispatch = useDispatch();

  useEffect(() => {
    if (!id || educator?.id !== id) {
      getEducator()
    }
  }, [])

  async function getEducator() {
    const {ok, data} = await getDocument({database: 'educators', id})

    if (ok) {
      dispatch(setElement({data: data, type: 'educator'}));
    }
  }

  return (
    <>
      <EducatorContainer>
        <EducatorMain>
          <EducatorImage src={educator?.image} alt={educator?.name} />
          <EducatorContent>
            <EducatorTitle>{educator?.name}</EducatorTitle>
            <EducatorDescription>{educator?.description}</EducatorDescription>
          </EducatorContent>
          <EducatorInfo>
            <Rating
              ratingValue={educator?.average_rating}
              readonly
              allowHalfIcon
              fillColor={colors.primary.dark}
              emptyColor={colors.primary.light}
              size="35"
            />
            <EducatorTopInfo>
              <span>{formatRating(educator?.average_rating)} <FaStar alt="Valoración"/></span>
              <span>{educator?.total_ratings} <FaUser /></span>
            </EducatorTopInfo>
            <EducatorType>{educatorTypes[educator?.type]}</EducatorType>
            <MoreInfoLink href={educator?.link}>Más Información</MoreInfoLink>
          </EducatorInfo>
        </EducatorMain>
      </EducatorContainer>
      <Ratings item={{...educator, id}} database="educators" type="educator"/>
    </>
  );
}