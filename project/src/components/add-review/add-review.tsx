import AddReviewForm from './add-review-form';
import Logo from '../logo/logo';
import UserBlock from '../user-block/user-block';
import Breadcrumbs from '../breadcrumbs/breadcrumbs';
import Hidden from '../hidden/hidden';
import {connect, ConnectedProps} from 'react-redux';
import {State} from '../../types/state';
import {AddReviewTypes} from '../../types/add-review';
import {addReviewAction, fetchCurrentFilmAction} from '../../store/api-actions';
import {ThunkAppDispatch} from '../../types/action';
import {useParams} from 'react-router-dom';
import {useEffect} from 'react';

const mapStateToProps = ({currentFilm}: State) => ({
  currentFilm,
});

const mapDispatchToProps = (dispatch: ThunkAppDispatch) => ({
  fetchCurrentFilm(id: number) {
    dispatch(fetchCurrentFilmAction(id));
  },
  addReview(id: number, review: AddReviewTypes) {
    return dispatch(addReviewAction(id, review));
  },
});

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;
type ConnectedComponentProps = PropsFromRedux;

function AddReview({currentFilm, addReview, fetchCurrentFilm}: ConnectedComponentProps): JSX.Element {
  const id = +(useParams<{ id: string }>().id);

  useEffect(() => {
    fetchCurrentFilm(id);
  }, [fetchCurrentFilm, id]);

  return (
    <>
      <Hidden />

      <section className="film-card film-card--full">
        <div className="film-card__header">
          <div className="film-card__bg">
            <img src={currentFilm.backgroundImage} alt={currentFilm.name} />
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <header className="page-header">
            <Logo/>
            <Breadcrumbs name={currentFilm.name}/>
            <UserBlock/>
          </header>

          <div className="film-card__poster film-card__poster--small">
            <img src={currentFilm.poster} alt={currentFilm.name} width="218" height="327" />
          </div>
        </div>
        <AddReviewForm onSubmit={(review: AddReviewTypes) => addReview(id, review)}/>
      </section>
    </>
  );
}

export {AddReview};
export default connector(AddReview);
