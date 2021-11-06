import {GENRES_ITEMS} from '../../constants/constants';
import Genre from './genre';
import {Dispatch, bindActionCreators} from '@reduxjs/toolkit';
import {connect, ConnectedProps} from 'react-redux';
import {Actions} from '../../types/action';
import {ChangeGenre, GetFilms} from '../../store/action';
import {State} from '../../types/state';

const mapStateToProps = ({genre}: State) => ({
  genre,
});

const mapDispatchToProps = (dispatch: Dispatch<Actions>) => bindActionCreators({
  onChangeGenre: ChangeGenre,
  onGetFilms: GetFilms,
}, dispatch);

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

function GenresList(props: PropsFromRedux): JSX.Element {
  const {genre, onChangeGenre, onGetFilms} = props;

  return (
    <ul className="catalog__genres-list">
      {GENRES_ITEMS.map((item, index) => <Genre getFilms={onGetFilms} changeGenre={onChangeGenre} key={item} genre={genre} name={item}/>)}
    </ul>
  );
}

export {GenresList};
export default connector(GenresList);
