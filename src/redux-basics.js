const redux = require('redux');
const createStore = redux.createStore;

const initialState = {
    counter: 0
};


const reducer = (state = initialState, action) => {
    switch(action.type) {
        case 'INCREMENT': 
            return {
                ...state,
                counter: state.counter + 1
            };
        case 'DECREMENT':
            return {
                ...state,
                counter: state.counter - 1
            };
        default:
            return state;
    }
};

const store = createStore(reducer);
store.dispatch({ type: 'INCREMENT' });
store.dispatch({ type: 'INCREMENT' });
store.dispatch({ type: 'DECREMENT' });


console.log('The value of store is: ', store.getState());