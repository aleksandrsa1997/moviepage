import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import React from 'react';
import { IMovie } from 'src/store/movie/types';
import FilmCard from 'src/reactlibs/FilmCard';
import { IMAGE_URL } from 'src/constants/api';
import { responsive } from './styles';
import Link from 'next/link';

export type TProps = {
    movies: Array<IMovie>,
    sortedMovies: any,
    setIdToStore: (value: string) => void;
    getMovieInfoById: () => void;
}

const setting = {
    ssr: true, // means to render carousel on server-side.
    showDots: true,
    infinite: true,
    swipeable: false,
    draggable: false,
    itemClass: "carousel-item-padding-40-px",
    responsive: responsive,
    dotListClass: "custom-dot-list-style",
    autoPlaySpeed: 1000,
    containerClass: "carousel-container",
    keyBoardControl: true,
    customTransition: "all .5",
    transitionDuration: 500,
    removeArrowOnDeviceType: ["tablet", "mobile"],
}
// @ts-ignore
const CustomCarousel = ({ sortedMovies, setIdToStore, getMovieInfoById }: TProps) => {
    const handleClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        // setIdToStore((event.target as HTMLButtonElement).id);
        console.log((event.target as HTMLButtonElement).id);
        // @ts-ignore
        getMovieInfoById((event.target as HTMLButtonElement).id);
    }

    return (<Carousel { ...setting } >
        {sortedMovies.map((item: any) =>
        <Link href='/about_movie'>
            <FilmCard
                id={item.id}
                key={ item.title }
                alt='Movie Poster'
                color='textSecondary'
                title={ item.title }
                image={`${IMAGE_URL}${item.poster_path}`}
                variant='body2'
                overview={item.overview}
                popularity={ item.popularity }
                vote_count={ item.vote_count }
                vote_average={ item.vote_average }
                original_title={item.original_title}
                onClick={handleClick}
            />
            </Link>
        )}
    </Carousel>
    );
}
export default CustomCarousel;