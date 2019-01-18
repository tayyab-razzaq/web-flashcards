import React, {Component} from 'react';
import PropTypes from 'prop-types';

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

const styles = {
    inheritColor: {
        color: 'inherit'
    },
    regularBtn: {
        alignItems: 'center',
        border: '1px solid',
        borderRadius: '5px',
        padding: '20px',
        margin: '0 40px 10px',
    },
    correctBtn: {
        background: 'rgb(48, 156, 50)',
        color: 'white'
    },
    incorrectBtn: {
        background: '#ce1010',
        color: 'white'
    },
    mt50: {
        marginTop: '50px'
    }
};

Question.propTypes = {
    onAnswer: PropTypes.func.isRequired
};

export default Question;