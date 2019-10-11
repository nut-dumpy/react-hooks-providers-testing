import React from 'react';
import ReduxChild from '../ReduxChild';
import { createMount } from '@material-ui/core/test-utils';

import Provider from './util/ReduxProvider'

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
	mount(<Provider><ReduxChild/></Provider>);
});

it('renders with proper redux state', () => {
	const app = mount(<Provider><ReduxChild/></Provider>);
	expect(app.find('span').text()).toBe(`1`)
});

it('renders with proper redux state updates', () => {
	const app = mount(<Provider><ReduxChild/></Provider>);
	app.find('button').simulate('click')
	expect(app.find('span').text()).toBe(`2`)
});
