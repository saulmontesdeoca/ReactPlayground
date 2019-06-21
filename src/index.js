import React from 'react';
import ReactDOM from 'react-dom';
import Badge from './components/Badge';
import 'bootstrap/dist/css/bootstrap.css';
import './global.css';


const element = <h1>Hello Badge!</h1>;
const container = document.getElementById('root');

ReactDOM.render(<Badge />, container);