import React from 'react';
import CastPage from 'src/CastPage';

describe('About snapshot', () => {
    it('should correct renderer', () => {
        const component = renderer(<CastPage />);

        expect(component).toMatchSnapshot();
    });
});