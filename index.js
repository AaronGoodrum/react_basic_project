import React from 'react';
import ReactDOM from 'react-dom';

// import './index.css';
import 'font-awesome/css/font-awesome.css';

import Container from './components/Container';
import Header from './components/Header';

export const load = () => {
  ReactDOM.render(<Container />, document.getElementById('app'));
  ReactDOM.render(<Header />, document.getElementById('header'));
};

load();