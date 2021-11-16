import Star from './star';
import {useState, FormEvent, useEffect} from 'react';
import {STAR_COUNT, STARS} from '../../constants/constants';
import {MIN_MESSAGE_LENGTH, MAX_MESSAGE_LENGTH} from '../../constants/constants';

type ReviewFormProps = {
  onSubmit: any
};

function AddReviewForm(props: ReviewFormProps): JSX.Element {
  const onSubmit = props.onSubmit;
  const [message, setMessage] = useState('');
  const [rating, setRating] = useState(0);
  const [messageDirty, setMessageDirty] = useState(false);
  const [messageError, setMessageError] = useState('Message can`t be empty');
  const [formValid, setFormValid] = useState(false);

  useEffect(() => {
    if (messageError || rating === 0) {
      setFormValid(false);
    } else {
      setFormValid(true);
    }
  }, [messageError, rating]);

  const ratingClickHandler = (evt: any) => {
    setRating(evt.target.value);
  };

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    if (rating !== undefined && messageError === '') {
      onSubmit({
        rating: rating,
        comment: message,
      });
    }
  };

  const messageHandler = (evt: any) => {
    setMessage(evt.target.value);
    if ((message.length < MIN_MESSAGE_LENGTH) || (message.length > MAX_MESSAGE_LENGTH)) {
      setMessageError('Valid message is from 50 to 400 characters');
    } else {
      setMessageError('');
    }
  };

  const blurHandler = (evt: any) => {
    switch (evt.target.name) {
      case 'review-text':
        setMessageDirty(true);
        break;
    }
  };

  return (
    <div className="add-review">
      <form action="#" className="add-review__form" onSubmit={handleSubmit}>
        <div className="rating">
          <div className="rating__stars">
            {STARS.map((item, index) => <Star setUserReview={ratingClickHandler} key={STARS[index]} index={STAR_COUNT - index}/>)}
          </div>
        </div>
        <div className="add-review__text">
          {
            (messageDirty && messageError)
              ? <div style={{color:'red'}}>{messageError}</div>
              : ''
          }
          <textarea onChange={(evt) => messageHandler(evt)} onBlur={(evt) => blurHandler(evt)} className="add-review__textarea" name="review-text" id="review-text" placeholder="Review text"/>
          <div className="add-review__submit">
            <button className="add-review__btn" type="submit" disabled={!formValid}>Post</button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default AddReviewForm;
