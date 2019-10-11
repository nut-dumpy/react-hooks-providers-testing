import React from 'react'

const validateOrThrow = (variables, messages, predicate) => {
	predicate = predicate || ((value) => typeof value !== 'undefined')

	const failing = variables.findIndex(predicate)
	if (failing)
		throw new Error(messages[failing])

	return true
}

/**
 * @summary Creates wrapper Component with passed Provider
 * @param {React.Component} Provider Provider Component to create wrap of
 * @param {any} providerProps Provider's set of props, store with redux for example
 */
export const createProvider = (Provider, providerProps) => {
	validateOrThrow([Provider, providerProps], ['No Provider passed', 'No provider props passed'])

	const ProviderWrapper = ({ children }) => <Provider {...providerProps}>{children}</Provider>
	return ProviderWrapper
}

/**
 * @summary Creates Component wrapped in Provider, usually for using React context
 * @param {React.Component} Provider Provider Component to wrap Component in
 * @param {any} providerProps Provider's set of props, store with redux for example
 * @param {React.Component} Component Component to provide Provider's context for
 */
export const createContextualizedComponent = (Provider, providerProps, Component) => {
	validateOrThrow(
		[Provider, providerProps, Component],
		['No Provider passed', 'No provider props passed', 'No Component passed. Maybe you wanted to createProvider instead?']
	)

	const ContextualizedComponent = ({ children, ...props}) => (<Provider {...providerProps}>
		<Component {...props}>{children}</Component>
	</Provider>)
	return ContextualizedComponent
}


/**
 * Can be used to export one global wrappers like so:
 * import Provider from 'react-redux'
 * import store from '~/redux/store'
 * const ReduxProvider = createProvider(Provider, { store })
 * export default ReduxProvider
 */
