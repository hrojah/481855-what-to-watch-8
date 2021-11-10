import {Link, useHistory} from 'react-router-dom';
import {HOVER_DELAY} from '../../constants/constants';
import {useEffect, useRef, useState} from 'react';
import FilmCardPreview from './film-card-preview';
import FilmCardVideo from './film-card-player';

type FilmCardProps = {
  name: string;
  poster: string;
  id: number;
  previewVideoLink: string
  setFilmId: any;
}

function FilmCard({name, poster, id, setFilmId, previewVideoLink}: FilmCardProps): JSX.Element {

  const history = useHistory();

  const timer = useRef<NodeJS.Timeout | null>(null);
  const [isHovered, setHovered] = useState(false);
  const [isDelayedHovered, setDelayedHovered] = useState(false);

  const clearTimer = () => {
    if (timer.current) {
      clearTimeout(timer.current);
      timer.current = null;
    }
  };

  useEffect(() => {
    clearTimer();

    if (!isHovered) {
      if (isDelayedHovered) {
        setDelayedHovered(false);
      }

      return;
    }

    timer.current = setTimeout(() => {
      if (!isHovered) {
        if (isDelayedHovered) {
          setDelayedHovered(false);
        }

        return;
      }

      setDelayedHovered(true);
    }, HOVER_DELAY);

    return clearTimer;
  }, [isDelayedHovered, isHovered]);

  return (
    <article onClick={() => history.push(`/films/${id}`)} onMouseEnter={() => {setFilmId(id); setHovered(true);}} onMouseLeave={() => setHovered(false)} className="small-film-card catalog__films-card">
      { isDelayedHovered ?
        (<FilmCardVideo src={previewVideoLink} poster={poster} />)
        :
        (<FilmCardPreview src={poster} alt={name} />)}
      <h3 className="small-film-card__title">
        <Link className="small-film-card__link" to={`/films/${id}`}>{name}</Link>
      </h3>
    </article>);
}

export default FilmCard;
