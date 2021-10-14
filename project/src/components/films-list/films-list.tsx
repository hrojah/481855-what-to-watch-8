import FilmCard from '../film-card/film-card';
import {FilmTypes} from '../../types/film';
import {useState} from 'react';

type FilmListProps = {
  films: FilmTypes[];
}

function FilmList({films}: FilmListProps): JSX.Element {
  const [, setFilmId] = useState();
  return (
    <div className="catalog__films-list">
      {films.map((item) => <FilmCard setFilmId={setFilmId} id={item.id} name={item.name} poster={item.poster} key={item.id} />)}
    </div>
  );
}

export default FilmList;
