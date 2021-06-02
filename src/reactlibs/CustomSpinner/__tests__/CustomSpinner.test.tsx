import React from 'react';
import CustomSpinner from 'src/reactlibs/CustomSpinner';

describe('CustomSpinner snapshot', () => {
    it('should correct renderer', () => {
        const component = renderer(<CustomSpinner />);

        expect(component).toMatchSnapshot();
    });
});