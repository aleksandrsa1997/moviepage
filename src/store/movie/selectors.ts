import { createSelector } from 'reselect';
import { IMovies, Filters } from './reducer';

export const getMovies = (state: IMovies) => state.movies;
export const getMovieId = (state: IMovies) => state.currenntMovieId;
export const getFilters = (state: IMovies) : Filters => state.filters;
export const getLanguages = (state: IMovies) => state.languages;
export const getFirstDate = (state: IMovies) => state.filters['release_date.gte'];
export const getMovieInfo = (state: IMovies) => state.movieInfo;
export const getSecondDate = (state: IMovies) => state.filters['release_date.lte'];
export const getVoteAverage = (state: IMovies) => state.filters['vote_average.lte'];
export const getSearchMovieName = (state: IMovies) => state.searchMovieName;
export const getCurrentLanguage = (state:IMovies) => state.filters['language'];
export const getReview = (state: any) =>  state.review;

export const sortedMoviesSelector = createSelector(
    [getMovies, getSearchMovieName],
    ( movies, searchMovieName ) => {
        let sortedMovies = movies.filter(({ original_title }) => original_title.toLowerCase().includes(searchMovieName.toLowerCase()))
        let renderMovies = [];
        (sortedMovies.join() === '')?(renderMovies = movies):(renderMovies = sortedMovies)
        return renderMovies;
    }
);

export const getLanguagesSelector = createSelector(
    getLanguages,
    ( languages ) =>
        languages.map((item) => { return { language: item } })
);

export const getVoteAverageNumber = createSelector(
    getVoteAverage,
    ( vote_average ) => { return Number(vote_average) }
);

export const getReviewSelector = createSelector(
    getReview,
    (review) =>
        review.map((item: any) => {
            return {...item,
                created_at: item.created_at.slice(0, 10),
            }
        })
)