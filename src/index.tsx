import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter as Router } from 'react-router-dom';
import './index.scss';
import App from './App';

const Root = () => (
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>
);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(<Root />);
