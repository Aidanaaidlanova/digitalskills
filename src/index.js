import React from 'react';
import ReactDOM from 'react-dom';
import './fonts.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import i18n from "./i18n/index";
import {I18nextProvider} from 'react-i18next';

const app = (
    <I18nextProvider i18n={i18n}>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </I18nextProvider>
);

ReactDOM.render(app, document.getElementById('root'));
serviceWorker.unregister();
