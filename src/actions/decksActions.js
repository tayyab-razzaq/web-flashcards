import {
	GET_ALL_DECKS,
	SAVE_NEW_DECK_SUCCESSFULLY,
	OPEN_DECK
} from "../common/actionTypes";
import * as API from "../utils/_DATA";

function decksFetchedSuccessfully(response) {
	return {response, type: GET_ALL_DECKS}
}

export function getAllDecks() {
	return dispatch => API._getDecks().then(response =>
		dispatch(decksFetchedSuccessfully(response))
	);
}

function submitNewDeckSuccessfully(response) {
	return {response, type: SAVE_NEW_DECK_SUCCESSFULLY}
}

export function submitNewDeck(deck) {
	return dispatch => API._saveDeck(deck).then(() => dispatch(submitNewDeckSuccessfully())
	);
}

function openDeckSuccessfully(response) {
	return {response, type: OPEN_DECK}
}

export function openDeck(deck) {
	return dispatch => dispatch(openDeckSuccessfully(deck)
	);
}