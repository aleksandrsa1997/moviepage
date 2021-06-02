import React from 'react';
import CustomInput from '../CustomInput';
import { mount } from 'enzyme';
import { act } from 'react-dom/test-utils';
jest.mock('react-i18next', () => ({
    // this mock makes sure any components using the translate hook can use it without a warning being shown
    useTranslation: () => {
        return {
            t: (str) => str,
            i18n: {
                changeLanguage: () => new Promise(() => {}),
            },
        };
    },
}));

describe('CustomInput tests', () => {
    let props;
    let component;

    beforeEach(()=> {
        props = {
            placeholder: 'enter text ...',
            value: 'test',
            onChange: jest.fn()
        }
        component = mount(<CustomInput {...props} />);
    })

    it('should render snapshot', () => {

        expect(component).toMatchSnapshot();
    });

    it('should call onChange function', () => {
        act(() => {
            component.find('CustomInput').at(0).getElement().props.onChange();
        })
        
        component.update();
        expect(props.onChange).toHaveBeenCalled();
    })
});