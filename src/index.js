import React from 'react';
import ReactDOM from 'react-dom';
import { dom, library } from '@fortawesome/fontawesome-svg-core'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import './scss/index.scss';
import App from './components/App';
import { Provider } from 'react-redux';
import { store} from './store';
import reportWebVitals from './reportWebVitals';

library.add(fas, far);
dom.i2svg()

ReactDOM.render(
  <Provider store={store}>
  <React.StrictMode>     
      <App />   
  </React.StrictMode>
   </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
