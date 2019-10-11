import React, { useCallback } from 'react'
import { useTheme, makeStyles } from '@material-ui/styles';

import { useSelector, useDispatch } from 'react-redux'
import { test } from './redux/action'
const useChildStyles = makeStyles(theme => ({
	root: {
		background: 'white',
		display: 'inline-block',
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    border: 0,
    borderRadius: 3,
    padding: `0 ${theme.label.spacing}px`,
		margin: 16,
	},
	button: {
		background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
		color: 'white',
		fontSize: '22px',
		margin: 8,
		border: 'none',
		padding: '8px 16px',
		borderRadius: 4
	}
}))

function Child() {
	const theme = useTheme();
	const classes = useChildStyles()

	const count = useSelector((state) => state.increment )
	const d = useDispatch()

	const dTest = useCallback(
		() => d(test()),
		[d]
	)

	return <div className={classes.root}>
		<span>{count} - {theme.label.spacing}</span>
		<button className={classes.button} onClick={dTest}>Increment</button>
	</div>
}

export default Child
