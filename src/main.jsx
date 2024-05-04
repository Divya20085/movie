import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';

// Inline CSS to set the background color
const rootStyle = {
  backgroundColor: 'black',
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div style={rootStyle}>
      <App />
    </div>
  </React.StrictMode>
);