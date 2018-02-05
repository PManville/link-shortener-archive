import { createStore, combineReducers, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import axios from 'axios';

const getresult = () => {
	var newState = [];
	try {
		var result = localStorage.getItem('urls');
		if (result === null ){
			result = newState;
			localStorage.setItem('urls', JSON.stringify(result));
		}
		return JSON.parse(result);
	}
	catch(err){
		return newState;
	}
}

export const urlInitialState = {
	urls: getresult(),
	lastValues: []
};

export const uiInitialState = {
	isRed: false,
	proxyUrl: "https://cors-anywhere.herokuapp.com/",
	shortyUrl: "http://impraise-shorty.herokuapp.com/",
	hoverText: null,
	inputText: null,
	newUrl: {
		shortLink: '',
		longLink: ''
	},
	lastValues: []
};


const urlReducer = (state = urlInitialState, action) => {
	switch(action.type){
		case "ADDURL":
			state = {
				...state,
				urls: action.payload,
				lastValues: [...state.lastValues, action.payload]
			}
			break;
		case "CLEARHISTORY":
			state = {
				...state,
				urls: [],
				lastValues: [...state.lastValues, action.payload]
			}
	}
	return state;
};

const uiReducer = (state = uiInitialState, action) => {
	switch(action.type){
		case "MAKERED":
			state = {
				...state,
				isRed: action.payload,
				lastValues: [...state.lastValues, action.payload]
			}
			break;
		case "CHANGEHOVERTEXT":
			state = {
				...state,
				hoverText: action.payload,
				lastValues: [...state.lastValues, action.payload]
			}
			break;
		case "CHANGEINPUTTEXT":
			state = {
				...state,
				inputText: action.payload,
				lastValues: [...state.lastValues, action.payload]
			}
			break;
		case "CHANGENEWURL":
			state = {
				...state,
				newUrl: action.payload,
				lastValues: [...state.lastValues, action.payload]
			}
			break;
	}
	return state;
}

const store = createStore(
	combineReducers({urlReducer, uiReducer}),
	{}
);

store.subscribe(() => {
	console.log("State Changed!", store.getState())
})

export default store;