import { genre } from "./genre";

export class Movie {
    id: number;
    title: string;
    posterUrl: string;
    revenue: number;
    imdbId: string;
    releaseDate: string;
    averageVote: number;
    overview: string;
    tagline: string;
    genres: genre[];
}