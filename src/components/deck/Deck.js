import React, {Component} from 'react';

export default class Deck extends Component {

    onAddCardClick = () => {
        this.props.history.push('/question/add');
    };

    onStartQuizClick = () => {
        this.props.history.push('/deck-detail/questions');
    };

	render() {
		return (
			<div style={styles.container}>
                <button onClick={this.onAddCardClick}>Add Card</button>
                <button onClick={this.onStartQuizClick}>Start Quiz</button>
			</div>
		);
	}
}

const styles = {
	container: {
		flex: 1
	}
};