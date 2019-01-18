import React from 'react';
import {Route, Redirect, Switch} from 'react-router-dom';
import {DeckList, Deck, DeckQuestions, AddCard, AddDeck} from './components';

export default (
	<Switch>
		<Redirect exact path='/' to='deck-list'/>
		<Route exact path='/deck-list' component={DeckList}/>
		<Route exact path='/deck-detail' component={Deck}/>
		<Route exact path='/deck-detail/questions' component={DeckQuestions}/>
		<Route exact path='/deck/add' component={AddDeck}/>
		<Route exact path='/question/add' component={AddCard}/>
	</Switch>
);
