import {Link, useHistory} from 'react-router-dom';
import {AppRoute} from '../../constants/constants';

type FilmCardProps = {
  name: string;
  poster: string;
  id: string;
  setFilmId: any;
}

function FilmCard({name, poster, id, setFilmId}: FilmCardProps): JSX.Element {

  const history = useHistory();

  return (
    <article onClick={() => history.push(AppRoute.FILM)}  onMouseEnter={() => setFilmId(id)} className="small-film-card catalog__films-card">
      <div className="small-film-card__image">
        <img src={poster} alt={name} width="280" height="175"/>
      </div>
      <h3 className="small-film-card__title">
        <Link className="small-film-card__link" to={AppRoute.FILM}>{name}</Link>
      </h3>
    </article>);
}

export default FilmCard;
