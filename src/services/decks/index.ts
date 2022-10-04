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

class DeckServices{
    static getById(id: string){


        return;
    }

    static getCardsForToday(deck: DeckType) {

    }

    static getAll(){

    }

    static reviewCard(deck: DeckType, card: CardType, response: string){

    }
}


export default DeckServices;