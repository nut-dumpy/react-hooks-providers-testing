import React, { useCallback } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { test } from './redux/action'

function Child() {
	const count = useSelector((state) => state.increment )
	const d = useDispatch()

	const dTest = useCallback(
		() => d(test()),
		[d]
	)
	useDispatch()

	return <p>
		<span>{count}</span>
		<button onClick={dTest}>Increment</button>
	</p>
}

export default Child
