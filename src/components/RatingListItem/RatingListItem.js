import { Rating } from 'react-simple-star-rating'

import colors from '@colors'

import {
  RateContainer,
  RateMessage,
  RateTopInfo,
  RateDate
} from './style';

export default function RatingListItem({item}) {
  const {rating, message, created_at} = item

  function date(d) {
    let date = new Date(d)
    const options = { year: 'numeric', month: 'short', day: 'numeric' };

    if(d && d.seconds) {
      date = new Date(d.seconds * 1000)
    }

    return date.toLocaleDateString("es-ES", options)
  }

  return (
    <RateContainer>
      <RateTopInfo>
        <Rating
          ratingValue={rating}
          readonly
          allowHalfIcon
          fillColor={colors.primary.dark}
          emptyColor={colors.primary.light}
          size="32"
        />
        <RateDate>{date(created_at)}</RateDate>
      </RateTopInfo>
      {message && <RateMessage>{message}</RateMessage>}
    </RateContainer>
  )
}