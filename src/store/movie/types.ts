export interface IMovie {
    id: number,
    genre: string;
    adult: boolean,
    title: string,
    video: boolean,
    overview: string,
    genre_ids: Array<number>,
    popularity: number,
    vote_count: number,
    poster_path: string,
    release_date: string,
    vote_average: number,
    backdrop_path: string,
    original_title: string,
    original_language: string,
}

export interface IMovieResponse {
    page: number,
    result: Array<IMovie>,
    total_pages: number,
    total_results: number,
}

export type  TDiscoverPayload= {
    value?: string | number | number[],
    filter?: string,
    sort_by?: string
    language?: string,
}
