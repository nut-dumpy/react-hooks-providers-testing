import React from 'react'
import { useTheme, makeStyles } from '@material-ui/styles';

export const useChildStyles = makeStyles(theme => ({
	label: {
		background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
		display: 'inline-block',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
		color: 'white',
		fontSize: '22px',
		margin: 12,
    padding: `0 ${theme.label.spacing}px`,
		height: `${theme.label.spacing * 2}px`,
		lineHeight: `${theme.label.spacing * 2}px`,
	}
}))

function Child() {
	const theme = useTheme();
	const classes = useChildStyles()
	return <span className={classes.label}>{`spacing ${theme.label.spacing}`}</span>
}

export default Child
