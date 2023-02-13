import { TGenre } from "./genre";

export type TMovie = {
  id: number;
  title: string;
  budget: number;
  genres: TGenre[];
  overview: string;
  release_date: string;
  revenue: number;
  runtime: number;
  status: string;
  vote_average: number;
};