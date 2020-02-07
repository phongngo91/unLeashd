import React from 'react';
import reactDOM from 'react-dom';
import Root from './components/root';
import configureStore from "./store/store";
import { login, logout, signup } from './actions/session_actions'; 

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");

  // Code to keep user logged in, window.currentUser is coming from 
  // the code on app/views/static_pages/root.html.erb 
  let store;

  if (window.currentUser){
    const preloadedState = {
      entities: {
        users: {[window.currentUser.id]: window.currentUser }
      },
      session: { id: window.currentUser.id }
    };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }

  // Testing
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  window.login = login;
  window.logout = logout;
  window.signup = signup;
  
  // testing end

  reactDOM.render(<Root store={store}/>, root);
});

