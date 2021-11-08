import FilmCard from '../film-card/film-card';
import {useState} from 'react';
import {State} from '../../types/state';
import {bindActionCreators, Dispatch} from '@reduxjs/toolkit';
import {Actions} from '../../types/action';
import {ChangeGenre, GetFilms} from '../../store/action';
import {connect, ConnectedProps} from 'react-redux';

type FilmListProps = {
  genreFilm?: string;
}

const mapStateToProps = ({filmList, genre}: State) => ({
  filmList,
  genre,
});

const mapDispatchToProps = (dispatch: Dispatch<Actions>) => bindActionCreators({
  onChangeGenre: ChangeGenre,
  onGetFilms: GetFilms,
}, dispatch);

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;
type ConnectedComponentProps = PropsFromRedux & FilmListProps;

function FilmList(props: ConnectedComponentProps): JSX.Element {
  const {filmList, genre, genreFilm} = props;
  let films;

  if (genreFilm) {
    films = filmList.filter((film) => film.genre === genreFilm);
  } else {
    if (genre === 'All genres') {
      films = filmList;
    } else {
      films = filmList.filter((film) => film.genre === genre);
    }
  }

  const [, setFilmId] = useState();
  return (
    <div className="catalog__films-list">
      {films.map((item) => <FilmCard setFilmId={setFilmId} id={item.id} name={item.name} poster={item.poster} previewVideoLink={item.previewVideoLink} key={item.id} />)}
    </div>
  );
}

export {FilmList};

export default connector(FilmList);
