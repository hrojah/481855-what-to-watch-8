import {nanoid} from '@reduxjs/toolkit';
import {ReviewTypes} from '../types/review';

export const reviews: ReviewTypes[]  = [
  {rating: 8.9, comment: 'Discerning travellers and Wes Anderson fans will luxuriate in the glorious Mittel-European kitsch of one of the director&#39;s funniest and most exquisitely designed movies in years.', date: new Date(), user: {id: nanoid().toString(), name: 'Kate Muir'}, id: nanoid().toString()},
  {rating: 8.9, comment: 'Discerning travellers and Wes Anderson fans will luxuriate in the glorious Mittel-European kitsch of one of the director&#39;s funniest and most exquisitely designed movies in years.', date: new Date(), user: {id: nanoid().toString(), name: 'Kate Muir'}, id: nanoid().toString()},
  {rating: 8.9, comment: 'Discerning travellers and Wes Anderson fans will luxuriate in the glorious Mittel-European kitsch of one of the director&#39;s funniest and most exquisitely designed movies in years.', date: new Date(), user: {id: nanoid().toString(), name: 'Kate Muir'}, id: nanoid().toString()},
];
