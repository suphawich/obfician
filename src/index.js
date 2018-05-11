import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import HomepageLayout from './layouts/HomepageLayout';
import Benoitnihant from './layouts/Benoitnihant';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Benoitnihant />, document.getElementById('root'));
registerServiceWorker();
