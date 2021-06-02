export type TOption = {
    id: number;
    name: string;
    adult: false;
    gender: number;
    popularity: number;
    profile_path: string;
    known_for_department: string;
}

export type TTempOption = {
    language?: string;
    title?: string;
}

export type TFilter = {
    popularity: string,
    release_date: string,
    revenue: string,
    vote_average: string,
}

export type TSortBy = {
    title: keyof TFilter
}