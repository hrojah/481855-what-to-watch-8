export enum ActionType {
  ChangeGenre = 'filter/changeGenre',
  GetFilms = 'filter/getFilms',
  ShowMore = 'films-list/showMore'
}

export type ChangeGenreAction = {
  type: ActionType.ChangeGenre;
  payload: string;
}

export type GetFilmsAction = {
  type: ActionType.GetFilms;
}

export type ShowMoreAction = {
  type: ActionType.ShowMore;
}

export type Actions = ChangeGenreAction | GetFilmsAction | ShowMoreAction;
