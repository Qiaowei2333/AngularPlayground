import { genre } from "./genre";

export class movie {
    id: number;
    title: string;
    posterUrl: string;
    revenue: number;
    imdbId: string;
    releaseDate: Date;
    averageVote: number;
    overview: string;
    tagline: string;
    genres: genre[];
}