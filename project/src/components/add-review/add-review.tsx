import AddReviewForm from './add-review-form';
import Logo from '../logo/logo';
import UserBlock from '../user-block/user-block';
import Breadcrumbs from '../breadcrumbs/breadcrumbs';
import Hidden from '../hidden/hidden';


type AddReviewProps = {
  name: string;
  poster: string;
  backgroundImage: string,
}

function AddReview({name, poster, backgroundImage}: AddReviewProps): JSX.Element {
  return (
    <>
      <Hidden />

      <section className="film-card film-card--full">
        <div className="film-card__header">
          <div className="film-card__bg">
            <img src={backgroundImage} alt={name} />
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <header className="page-header">
            <Logo/>
            <Breadcrumbs name={name}/>
            <UserBlock/>
          </header>

          <div className="film-card__poster film-card__poster--small">
            <img src={poster} alt={name} width="218" height="327" />
          </div>
        </div>
        <AddReviewForm/>
      </section>
    </>
  );
}

export default AddReview;
