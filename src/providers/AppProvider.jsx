import { BrowserRouter as Router } from 'react-router-dom';
import { StyledEngineProvider } from '@mui/styled-engine';
import { Provider } from 'react-redux';

import TitleContextProvider from './TitleContext';
import ToasterProvider from './ToasterProvider';

import store from 'store/configureStore';

const AppProvider = ({ children }) => {
  return (
    <Provider store={store}>
      <TitleContextProvider>
        <Router>
          <StyledEngineProvider injectFirst>
            <ToasterProvider />
            {children}
          </StyledEngineProvider>
        </Router>
      </TitleContextProvider>
    </Provider>
  );
};

export default AppProvider;
