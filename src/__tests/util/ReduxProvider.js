import { Provider } from 'react-redux';

import { createProvider } from './hookProvider'
import store from '../../redux/store'

export default createProvider(Provider, { store })
