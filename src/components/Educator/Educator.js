import { FaUser, FaStar } from 'react-icons/fa'
import { useDispatch } from 'react-redux'
import { useNavigate } from "react-router-dom";
import { EducatorContainer, EducatorName, EducatorImage, EducatorType, EducatorInfo } from './styles'
import { types, transformTypesToObject } from '@/utils/types'

import { setElement } from '@/redux/reducer';

const educatorTypes = transformTypesToObject(types.educators);

function formatRating(rating) {
  return (rating / 20).toFixed(1)
}

export default function Educator({ educator }) {
  const { name, image, type, id, average_rating, total_ratings} = educator;

  const dispatch = useDispatch();
  const navigate = useNavigate();

  function setEducator() {
    dispatch(setElement({data: educator, type: 'educator'}));
  }

  function go () {
    setEducator();
    navigate(`educator/${id}`)
  }
  return (
    <EducatorContainer onClick={go}>
      <EducatorImage src={image} alt={name} loading="lazy" />
      <EducatorName>{name}</EducatorName>
      <EducatorInfo>
        <span>{formatRating(average_rating)} <FaStar alt="Valoración"/></span>
        <span>{total_ratings} <FaUser /></span>
      </EducatorInfo>
      <EducatorType>{educatorTypes[type]}</EducatorType>
    </EducatorContainer>
  )

}