const defaultState = {
	increment: 1
}

const test = (state = defaultState, action) => {
  switch (action.type) {
    case 'TEST':
      return {
				...state,
				increment: state.increment + 1,
			}
    case 'TEST2':
      return {
				...state,
				...action,
			}
    default:
      return state
  }
}

export default test
