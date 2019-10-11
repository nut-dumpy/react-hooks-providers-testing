import React from 'react';
import FullChild from '../FullChild';
import { createMount } from '@material-ui/core/test-utils';

import Provider from './util/FullContextProvider'

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16'
configure({ adapter: new Adapter() })

let mount

beforeEach(() => {
	mount = createMount()
})

afterEach(() => {
	mount.cleanUp()
})

it('renders without crashing', () => {
	mount(<Provider><FullChild/></Provider>);
});

it('renders with proper redux state', () => {
	const app = mount(<Provider><FullChild/></Provider>);
	expect(app.find('span').text()).toBe(`1 - 32`)
});

// optional sample
const ContextualizedChild = require('./util/hookProvider').createContextualizedComponent(Provider, null, FullChild)

it('renders with proper redux state updates', () => {
	const app = mount(<ContextualizedChild/>);
	app.find('button').simulate('click')
	expect(app.find('span').text()).toBe(`2 - 32`)
});
