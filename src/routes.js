import React from 'react';
import {Route, Redirect, Switch} from 'react-router-dom';
import {DeckList, Deck, DeckQuestions} from './components/deck';

export default (
	<Switch>
		<Redirect exact path='/' to='deck-list'/>
		<Route exact path='/deck-list' component={DeckList}/>
		<Route exact path='/deck-detail' component={Deck}/>
		<Route exact path='/deck-detail/questions' component={DeckQuestions}/>
		<Route exact path='/deck/add'/>
		<Route exact path='/question-detail/:id'/>
		<Route exact path='/question/add'/>
	</Switch>
);
