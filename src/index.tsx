// import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'antd-button-color/dist/css/style.css';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { store } from 'store';
import { ConfigProvider } from 'antd';
import { validateMessages } from './utils/Validation';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  // <React.StrictMode>
    <Provider store={store}>
      <ConfigProvider form={{ validateMessages }}>
        <App />
      </ConfigProvider>
    </Provider>
  // </React.StrictMode>
);

reportWebVitals();
