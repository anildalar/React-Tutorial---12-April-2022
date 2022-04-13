import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createStore } from 'redux';
import rootReducer from './redux/reducers/rootReducer';
import { loginActionCreator } from './redux/actionCreators/ActionCreators';
import { Provider } from 'react-redux';


let storeObject = createStore(rootReducer);

//console.log(store);

//console.log(store.getState());

/* store.subscribe(()=>{
  console.log(store.getState())
}); */


//store.dispatch(loginActionCreator());


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={storeObject}>
       <App />
    </Provider>
  
  </React.StrictMode>
);

