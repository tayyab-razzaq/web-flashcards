import React, {Component} from 'react';

export default class Question extends Component {
    constructor(props) {
        super(props);

        this.state = {
            showAnswer: false
        }
    }

    onToggleAnswer = e => {
        e.preventDefault();
        this.setState(prevState => ({
            showAnswer: !prevState.showAnswer
        }));
    };

    render() {
        const {question} = this.props;

        return (
            <React.Fragment>
                {this.state.showAnswer ? <span>{question.answer}</span> : <strong>{question.question}</strong>}
                <br/>
                <a
                    href='/question' style={styles.inheritColor}
                    onClick={e => this.onToggleAnswer(e)}>
                    {this.state.showAnswer ? 'Question' : 'Answer'}
                </a>
            </React.Fragment>
        );
    }
}

const styles = {
	inheritColor: {
		color: 'inherit'
	}
};