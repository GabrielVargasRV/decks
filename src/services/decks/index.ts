import {DeckType, CardType} from "../../Types/index";
import { v4 as uuidv4 } from 'uuid';

class Card{
    static review(){

    }

    static create(father: DeckType,front: string, back: string){
        const card = {
            fatherId: father.id,
            front: front,
            back: back,
            id: uuidv4(),
            createdOn: Date.now(),
            lastReview: Date.now(),
            nextReviewIn: 0,
        }

        const cardJSON = JSON.stringify(card);

        console.log(cardJSON);

        return card;
    }

    static delete(){

    }

    static edit(){

    }
}

class DeckAPI{ 
    static listenersOnChange: {(): void;}[] = [];       

    static getById(id: string){


        return;
    }

    static getCardsForToday(deck: DeckType) {

    }

    static getAll(){
        const localDecks = JSON.parse(window.localStorage.getItem('decks')!);
        return localDecks;
    }

    static reviewCard(deck: DeckType, card: CardType, response: string){

    }

    static onChange(callback: {(): void;}){
        this.listenersOnChange.push(callback);
    }

    static create(name: string){
        const deck: DeckType = {
           name: name,
           id: uuidv4(),
           createdTimeStamp: Date.now(),
           cards: [] 
        }

        if(!window.localStorage.getItem('decks')) window.localStorage.setItem('decks', JSON.stringify([]));
        const localDecks = JSON.parse(window.localStorage.getItem('decks')!);

        localDecks.push(deck);
        localDecks.sort();
        const stringifiedLocalDecks = JSON.stringify(localDecks);

        window.localStorage.setItem('decks', stringifiedLocalDecks);
    
        // this.onChange();

        return deck.id;
    }
}


export default DeckAPI;