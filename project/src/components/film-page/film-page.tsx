import Logo from '../logo/logo';
import UserBlock from '../user-block/user-block';
import Tabs from './tabs/tabs';
import FilmList from '../films-list/films-list';
import Hidden from '../hidden/hidden';
import {AppRoute, PATHNAME_SYMBOL} from '../../constants/constants';
import {useHistory, useLocation} from 'react-router-dom';
import LoadingScreen from '../loading-screen/loading-screen';
import {useStore} from 'react-redux';
import {fetchCurrentFilmAction, fetchSimilarFilmsAction, fetchReviewsAction} from '../../store/api-actions';
import {ThunkAppDispatch} from '../../types/action';
import {connect, ConnectedProps} from 'react-redux';
import {State} from '../../types/state';
import {useEffect} from 'react';
import {AuthorizationStatus} from '../../constants/constants';
import {Link} from 'react-router-dom';

const mapStateToProps = ({currentFilm, reviews, authorizationStatus}: State) => ({
  currentFilm,
  reviews,
  authorizationStatus,
});

const mapDispatchToProps = (dispatch: ThunkAppDispatch) => ({
  fetchCurrentFilm(id: number) {
    dispatch(fetchCurrentFilmAction(id));
  },
  fetchSimilarFilms(id: number) {
    dispatch(fetchSimilarFilmsAction(id));
  },
  fetchReviews(id: number) {
    dispatch(fetchReviewsAction(id));
  },
});

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;
type ConnectedComponentProps = PropsFromRedux;

function FilmPage(props: ConnectedComponentProps): JSX.Element {
  const {fetchCurrentFilm, currentFilm, fetchSimilarFilms, fetchReviews, reviews, authorizationStatus} = props;
  const store = useStore();
  const history = useHistory();
  const location = useLocation();
  const id = Number(location.pathname.substr(PATHNAME_SYMBOL));

  (store.dispatch as ThunkAppDispatch)(fetchCurrentFilmAction(id));

  useEffect(() => {
    fetchCurrentFilm(id);
  }, [fetchCurrentFilm, id]);

  useEffect(() => {
    fetchSimilarFilms(id);
  }, [fetchSimilarFilms, id]);

  useEffect(() => {
    fetchReviews(id);
  }, [fetchReviews, id]);

  if (!currentFilm.id) {
    return (
      <LoadingScreen />
    );
  }

  return (
    <>
      <Hidden />

      <section className="film-card film-card--full">
        <div className="film-card__hero">
          <div className="film-card__bg">
            <img src={currentFilm.backgroundImage} alt={currentFilm.name} />
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <header className="page-header film-card__head">
            <Logo/>

            <UserBlock/>
          </header>

          <div className="film-card__wrap">
            <div className="film-card__desc">
              <h2 className="film-card__title">{currentFilm.name}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{currentFilm.genre}</span>
                <span className="film-card__year">{currentFilm.released}</span>
              </p>

              <div className="film-card__buttons">
                <button className="btn btn--play film-card__button" type="button">
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s"/>
                  </svg>
                  <Link to={`/player/${currentFilm.id}`} onClick={() => history.push(`/player/${id}`)}>Play</Link>
                </button>
                <button className="btn btn--list film-card__button" type="button">
                  <svg viewBox="0 0 19 20" width="19" height="20">
                    <use xlinkHref="#add"/>
                  </svg>
                  <Link to={'/mylist'} onClick={() => history.push(AppRoute.MY_LIST)}>My list</Link>
                </button>
                {authorizationStatus === AuthorizationStatus.AUTH
                  ? <Link to={`/films/${currentFilm.id}/review`} className="btn film-card__button">Add review</Link>
                  : ''}
              </div>
            </div>
          </div>
        </div>

        <div className="film-card__wrap film-card__translate-top">
          <div className="film-card__info">
            <div className="film-card__poster film-card__poster--big">
              <img src={currentFilm.poster} alt="The Grand Budapest Hotel poster" width="218" height="327" />
            </div>

            <Tabs film={currentFilm} reviews={reviews} />
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>
          <FilmList genreFilm={currentFilm.genre} />
        </section>

        <footer className="page-footer">
          <Logo/>

          <div className="copyright">
            <p>© 2019 What to watch Ltd.</p>
          </div>
        </footer>
      </div>
    </>
  );
}

export {FilmPage};
export default connector(FilmPage);
