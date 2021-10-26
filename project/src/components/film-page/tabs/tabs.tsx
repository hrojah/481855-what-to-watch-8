import FilmInfo from '../film-info';
import Details from './details';
import Reviews from './reviews';
import {useState} from 'react';
import {FilmTypes} from '../../../types/film';
import {ReviewTypes} from '../../../types/review';

type TabsProps = {
  film: FilmTypes;
  reviews: ReviewTypes[];
  id: string;
}

function Tabs({film, reviews, id}: TabsProps): JSX.Element {
  const [isOverview, setIsOverview] = useState(true);
  const [isDetails, setIsDetails] = useState(false);
  const [isReviews, setIsReviews] = useState(false);

  return (
    <div className="film-card__desc">
      <nav className="film-nav film-card__nav">
        <ul className="film-nav__list">
          <li className={isOverview ? 'film-nav__item film-nav__item--active' : 'film-nav__item'}>
            <a onClick={(evt) => {setIsOverview(true); setIsDetails(false); setIsReviews(false); evt.preventDefault();}} href="" className="film-nav__link">Overview</a>
          </li>
          <li className={isDetails ? 'film-nav__item film-nav__item--active' : 'film-nav__item'}>
            <a onClick={(evt) => {setIsOverview(false); setIsDetails(true); setIsReviews(false); evt.preventDefault();}} href="" className="film-nav__link">Details</a>
          </li>
          <li className={isReviews ? 'film-nav__item film-nav__item--active' : 'film-nav__item'}>
            <a onClick={(evt) => {setIsOverview(false); setIsDetails(false); setIsReviews(true); evt.preventDefault();}} href="" className="film-nav__link">Reviews</a>
          </li>
        </ul>
      </nav>

      {isOverview ? <FilmInfo film={film} /> : ''}
      {isDetails ? <Details film={film} /> : ''}
      {isReviews ? <Reviews reviews={reviews} /> : ''}
    </div>
  );
}

export default Tabs;
