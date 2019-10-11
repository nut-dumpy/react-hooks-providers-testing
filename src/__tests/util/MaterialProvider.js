import { MuiThemeProvider } from '@material-ui/core/styles';

import { createProvider } from './hookProvider'
import { theme } from '../../App'

export default createProvider(MuiThemeProvider, { theme })
