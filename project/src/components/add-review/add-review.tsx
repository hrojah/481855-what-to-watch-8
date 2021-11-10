import AddReviewForm from './add-review-form';
import Logo from '../logo/logo';
import UserBlock from '../user-block/user-block';
import Breadcrumbs from '../breadcrumbs/breadcrumbs';
import Hidden from '../hidden/hidden';
import {FilmTypes} from '../../types/film';


type AddReviewProps = {
  films: FilmTypes[];
}

function AddReview({films}: AddReviewProps): JSX.Element {
  return (
    <>
      <Hidden />

      <section className="film-card film-card--full">
        <div className="film-card__header">
          <div className="film-card__bg">
            <img src={films[0].backgroundImage} alt={films[0].name} />
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <header className="page-header">
            <Logo/>
            <Breadcrumbs name={films[0].name}/>
            <UserBlock/>
          </header>

          <div className="film-card__poster film-card__poster--small">
            <img src={films[0].poster} alt={films[0].name} width="218" height="327" />
          </div>
        </div>
        <AddReviewForm/>
      </section>
    </>
  );
}

export default AddReview;
