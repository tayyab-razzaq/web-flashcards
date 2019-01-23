import React, {Component} from 'react';
import PropTypes from 'prop-types';
import styles from '../styles';

class Question extends Component {
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
            <div style={styles.mt50}>
                <div style={styles.mt50}>
                    <strong>{this.state.showAnswer ? question.answer : question.question}</strong>
                    <br/>
                    <a
                        href='/question' style={styles.inheritColor}
                        onClick={e => this.onToggleAnswer(e)}>
                        {this.state.showAnswer ? 'Question' : 'Answer'}
                    </a>
                </div>
                <div style={styles.mt50}>
                    <button
                        onClick={() => this.props.onAnswer('correct')}
                        style={Object.assign({}, styles.regularBtn, styles.correctBtn)}>
                        Correct
                    </button>
                    <button
                        onClick={() => this.props.onAnswer('incorrect')}
                        style={Object.assign({}, styles.regularBtn, styles.incorrectBtn)}>
                        Incorrect
                    </button>
                </div>
            </div>
        );
    }
}

Question.propTypes = {
    onAnswer: PropTypes.func.isRequired
};

export default Question;