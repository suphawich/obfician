import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, combineReducers} from 'redux';
import {Provider} from 'react-redux';
import './index.css';
import App from './App';
import HomepageLayout from './layouts/HomepageLayout';
import Benoitnihant from './layouts/Benoitnihant';
import registerServiceWorker from './registerServiceWorker';

const initialState = {fgHeight: 70, fgGo: true, fgHome: false, fgBack: false, sgHeight: 30, sgUp: true};
const benoitnihantReducer = (state=initialState, action) => {
    switch (action.type) {
        case "MOVE_FIRST_SEGMENT":
            state={
                ...state,
                fgHeight: action.payload.fgHeight,
                fgGo: action.payload.fgGo,
                fgHome: action.payload.fgHome,
                fgBack: action.payload.fgBack,
                sgHeight: action.payload.sgHeight,
                sgUp: action.payload.sgUp,
            }
            break;
        case "RESET":
            state = initialState;
            break;
        default:
    }
    return state;
}
const store = createStore(combineReducers({benoitnihant: benoitnihantReducer}), 15000);
store.subscribe(()=>{
    console.log(store.getState());
});
// store.dispatch({
//     type: "GO",
// });
ReactDOM.render(
    <Provider store={store}>
        <Benoitnihant />
    </Provider>
    ,document.getElementById('root')
);
registerServiceWorker();
