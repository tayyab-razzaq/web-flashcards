import React, {Component} from 'react';
import {addCardToDeck} from '../actions/decksActions';
import {connect} from "react-redux";
import styles from '../styles';

class AddCard extends Component {

    constructor(props) {
        super(props);

        this.state = {
            card: {
                question: '',
                answer: ''
            }
        }
    }

    onChange = (e, property) => {
        const {card} = this.state;
        card[property] = e.target.value;
        this.setState({card});
    };

    onSubmit = () => {
        const deck = this.props.decksReducer.get('deck');
        const {title, questions} = deck;
        const {card} = this.state;
        const sameQuestions = questions.filter(questionCard => questionCard.question === card.question);
        if (sameQuestions.length > 0) {
            return;
        }
        this.props.addCardToDeck(title, card).then(() => {
            this.props.history.push('/deck-detail');
        });
    };

    render() {
        const {card} = this.state;
        return (
            <div style={styles.mt50}>
                <div style={styles.mt50}>
                    <span>
                        <input
                            style={styles.inputField}
                            placeholder='enter question'
                            type='text' value={card.question}
                            onChange={e => this.onChange(e, 'question')}/>
                    </span>
                </div>
                <div style={styles.mt50}>
                    <span>
                        <input
                            style={styles.inputField}
                            placeholder='enter answer'
                            type='text' value={card.answer}
                            onChange={e => this.onChange(e, 'answer')}/>
                    </span>
                </div>
                <div style={styles.mt50}>
                    <button
                        onClick={this.onSubmit}
                        style={styles.inverseSubmitBtn}>
                        Submit
                    </button>
                </div>
            </div>
        );
    }
}

const mapStateToProps = ({decksReducer}) => ({decksReducer});

const mapDispatchToProps = dispatch => ({
    addCardToDeck: (title, card) => dispatch(addCardToDeck(title, card))
});

export default connect(mapStateToProps, mapDispatchToProps)(AddCard);