
import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import './index.css';
import { Provider } from 'react-redux'
import store from 'store/store';

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
  <StrictMode>
    <BrowserRouter>
      <Provider store={store}>
      <App />
      </Provider>
    </BrowserRouter>
  </StrictMode>,
)

