import React from 'react';
import ReactDOM from 'react-dom';
// Add css files
import 'bootstrap/dist/css/bootstrap.min.css';
//import 'font-awesome/css/font-awesome.min.css'; // 4.x
import '@fortawesome/fontawesome-free/css/all.css'; // 5.x
import './index.css';


// Add js files
import 'jquery';
import 'popper.js';
import 'bootstrap';

import {ContextWrapper, ContextWeapper} from './store/appContext';
import Layout from './layout';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
<ContextWrapper>
<Layout />
</ContextWrapper>
, 
document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
