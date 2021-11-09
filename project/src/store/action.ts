import {ActionType, ChangeGenreAction, GetFilmsAction, ShowMoreAction} from '../types/action';

export const ChangeGenre = (genre: string): ChangeGenreAction => ({
  type: ActionType.ChangeGenre,
  payload: genre,
});

export const GetFilms = (): GetFilmsAction => ({
  type: ActionType.GetFilms,
});
export const ShowMore = (): ShowMoreAction => ({
  type: ActionType.ShowMore,
});


