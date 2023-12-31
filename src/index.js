import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { persistor, store } from 'redux/store';
import { ToastContainer, Zoom } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { GlobalStyles } from 'styles/GlobalStyles';
import { PersistGate } from 'redux-persist/integration/react';
import { theme } from 'styles/theme';
import { ThemeProvider } from 'styled-components';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <BrowserRouter basename="/car-rental">
          <PersistGate loading={null} persistor={persistor}>
            <App />
          </PersistGate>
        </BrowserRouter>
        <ToastContainer transition={Zoom} autoClose={2000} />
        <GlobalStyles />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
);
