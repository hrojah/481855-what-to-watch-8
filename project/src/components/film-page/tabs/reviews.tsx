import Review from './review';
import {ReviewTypes} from '../../../types/review';
import {ReviewsTypes} from '../../../types/review';

type FilmReviewsProps = {
  reviews: ReviewTypes[];
}

function Reviews({reviews}: FilmReviewsProps): JSX.Element {
  const reviewsColumnLeft: ReviewsTypes = [];
  const reviewsColumnRight: ReviewsTypes = [];

  reviews.map((review, index) => {
    index % 2 === 0 ? reviewsColumnLeft.push(review) : reviewsColumnRight.push(review);
  });

  return (
    <div className="film-card__reviews film-card__row">
      <div className="film-card__reviews-col">
        {reviewsColumnLeft.map((item) => <Review review={item} key={item.id}/>)}
      </div>
      <div className="film-card__reviews-col">
        {reviewsColumnRight.map((item) => <Review review={item} key={item.id}/>)}
      </div>
    </div>
  );
}

export default Reviews;
