type GenreProps = {
  genre: string;
  index: number;
}

function Genre({genre, index}: GenreProps): JSX.Element {
  return (
    <li className={index === 0 ? 'catalog__genres-item catalog__genres-item--active' : 'catalog__genres-item'}>
      <a href="/" className="catalog__genres-link">{genre}</a>
    </li>
  );
}

export default Genre;
