import React from 'react';
import CustomDropDown from 'src/reactlibs/CustomDropDown';
import { mount } from 'enzyme';
import { act } from 'react-dom/test-utils';
import { TProps } from '../../CustomSpinner/CustomSpinner';

describe('CustomDropDown snapshot', () => {
    let props: TProps;
    let component: React.FC;

    beforeEach(()=> {
        props = {
            value: 'name',
            mapKey: 'name',
            options: [
                {
                    id: 0,
                    name: 'name',
                    adult: false,
                    gender: 1,
                    popularity: 1,
                    profile_path: 'profile_path',
                    known_for_department: 'known_for_department',
                }
            ],
            onChange: jest.fn()
        }
        component = mount(<CustomDropDown {...props} />);
    })

    it('should correct renderer', () => {

        expect(component).toMatchSnapshot();
    });

    it('should call onChange function ', () => {
        act(() => {
            component.find('CustomDropDown').at(0).getElement().props.onChange();
        })

        component.update();
        expect(props.onChange).toHaveBeenCalled();
    });
});