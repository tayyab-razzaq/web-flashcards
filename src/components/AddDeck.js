import React, {Component} from 'react';
import {saveNewDeck} from '../actions/decksActions';
import {connect} from "react-redux";
import styles from '../styles';

class AddDeck extends Component {

    constructor(props) {
        super(props);

        this.state = {
            title: ''
        }
    }

    onChange = e => {
        const title = e.target.value;
        this.setState({title});
    };

    onSubmit = () => {
        const decks = this.props.decksReducer.get('decks');
        const {title} = this.state;
        if (title in decks) {
            return;
        }
        this.props.saveNewDeck(title).then(() => this.props.history.push('/deck-list'));
    };

    render() {
        const {title} = this.state;
        return (
            <div style={styles.mt50}>
                <div style={styles.mt50}>
                    <span>
                        <input
                            style={styles.inputField}
                            placeholder='enter deck title'
                            type='text' value={title}
                            onChange={this.onChange}/>
                    </span>
                </div>
                <div style={styles.mt50}>
                    <button
                        onClick={this.onSubmit}
                        style={Object.assign({}, styles.regularBtn, styles.submitBtn)}>
                        Submit
                    </button>
                </div>
            </div>
        );
    }
}

const mapStateToProps = ({decksReducer}) => ({decksReducer});

const mapDispatchToProps = dispatch => ({
    saveNewDeck: title => dispatch(saveNewDeck(title))
});

export default connect(mapStateToProps, mapDispatchToProps)(AddDeck);