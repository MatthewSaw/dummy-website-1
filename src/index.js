import { render } from '@testing-library/react';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

const renderElement =
<React.StrictMode>
  <App />
</React.StrictMode>

ReactDOM.render(
  renderElement,
  document.getElementById('root')
);
