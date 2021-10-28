import Logo from '../logo/logo';
import UserBlock from '../user-block/user-block';
import Tabs from './tabs/tabs';
import FilmList from '../films-list/films-list';
import Hidden from '../hidden/hidden';
import {AppRoute, MORE_LIKE_THIS_FILMS_COUNT, PATHNAME_SYMBOL} from '../../constants/constants';
import {FilmTypes} from '../../types/film';
import {ReviewTypes} from '../../types/review';
import {useHistory, useLocation} from 'react-router-dom';

type FilmPageProps = {
  films: FilmTypes[];
  reviews: ReviewTypes[];
}

function FilmPage({films, reviews}: FilmPageProps): JSX.Element {
  const history = useHistory();
  const location = useLocation();
  const id = location.pathname.substr(PATHNAME_SYMBOL);
  const filmId = films.findIndex((el) => el.id === id);
  const moreLikeThisFilms = films.filter((item) => films[filmId].genre === item.genre).slice(0, MORE_LIKE_THIS_FILMS_COUNT);

  return (
    <>
      <Hidden />

      <section className="film-card film-card--full">
        <div className="film-card__hero">
          <div className="film-card__bg">
            <img src="img/bg-the-grand-budapest-hotel.jpg" alt="The Grand Budapest Hotel" />
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <header className="page-header film-card__head">
            <Logo/>

            <UserBlock/>
          </header>

          <div className="film-card__wrap">
            <div className="film-card__desc">
              <h2 className="film-card__title">{films[filmId].name}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{films[filmId].genre}</span>
                <span className="film-card__year">{films[filmId].released}</span>
              </p>

              <div className="film-card__buttons">
                <button className="btn btn--play film-card__button" type="button">
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s"/>
                  </svg>
                  <span onClick={() => history.push(`/player/${id}`)}>Play</span>
                </button>
                <button className="btn btn--list film-card__button" type="button">
                  <svg viewBox="0 0 19 20" width="19" height="20">
                    <use xlinkHref="#add"/>
                  </svg>
                  <span onClick={() => history.push(AppRoute.MY_LIST)}>My list</span>
                </button>
                <span onClick={() => history.push(`/films/${id}/review`)} className="btn film-card__button">Add review</span>
              </div>
            </div>
          </div>
        </div>

        <div className="film-card__wrap film-card__translate-top">
          <div className="film-card__info">
            <div className="film-card__poster film-card__poster--big">
              <img src={films[filmId].poster} alt="The Grand Budapest Hotel poster" width="218" height="327" />
            </div>

            <Tabs film={films[filmId]} reviews={reviews} id={id}/>
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>
          <FilmList films={moreLikeThisFilms} />
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

export default FilmPage;
