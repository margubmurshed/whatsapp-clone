import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { Store } from './Redux/Store';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(

    <Provider store={Store}>
        <Router>
            <App />
        </Router>
    </Provider>

    , document.getElementById('root'));

reportWebVitals();
