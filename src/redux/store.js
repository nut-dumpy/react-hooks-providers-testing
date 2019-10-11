import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'

import reducer from './reducer'

const middleware = applyMiddleware(thunk)
const enh = [middleware]
if (window && window.__REDUX_DEVTOOLS_EXTENSION__)
	enh.push(window.__REDUX_DEVTOOLS_EXTENSION__())
const enhancers = compose(...enh)

const store = createStore(
	reducer,
	enhancers
)

if (process.env.NODE_ENV !== 'production' && module.hot) {
	module.hot.accept('./reducer', () => store.replaceReducer(reducer))
}

export default store
