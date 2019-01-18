import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getAllDecks, saveNewDeck, getDeck} from '../actions/decksActions';

class DeckList extends Component {

    componentDidMount() {
        this.props.getAllDecks();
    }

    onDeckClick = (e, id) => {
	    e.preventDefault();
	    this.props.getDeck(id).then(() => {
	    	this.props.history.push('/deck-detail');
		});
	};

    onAddDeckClick = () => {
    	this.props.history.push('/deck/add');
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
						onClick={(e) => this.onDeckClick(e, deckKey)}>
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
				<div style={styles.mt50}>
                    <button
                        onClick={this.onAddDeckClick}
                        style={styles.submitBtn}>
                        Submit
                    </button>
                </div>
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
	},
	submitBtn: {
		alignItems: 'center',
        border: '1px solid',
        borderRadius: '5px',
        padding: '20px',
        margin: '0 40px 10px',
		background: 'white',
		color: 'black'
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
		saveNewDeck(title) {
			return dispatch(saveNewDeck(title));
		},
		getDeck(id) {
			return dispatch(getDeck(id));
		}
	};
}


export default connect(mapStateToProps, mapDispatchToProps)(DeckList);
