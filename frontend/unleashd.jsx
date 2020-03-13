import React from 'react';
import reactDOM from 'react-dom';
import Root from './components/root';
import configureStore from "./store/store";
import { searchUsers } from "./actions/users_actions";

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");

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

  // TODO: REMOVE THIS
  window.searchUsers = searchUsers;
  window.store = store;

  reactDOM.render(<Root store={store}/>, root);
});

