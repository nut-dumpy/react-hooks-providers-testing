import React from 'react';
import ThemeChild from '../ThemeChild';
// for assertions
import { theme } from '../App'
import { createMount } from '@material-ui/core/test-utils';

import Provider from './util/MaterialProvider'

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
	mount(<Provider><ThemeChild/></Provider>);
});

it('renders with proper theme values', () => {
	const app = mount(<Provider><ThemeChild/></Provider>);
	expect(app.find('span').text()).toBe(`spacing ${theme.label.spacing}`)
});

it('renders with proper styling', () => {
	const app = mount(<Provider><ThemeChild/></Provider>);
	// label depends on other tests for some reason, this test is 3rd in row so label is incremented to 3
	expect(app.find('span').props().className).toBe(`makeStyles-label-3`)
});

it('extra test for prop passing', () => {
	const app = mount(<Provider><ThemeChild testProp={37}/></Provider>);
	expect(app.find('Child').props().testProp).toBe(37)
});
