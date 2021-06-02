import React from 'react';
import { act } from 'react-dom/test-utils';
import CustomButton, { TProps } from '../CustomButton';
import {mount, ReactWrapper} from 'enzyme';

jest.mock('react-i18next', () => ({
    // this mock makes sure any components using the translate hook can use it without a warning being shown
    useTranslation: () => {
        return {
            t: (str: string) => str,
            i18n: {
                changeLanguage: () => new Promise(() => {}),
            },
        };
    },
}));

describe('CustomButton tests', () => {
    let props: TProps;
    let component: ReactWrapper<any, React.Component["state"], React.Component>;

    beforeEach(()=> {
        props = {
            color: 'inherit',
            variant: 'contained',
            textKey: 'button',
            onClick: jest.fn()
        }
        component = mount(<CustomButton {...props}/>);
    })

    it('should render snapshot', () => {
        expect(component).toMatchSnapshot();
    });

    it('should call onClick function', () => {
        act(() => {
            component.find('CustomButton').at(0).getElement().props.onClick();
        })
        component.update();
        expect(props.onClick).toHaveBeenCalled();
    })
});