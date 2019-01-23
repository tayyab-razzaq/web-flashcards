const styles = {
    container: {
        flex: 1,
	    justifyContent: 'center',
        flexGrow: 1,
        textAlign: 'center'
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
    },
    inverseSubmitBtn: {
        alignItems: 'center',
        border: '1px solid',
        borderRadius: '5px',
        padding: '20px',
        margin: '0 40px 10px',
        background: 'black',
        color: 'white',
    },
    regularBtn: {
        alignItems: 'center',
        border: '1px solid',
        borderRadius: '5px',
        padding: '20px',
        margin: '0 40px 10px',
    },
    regularSubmitBtn: {
        background: 'black',
        color: 'white',
    },
    inputField: {
        margin: '0 30px',
        borderRadius: '10px'
    },
    mt50: {
        marginTop: '50px'
    },
    addCardBtn: {
        background: 'white',
    },
    startQuizBtn: {
        background: 'black',
        color: 'white',
    },
    correctBtn: {
        background: 'rgb(48, 156, 50)',
        color: 'white'
    },
    incorrectBtn: {
        background: '#ce1010',
        color: 'white'
    }
};

export default styles;