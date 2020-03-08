import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App'; // forLoop card names
import * as serviceWorker from './serviceWorker';
import 'tachyons';
// import { robots } from './robots'; // { } destructing since it's exporting 

ReactDOM.render(<App />, document.getElementById("root"));
    
serviceWorker.unregister();
