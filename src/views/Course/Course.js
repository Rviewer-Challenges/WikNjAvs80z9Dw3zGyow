import { useState, useEffect } from 'react'
import { FaUser, FaStar, FaHouseUser, FaBook } from 'react-icons/fa'
import { useParams } from 'react-router-dom';
import { Rating } from 'react-simple-star-rating'
import { useSelector, useDispatch } from 'react-redux'

import { setElement } from '@/redux/reducer';
import { getDocument } from '@database';
import {
  attendence_type as attendence_types,
  speciality_type as speciality_types,
  transformTypesToObject
} from '@/utils/types'
import {
  CourseContainer,
  CourseMain,
  CourseContent,
  CourseTitle,
  CourseTopInfo,
  CoursePrice,
  CourseInfoRow,
  CourseInfo,
  CourseDescription,
  MoreInfoLink
} from './styles'
import CourseEducator from '@/components/CourseEducator'
import colors from '@colors'
import Ratings from '@/components/Ratings'

const attendenceTypes = transformTypesToObject(attendence_types)
const specialityTypes = transformTypesToObject(speciality_types)

function tarnsformPrice(price) {
  if (price && price == 0) {
    return 'Gratis!'
  }

  return price?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".") + '€';
}

function formatRating(rating) {
  return (rating / 20).toFixed(1)
}

export default function Course() {
  let { id } = useParams();

  const dispatch = useDispatch();
  const { course } = useSelector((state) => state)
  const [ renderedPrice, setRenderedPrice ] = useState('')

  useEffect(() => {
    if (course?.id !== id) {
      getCourse()
    }
  }, [])

  async function getCourse() {
    const {ok, data} = await getDocument({database: 'courses', id})

    if (ok) {
      dispatch(setElement({data: data, type: 'course'}));
    }
  }

  useEffect(() => {
    const p = tarnsformPrice(course?.price)
    setRenderedPrice(p)
  }, [course])

  return (
    !!course?.id &&
    <>
      <CourseContainer>
        <CourseMain>
          <CourseEducator educator={course?.educator} />
          <CourseContent>
            <CourseTitle>{course?.name}</CourseTitle>
            <CourseDescription>{course?.description}</CourseDescription>
            <MoreInfoLink href={course?.link} rel="noopener noreferrer" target="_blank">Más Información</MoreInfoLink>
          </CourseContent>
          <CourseInfo>
            <Rating
              ratingValue={course?.average_rating}
              readonly
              allowHalfIcon
              fillColor={colors.primary.dark}
              emptyColor={colors.primary.light}
              size="35"
            />
            <CourseTopInfo>
              <span>{formatRating(course?.average_rating)} <FaStar alt="Valoración"/></span>
              <span>{course?.total_ratings} <FaUser /></span>
            </CourseTopInfo>
            <CourseInfoRow><FaHouseUser />{attendenceTypes[course?.attendence_type]}</CourseInfoRow>
            <CourseInfoRow><FaBook />{specialityTypes[course?.speciality_type]}</CourseInfoRow>
            <CoursePrice>{renderedPrice}</CoursePrice>
          </CourseInfo>
        </CourseMain>
      </CourseContainer>
      <Ratings item={course} database="courses" type="course"/>
    </>
  )

}