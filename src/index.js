import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, applyMiddleware } from 'redux';
//import reducer from './reducers/counter';
//import { decrement, increment } from "./actions";
import { Provider } from 'react-redux';
import rootReducer from './reducers';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

// const logger = store => next => action => {
//     console.log('dispatching', action);
//     let result = next(action);
//     console.log('next state', store.getState());
//     return result;
// };
//
// const error = store => next => action => {
//     try {
//         next(action)
//     }catch(e) {
//         console.log('error' + e);
//     }
// }


const store = createStore(rootReducer, {}, applyMiddleware(logger, thunk));

//store.subscribe(() => console.log("State updated", store.getState() ))

ReactDOM.render(
    <Provider store={ store }>
        <App store={ store }/>
    </Provider>,
    document.getElementById('root')
);

registerServiceWorker();
