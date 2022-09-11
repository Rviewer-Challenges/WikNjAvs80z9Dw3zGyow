import { useNavigate } from "react-router-dom";

import { EducatorContainer, EducatorName, EducatorImage, EducatorType } from './styles'
import { types, transformTypesToObject } from '@/utils/types'

const educatorTypes = transformTypesToObject(types.educators)

export default function CourseEducator({ educator }) {
  const { name, image, type, id} = educator

  const navigate = useNavigate();

  function go () {
    navigate(`/educator/${id}`)
  }

  return (
    <EducatorContainer onClick={go}>
      <EducatorImage src={image} alt={name} loading="lazy" />
      <EducatorName>{name}</EducatorName>
      <EducatorType>{educatorTypes[type]}</EducatorType>
    </EducatorContainer>
  )

}