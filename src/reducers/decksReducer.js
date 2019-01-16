import {Map} from 'immutable';
import {
	GET_ALL_DECKS,
	SAVE_NEW_DECK_SUCCESSFULLY,
	OPEN_DECK
} from '../common/actionTypes';

let initialState = new Map({
	statusSuccess: false,
	decks: {},
	deck: {
		title: '',
		questions: []
	},
	questions: [],
	question: {}
});

export default function decksReducer(state = initialState, action) {
	switch (action.type) {
		case GET_ALL_DECKS:
			return state.merge({decks: action.response});
		case SAVE_NEW_DECK_SUCCESSFULLY:
			return state.merge({question: {}});
		case OPEN_DECK:
			return state.merge({deck: action.response});
		default:
			return state;
	}
}