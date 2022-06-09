import { createStore } from "redux";

const reducer = (state = {counter: 0}, action) => {

    switch(action.type){

        case 'UP':
            return {counter: state.counter+1};
        case 'DOWN':
            return { counter: state.counter-1};
        case 'ADD':
            return { counter: state.counter + action.payload};
        case 'RESET':
            return { counter: state.counter-state.counter};
        default: 
            return state;
    }
}

const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && 
    window.__REDUX_DEVTOOLS_EXTENSION__());



export default store;