import Logo from '../logo/logo';
import UserBlock from '../user-block/user-block';
import FilmInfo from './film-info';
import FilmReviews from './film-reviews';
import FilmList from '../films-list/films-list';
import Hidden from '../hidden/hidden';
import {AppRoute, MORE_LIKE_THIS_FILMS_COUNT} from '../../constants/constants';
import {FilmTypes} from '../../types/film';
import {ReviewTypes} from '../../types/review';
import {Link, useHistory} from 'react-router-dom';

type FilmPageProps = {
  films: FilmTypes[];
  reviews?: ReviewTypes[];
  filmInfo: boolean;
  name: string;
  date: string;
  genre: string;
}

function FilmPage({films, reviews, filmInfo, name, date, genre}: FilmPageProps): JSX.Element {
  const moreLikeThisFilms = films.slice(0, MORE_LIKE_THIS_FILMS_COUNT);
  const history = useHistory();

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
              <h2 className="film-card__title">{name}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{genre}</span>
                <span className="film-card__year">{date}</span>
              </p>

              <div className="film-card__buttons">
                <button className="btn btn--play film-card__button" type="button">
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s"/>
                  </svg>
                  <span onClick={() => history.push(AppRoute.PLAYER)}>Play</span>
                </button>
                <button className="btn btn--list film-card__button" type="button">
                  <svg viewBox="0 0 19 20" width="19" height="20">
                    <use xlinkHref="#add"/>
                  </svg>
                  <span onClick={() => history.push(AppRoute.MY_LIST)}>My list</span>
                </button>
                <Link to={AppRoute.ADD_REVIEW} className="btn film-card__button">Add review</Link>
              </div>
            </div>
          </div>
        </div>

        <div className="film-card__wrap film-card__translate-top">
          <div className="film-card__info">
            <div className="film-card__poster film-card__poster--big">
              <img src="img/the-grand-budapest-hotel-poster.jpg" alt="The Grand Budapest Hotel poster" width="218" height="327" />
            </div>

            <div className="film-card__desc">
              <nav className="film-nav film-card__nav">
                <ul className="film-nav__list">
                  <li className="film-nav__item film-nav__item--active">
                    <a href="/" className="film-nav__link">Overview</a>
                  </li>
                  <li className="film-nav__item">
                    <a href="/" className="film-nav__link">Details</a>
                  </li>
                  <li className="film-nav__item">
                    <a href="/" className="film-nav__link">Reviews</a>
                  </li>
                </ul>
              </nav>
              {filmInfo ? <FilmInfo/> : ''}
              {!!reviews && <FilmReviews reviews={reviews}/>}
            </div>
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
