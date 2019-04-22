import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getAllDecks, getDeck, saveNewDeck} from '../actions/decksActions';
import styles from '../styles';

class DeckList extends Component {

    componentDidMount() {
        this.props.getAllDecks();
    }

    onDeckClick = (e, id) => {
        e.preventDefault();
        this.props.getDeck(id).then(() => this.props.history.push('/deck-detail'));
    };

    onAddDeckClick = () => this.props.history.push('/deck/add');

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
                        Add Deck
                    </button>
                </div>
            </div>
        );
    }
}

const mapStateToProps = ({decksReducer}) => ({decksReducer});

const mapDispatchToProps = dispatch => ({
    getAllDecks: () => dispatch(getAllDecks()),
    saveNewDeck: title => dispatch(saveNewDeck(title)),
    getDeck: id => dispatch(getDeck(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(DeckList);
