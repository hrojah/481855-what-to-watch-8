import FilmCard from '../film-card/film-card';
import {useState} from 'react';
import {State} from '../../types/state';
import {bindActionCreators, Dispatch} from '@reduxjs/toolkit';
import {Actions} from '../../types/action';
import {ChangeGenre, GetFilms} from '../../store/action';
import {connect, ConnectedProps} from 'react-redux';
import ShowMoreButton from '../show-more-button/show-more-button';

type FilmListProps = {
  genreFilm?: string;
}

const mapStateToProps = ({filmList, genre, showedFilmsCount}: State) => ({
  filmList,
  genre,
  showedFilmsCount,
});

const mapDispatchToProps = (dispatch: Dispatch<Actions>) => bindActionCreators({
  onChangeGenre: ChangeGenre,
  onGetFilms: GetFilms,
}, dispatch);

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;
type ConnectedComponentProps = PropsFromRedux & FilmListProps;

function FilmList(props: ConnectedComponentProps): JSX.Element {
  const {filmList, genre, genreFilm, showedFilmsCount} = props;
  let films;
  const showedFilms = filmList.slice(0, showedFilmsCount);

  if (genreFilm) {
    films = filmList.filter((film) => film.genre === genreFilm);
  } else {
    if (genre === 'All genres') {
      films = showedFilms;
    } else {
      films = showedFilms.filter((film) => film.genre === genre);
    }
  }

  const [, setFilmId] = useState();
  return (
    <>
      <div className="catalog__films-list">
        {films.map((item) => <FilmCard setFilmId={setFilmId} id={item.id} name={item.name} poster={item.poster} previewVideoLink={item.previewVideoLink} key={item.id} />)}
      </div>
      {filmList.length > showedFilms.length ? <ShowMoreButton /> : ''}
    </>
  );
}

export {FilmList};

export default connector(FilmList);
