import React from 'react';
import { act } from 'react-dom/test-utils';
import FilmCard, { TProps } from '../FilmCard';
import {mount, ReactWrapper} from 'enzyme';

jest.mock('react-i18next', () => ({
    useTranslation: () => {
        return {
            t: (str: string) => str,
            i18n: {
                changeLanguage: () => new Promise(() => {}),
            },
        };
    },
}));

describe('FilmCard tests', () => {
    let props: TProps;
    let component: ReactWrapper<any, React.Component["state"], React.Component>;

    beforeEach(()=> {
        props = {
            alt: 'Movie Poster',
            title: 'Raya and the Last Dragon',
            image: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/best-kids-movies-2020-mulan-1571175006.jpg',
            genre: 'comedy',
            variant: 'h6',
            vote_count: 1,
            popularity: 1.5,
            vote_average: 8.5,
            onClick: jest.fn()
        }
        component = mount(<FilmCard {...props}/>);
    })

    it('should render snapshot', () => {
        expect(component).toMatchSnapshot();
    });

    it('should call onClick function', () => {
        act(() => {
            component.find('FilmCard').at(0).getElement().props.onClick();
        })
        component.update();
        expect(props.onClick).toHaveBeenCalled();
    })
});