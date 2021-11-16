import {ReviewTypes} from '../../../types/review';
import {getFormattedDate, getFormattedDatetime} from '../../../utils/utils';

type ReviewProps = {
  review: ReviewTypes;
}


function Review({review}: ReviewProps): JSX.Element {

  const formattedDate: string = getFormattedDate(review.date);
  const formattedDateTime: string = getFormattedDatetime(review.date);

  return (
    <div className="review">
      <blockquote className="review__quote">
        <p className="review__text">{review.comment}</p>

        <footer className="review__details">
          <cite className="review__author">{review.user.name}</cite>
          <time className="review__date" dateTime={formattedDateTime}>{formattedDate}</time>
        </footer>
      </blockquote>

      <div className="review__rating">{review.rating}</div>
    </div>
  );
}

export default Review;
