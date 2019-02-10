# Web FlashCard Project

[![Greenkeeper badge](https://badges.greenkeeper.io/tayyabRazzaq/web-flashcards.svg)](https://greenkeeper.io/)

This is the code for the web version of final assessment project for Udacity's React-Native course.

The `_DATA.js` file represents a fake database and methods that let you access the data.

## Create React App

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app). You can find more information on how to perform common tasks [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).

## TL;DR

To get started developing right away:

* install all project dependencies with `npm install`
* start the development server with `npm start`


## Data

There is one of objects stored in our database:

* Decks

### Decks

Users include:

| Attribute    | Type             | Description           |
|-----------------|------------------|-------------------         |
| title          | String           | The decks’s title     |
| questions | Array | A list of ids of the questions (cards) this decks have|

### Question

Question include:

| Attribute | Type | Description |
|-----------------|------------------|-------------------|
| question                  | String | The question  |
| answer        | String | The answer to question |

Your code will talk to the database via 4 methods:

* `getDeck(id)`
* `saveDeckTitle(title)`
* `addCardToDeck(title, card)`

1 `getDeck(id)` Method

*Description*: Get all of the existing decks from the database.  
*Return Value*: Object where the key is the decks’s id and the value is the deck's object.

2 `saveDeckTitle(title)` Method

*Description*: save new deck with given title into the database.  
*Return Value*: Object where the key is the decks’s id and the value is the deck's object.

3 `addCardToDeck(title, card)` Method

*Description*: save card to the given title deck into the database.  
