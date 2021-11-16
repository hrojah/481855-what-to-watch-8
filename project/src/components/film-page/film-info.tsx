import {FilmTypes} from '../../types/film';
type FilmInfoProps = {
  film: FilmTypes;
}

function FilmInfo({film}: FilmInfoProps): JSX.Element {

  const filmRatingCalculation = () => {
    switch (true) {
      case film.rating <= 3:
        return 'Bad';
      case film.rating > 3 && film.rating <= 5:
        return 'Normal';
      case film.rating > 5 && film.rating <= 8:
        return 'Good';
      case film.rating > 8 && film.rating < 10:
        return 'Very good';
      case film.rating > 10:
        return 'Awesome';
    }
  };

  const filmRating = filmRatingCalculation();

  return (
    <>
      <div className="film-rating">
        <div className="film-rating__score">{film.rating}</div>
        <p className="film-rating__meta">
          <span className="film-rating__level">{filmRating}</span>
          <span className="film-rating__count">{film.scoresCount}</span>
        </p>
      </div>

      <div className="film-card__text">
        <p>{film.description}</p>

        <p className="film-card__director"><strong>Director: {film.director}</strong></p>

        <p className="film-card__starring"><strong>Starring: {!!film.starring && film.starring.join(', ')} and other</strong></p>
      </div>
    </>
  );
}

export default FilmInfo;
