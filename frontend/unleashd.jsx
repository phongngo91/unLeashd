import React from 'react';
import reactDOM from 'react-dom';
import Root from './components/root';

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");

  reactDOM.render(<Root/>, root);
});

