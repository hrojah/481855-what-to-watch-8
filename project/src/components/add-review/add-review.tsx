import AddReviewForm from './add-review-form';
import Logo from '../logo/logo';
import UserBlock from '../user-block/user-block';
import Hidden from '../hidden/hidden';

function AddReview(): JSX.Element {
  return (
    <>
      <Hidden />

      <section className="film-card film-card--full">
        <div className="film-card__header">
          <div className="film-card__bg">
            <img src="img/bg-the-grand-budapest-hotel.jpg" alt="The Grand Budapest Hotel" />
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <header className="page-header">
            <Logo/>
            <UserBlock/>
          </header>

          <div className="film-card__poster film-card__poster--small">
            <img src="img/the-grand-budapest-hotel-poster.jpg" alt="The Grand Budapest Hotel poster" width="218" height="327" />
          </div>
        </div>
        <AddReviewForm/>
      </section>
    </>
  );
}

export default AddReview;
