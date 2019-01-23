import React, {Component} from 'react';
import {connect} from 'react-redux';
import Question from './Question';
import styles from '../styles';

class DeckQuestions extends Component {

	constructor(props) {
		super(props);

		this.state = {
			responses: {
				correct: 0,
				incorrect: 0
			}
		};
	}

	onAnswer = property => {
		const {responses} = this.state;
		responses[property]++;
		this.setState({responses});
	};

	render() {
        const deck = this.props.decksReducer.get('deck');
        const {questions} = deck;
        const questionsList = questions.map((question, questionIndex) => {
            return (
				<div key={questionIndex} style={styles.deckHolder}>
					<Question question={question} onAnswer={this.onAnswer}/>
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

const mapStateToProps = ({decksReducer}) => ({decksReducer});


export default connect(mapStateToProps)(DeckQuestions);
