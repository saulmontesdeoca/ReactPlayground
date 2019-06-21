import React from 'react';
import ReactDOM from 'react-dom';
import BadgeNew from './pages/BadgeNew';
import 'bootstrap/dist/css/bootstrap.css';
import './global.css';


const element = <h1>Hello Badge!</h1>;
const container = document.getElementById('root');

ReactDOM.render(<BadgeNew />, container);