import Star from './star';
import {useState} from 'react';
import {STAR_COUNT, ADD_REVIEWS_STATE, STARS} from '../../constants/constants';

function AddReviewForm(): JSX.Element {
  const [userReview, setUserReview] = useState([ADD_REVIEWS_STATE.COUNT, ADD_REVIEWS_STATE.TEXT]);

  const ratingClickHandler = (evt: any) => {
    setUserReview([evt.target.value, userReview[1]]);
  };

  return (
    <div className="add-review">
      <form action="#" className="add-review__form">
        <div className="rating">
          <div className="rating__stars">
            {STARS.map((item, index) => <Star setUserReview={ratingClickHandler} key={STARS[index]} index={STAR_COUNT - index}/>)}
          </div>
        </div>
        <div className="add-review__text">
          <textarea onChange={(evt) => {setUserReview([userReview[0], evt.target.value]);}} className="add-review__textarea" name="review-text" id="review-text" placeholder="Review text"/>
          <div className="add-review__submit">
            <button className="add-review__btn" type="submit">Post</button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default AddReviewForm;
