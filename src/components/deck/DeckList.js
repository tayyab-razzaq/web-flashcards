import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getAllDecks, submitNewDeck, openDeck} from '../../actions/decksActions';

class DeckList extends Component {

    componentDidMount() {
        this.props.getAllDecks();
    }

    onDeckClick = (e, deck) => {
	    e.preventDefault();
	    this.props.openDeck(deck);
	    this.props.history.push('/deck-detail');
	};

	render() {

		const decks = this.props.decksReducer.get('decks');

		const decksList = Object.keys(decks).map(deckKey => {
			const deckObj = decks[deckKey];
			const {questions} = deckObj;
			const questionsCount = questions.length;

			return (
				<div key={deckKey} style={styles.deckHolder}>
					<a
						href='/home' style={styles.inheritColor}
						onClick={(e) => this.onDeckClick(e, deckObj)}>
						<span style={styles.deckTitle}>{deckObj.title}</span>
						<br/>
						<span style={styles.questionsCount}>{`${questionsCount} Cards`}</span>
					</a>
				</div>
			)
		});

		return (
			<div style={styles.container}>
				{decksList}
			</div>
		);
	}
}

const styles = {
	container: {

	},
	contentContainer: {
		paddingTop: 30,
	},
	getStartedContainer: {
		alignItems: 'center',
		marginHorizontal: 50,
	},
	getStartedText: {
		fontSize: 17,
		color: 'rgba(96,100,109, 1)',
		lineHeight: 24,
		textAlign: 'center',
	},
	deckTitle: {
		fontSize: 24,

	},
	questionsCount: {
		color: '#aaa'
	},
	deckHolder: {
		textAlign: 'center',
		border: '1px solid #ccc',
		padding: '10px 0'
	},
	inheritColor: {
		color: 'inherit'
	}

};

function mapStateToProps(state) {
	return {
		decksReducer: state.decksReducer,
	};
}

function mapDispatchToProps(dispatch) {
	return {
		getAllDecks() {
			return dispatch(getAllDecks());
		},
		submitNewDeck(deckObj) {
			return dispatch(submitNewDeck(deckObj));
		},
		openDeck(deckObj) {
			return dispatch(openDeck(deckObj));
		}
	};
}


export default connect(mapStateToProps, mapDispatchToProps)(DeckList);
