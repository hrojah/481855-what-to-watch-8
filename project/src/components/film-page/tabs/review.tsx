import {MONTH} from '../../../constants/constants';

type ReviewProps = {
  comment: string;
  date: Date;
  user: {name: string};
  rating: number;
}


function Review({comment, date, user, rating}: ReviewProps): JSX.Element {
  const month = MONTH[date.getMonth() - 1];
  const reviewDate = `${month} ${date.getDate()}, ${date.getFullYear()}`;
  const dataTime = `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`;
  return (
    <div className="review">
      <blockquote className="review__quote">
        <p className="review__text">{comment}</p>

        <footer className="review__details">
          <cite className="review__author">{user.name}</cite>
          <time className="review__date" dateTime={dataTime}>{reviewDate}</time>
        </footer>
      </blockquote>

      <div className="review__rating">{rating}</div>
    </div>
  );
}

export default Review;
