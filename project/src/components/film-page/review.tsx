type ReviewProps = {
  comment: string;
  date: Date;
  user: {name: string};
  rating: number;
}


function Review({comment, date, user, rating}: ReviewProps): JSX.Element {
  const reviewDate = `${date.getMonth()} ${date.getDate()}, ${date.getFullYear()}`;
  return (
    <div className="review">
      <blockquote className="review__quote">
        <p className="review__text">{comment}</p>

        <footer className="review__details">
          <cite className="review__author">{user.name}</cite>
          <time className="review__date" dateTime="2016-12-24">{reviewDate}</time>
        </footer>
      </blockquote>

      <div className="review__rating">{rating}</div>
    </div>
  );
}

export default Review;
