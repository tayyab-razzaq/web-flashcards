let decks = {
    React: {
        title: 'React',
        questions: [
            {
                question: 'What is React?',
                answer: 'A library for managing user interfaces'
            },
            {
                question: 'Where do you make Ajax requests in React?',
                answer: 'The componentDidMount lifecycle event'
            }
        ]
    },
    JavaScript: {
        title: 'JavaScript',
        questions: [
            {
                question: 'What is a closure?',
                answer: 'The combination of a function and the lexical environment within which that function was declared.'
            }
        ]
    }
};


export function _getDecks() {
    return new Promise(res => {
        setTimeout(() => res({...decks}), 1000)
    });
}

export function _saveDeck(deck) {
    return new Promise(res => {

        setTimeout(() => {
            decks = {
                ...decks,
                [deck.title]: deck
            };

            res();
        }, 1000);
    });
}
