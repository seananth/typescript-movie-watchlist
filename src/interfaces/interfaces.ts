export interface movieProps {
  id: number;
  title: string;
  release_date: string;
  vote_average: string;
  overview: string;
  poster_path?: string;
}

export type movieCardProps = {
  movie: movieProps;
};
