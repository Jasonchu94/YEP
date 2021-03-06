import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';

import Root from "./component/root"


document.addEventListener("DOMContentLoaded", ()=>{

   const root = document.getElementById('root');
   let store
   if(window.currentUser){
      const preloadedState ={
         entitites: {
            users: { [window.currentUser.id]: window.currentUser}
         }
      };
      store = configureStore(preloadedState);
      delete window.currentUser;
   } else{
      store = configureStore()
   }
   window.getState = store.getState;
   ReactDOM.render(<Root store={store}/>,root)
})