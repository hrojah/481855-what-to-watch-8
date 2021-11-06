type GenreProps = {
  name: string;
  changeGenre: any;
  getFilms: any;
  genre: string;
}

function Genre({name, genre, changeGenre, getFilms}: GenreProps): JSX.Element {
  return (
    <li className={name === genre ? 'catalog__genres-item catalog__genres-item--active' : 'catalog__genres-item'} onClick={(evt) => {evt.preventDefault(); changeGenre(name); getFilms();}}>
      <a href="/" className="catalog__genres-link">{name}</a>
    </li>
  );
}

export default Genre;
