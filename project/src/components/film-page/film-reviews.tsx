import Review from './review';

type FilmReviewsProps = {
  reviews: {rating: number, comment: string, date: Date, id: number, user: {id: number, name:string}}[];
}

function FilmReviews({reviews}: FilmReviewsProps): JSX.Element {
  return (
    <div className="film-card__reviews film-card__row">
      <div className="film-card__reviews-col">
        {reviews.map((item) => <Review comment={item.comment} date={item.date} user={item.user} rating={item.rating} key={item.id}/>)}
      </div>
      <div className="film-card__reviews-col">
        {reviews.map((item) => <Review comment={item.comment} date={item.date} user={item.user} rating={item.rating} key={item.id}/>)}
      </div>
    </div>
  );
}

export default FilmReviews;
