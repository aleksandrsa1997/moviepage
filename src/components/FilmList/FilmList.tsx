import * as React from 'react'
import FilmCard from 'src/reactlibs/FilmCard/FilmCard';
import { FilmsCardsWrapper } from './style'
import { IMAGE_URL} from 'src/constants/api';
import { IMovie } from 'src/store/movie/types';

export type TProps = {
    movies: Array<IMovie>;
};

const FilmList: React.FC<TProps>= ({movies}) => (
    <FilmsCardsWrapper>
        {movies.map((item) =>
            // @ts-ignore
            <FilmCard
                key={item.title}
                alt='movie_poster'
                color='textSecondary'
                title={item.title}
                image={`${IMAGE_URL}${item.poster_path}`}
                variant='body2'
                popularity={item.popularity}
                vote_count={item.vote_count}
                vote_average={item.vote_average}
            />
        )}
    </FilmsCardsWrapper>
)

export default FilmList;