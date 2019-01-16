import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getAllDecks, submitNewDeck} from '../../actions/decksActions';
import Question from './Question';

class DeckQuestions extends Component {

	render() {
        const deck = this.props.decksReducer.get('deck');
        const {questions} = deck;
        const questionsList = questions.map((question, questionIndex) => {
            return (
				<div key={questionIndex} style={styles.deckHolder}>
					<Question question={question}/>
				</div>
			)
		});

		return (
			<div style={styles.container}>
                {questionsList}
			</div>
		);
	}
}

const styles = {
	container: {
		flex: 1,
		// backgroundColor: '#fff',
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
		}
	};
}


export default connect(mapStateToProps, mapDispatchToProps)(DeckQuestions);
