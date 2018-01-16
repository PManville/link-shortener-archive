import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import { Provider } from 'react-redux';

const initialState = {
	result: 1,
	lastValues: []
}

const reducer = (state = initialState, action) => {
	switch(action.type){
		case "ADD":
			state = {
				...state,
				result: state.result + action.payload,
				lastValues: [...state.lastValues, action.payload]
			}
			break;
		case "SUBTRACT":
			state = {
				...state,
				result: state.result - action.payload,
				lastValues: [...state.lastValues, action.payload]
			}
			break;
	}
	return state;
};

const otherReducer = (state = initialState, action) => {
	switch(action.type){
		case "MULTIPLY":
			state = {
				...state,
				result: state.result * action.payload,
				lastValues: [...state.lastValues, action.payload]
			}
			break;
		case "DIVIDE":
			state = {
				...state,
				result: state.result / action.payload,
				lastValues: [...state.lastValues, action.payload]
			}
			break;
	}
	return state;
}

const store = createStore(
	combineReducers({reducer, otherReducer}),
	{},
	applyMiddleware(createLogger())
);

// store.subscribe(() => {
// 	console.log("State Changed!", store.getState())
// })

store.dispatch({
	type: "ADD",
	payload: 10
})

store.dispatch({
	type: "ADD",
	payload: 50
})

store.dispatch({
	type: "SUBTRACT",
	payload: 15
})

store.dispatch({
	type: "MULTIPLY",
	payload: 4
})

store.dispatch({
	type: "DIVIDE",
	payload: 2
})

ReactDOM.render(
	<Provider store={store} ><App /></ Provider>,
	document.getElementById('root')
);
