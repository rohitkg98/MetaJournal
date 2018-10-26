export interface Review {
  Title: string;
  AverageScore: number;
  Reviews: {
    Username: string;
    Score: number;
    Upvote: number;
    Downvote: number;
  }[] ;
}
