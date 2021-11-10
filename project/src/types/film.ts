export type FilmTypes = {
  name: string,
  previewImage: string,
  poster: string,
  backgroundImage: string,
  backgroundColor: string,
  videoLink: string,
  previewVideoLink: string,
  description: string,
  rating: number,
  scoresCount: number,
  director: string,
  starring: string[],
  runTime: number,
  genre: string,
  released: number,
  isFavorite: boolean,
  id: number,
}

export type ServerFilmTypes = {
  id: number;
  name: string;
  ['poster_image']: string;
  ['preview_image']: string;
  ['background_image']: string;
  ['background_color']: string;
  ['video_link']: string;
  ['preview_video_link']: string;
  description: string;
  rating: number;
  ['scores_count']: number;
  director: string;
  starring: string[];
  ['run_time']: number;
  genre: string;
  released: number;
  ['is_favorite']: boolean;
};

export type FilmsTypes = FilmTypes[];

export type ServerFilmsTypes = ServerFilmTypes[];
