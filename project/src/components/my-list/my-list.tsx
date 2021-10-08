import Logo from '../logo/logo';
import UserBlock from '../user-block/user-block';
import FilmCard from '../film-card/film-card';
import Hidden from '../hidden/hidden';

type MyListProps = {
  films: {name: string, poster: string, id: number}[];
}

function MyList({films}: MyListProps): JSX.Element {
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

          <div className="catalog__films-list">
            {films.map((item) => <FilmCard name={item.name} poster={item.poster} key={item.id}/>)}
          </div>
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
