import React from 'react';
import { MuiThemeProvider, makeStyles } from '@material-ui/core/styles';
import { Provider } from 'react-redux'

import ThemeChild from './ThemeChild'
import ReduxChild from './ReduxChild'
import FullChild from './FullChild'
import './App.css';
import store from './redux/store'

export const theme = { label: { spacing: 32 } }

const useStyles = makeStyles({
	root: {
		background: '#27485a',
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center',
		margin: 0,
		height: '100vh'
	}
})

function App() {
	const classes = useStyles()

	return (
		<div className={classes.root}>
			<Provider store={store}>
				<MuiThemeProvider theme={theme}>
					<ReduxChild></ReduxChild>
					<ThemeChild></ThemeChild>
					<FullChild></FullChild>
				</MuiThemeProvider>
			</Provider>
		</div>
	);
}

export default App;
