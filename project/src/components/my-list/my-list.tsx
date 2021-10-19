import Logo from '../logo/logo';
import UserBlock from '../user-block/user-block';
import FilmList from '../films-list/films-list';
import Hidden from '../hidden/hidden';
import {MY_LIST_FILMS_COUNT} from '../../constants/constants';
import {FilmTypes} from '../../types/film';

type MyListProps = {
  films: FilmTypes[];
}

function MyList({films}: MyListProps): JSX.Element {
  const myFilms = films.slice(0, MY_LIST_FILMS_COUNT);

  return (
    <>
      <Hidden />
      <div className="user-page">
        <header className="page-header user-page__head">
          <Logo/>

          <h1 className="page-title user-page__title">My list</h1>

          <UserBlock/>
        </header>

        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>

          <FilmList films={myFilms} />
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

export default MyList;
