export type ReviewTypes = {
  rating: number,
  comment: string,
  date: Date,
  id: string,
  user: {
    id: string,
    name: string,
  }
}
