export type ReviewTypes = {
  rating: number,
  comment: string,
  date: string,
  id: number,
  user: {
    id: number,
    name: string,
  }
}

export type ReviewsTypes = ReviewTypes[];
