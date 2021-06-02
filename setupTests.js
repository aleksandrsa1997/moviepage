import React from 'react';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import ReactDom from 'react-dom';
import renderer from 'react-test-renderer';
import { render } from '@testing-library/react';
import { expectSaga } from 'redux-saga-test-plan';
import {
    mount,
    shallow,
    configure,
} from 'enzyme';
import fetchMock from 'jest-fetch-mock';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';

configure({ adapter: new Adapter() });

fetchMock.enableMocks();

global.React = React;
global.mockStore = configureStore();
global.ReactDom = ReactDom;
global.fetchMock = fetchMock;
global.expectSaga = expectSaga;
global.mount = mount;
global.render = render;
global.shallow = shallow;
global.renderer = component => renderer.create(component).toJSON();
global.mountSmart = (component, store ) => {
    return store ?  mount(
        <Provider store={store}>
            { component }
        </Provider>,
    ): component;
};