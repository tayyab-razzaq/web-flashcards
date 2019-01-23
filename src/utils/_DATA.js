export function getDecks() {
    return new Promise(res => {
        const decks = JSON.parse(localStorage.getItem('decks')) || {};
        setTimeout(() => res({...decks}), 500)
    });
}

export function getDeck(id) {
    return new Promise(res => {
        const decks = JSON.parse(localStorage.getItem('decks'));
        setTimeout(() => res({...decks[id]}), 500)
    });
}

export function saveDeckTitle(title) {
    return new Promise(res => {

        setTimeout(() => {
            let decks = JSON.parse(localStorage.getItem('decks')) || {};
            decks = {
                ...decks,
                [title]: {
                    title: title,
                    questions: []
                }
            };
            localStorage.setItem('decks', JSON.stringify(decks));
            res(decks);
        }, 500);
    });
}

export function addCardToDeck(title, card) {
    return new Promise(res => {

        setTimeout(() => {
            let decks = JSON.parse(localStorage.getItem('decks')) || {};
            decks = {
                ...decks,
                [title]: {
                    ...decks[title],
                    questions: [...decks[title].questions, card]
                }
            };
            localStorage.setItem('decks', JSON.stringify(decks));
            res({...decks[title]});
        }, 500);
    });
}