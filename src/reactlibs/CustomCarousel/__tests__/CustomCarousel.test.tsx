import React from 'react';
import CustomCarousel from '../index';
import configureStore from 'redux-mock-store';

describe('CustomCarousel snapshot', () => {
    let store;

    beforeEach(()=> {
        store = mockStore({
            movies: [
                {
                    adult: false,
                    backdrop_path: '/7KL4yJ4JsbtS1BNRilUApLvMnc5.jpg',
                    genre_ids: [18, 53],
                    id: 649087,
                    original_language: 'sv',
                    original_title: 'Red Dot',
                    overview: 'On a hiking trip to rekindle their marriage',
                    popularity: 1040.699,
                    poster_path: '/xZ2KER2gOHbuHP2GJoODuXDSZCb.jpg',
                    release_date: '2021-02-11',
                    title: 'Red Dot',
                    video: false,
                    vote_average: 6.3,
                    vote_count: 337
                }
            ]
        });
    })

    it('should component renderer correctly', () => {
        const component = mountSmart(<CustomCarousel/>, store);

        expect(component).toMatchSnapshot();
    });

    it('should component renderer correctly CustomCarousel', () => {
        const component = mountSmart(<CustomCarousel/>, store);

        expect(component.find('CustomCarousel')).toHaveLength(1);
    });
});