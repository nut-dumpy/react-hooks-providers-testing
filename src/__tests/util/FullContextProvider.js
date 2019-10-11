import { createProvider, createContextualizedComponent } from './hookProvider'

import { MuiThemeProvider } from '@material-ui/core/styles';
import { Provider } from 'react-redux';

import { theme } from '../../App'
import store from '../../redux/store'

export default createContextualizedComponent(Provider, { store }, createProvider(MuiThemeProvider, { theme }))
