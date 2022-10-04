import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {DeckType} from "../../Types/index";

type InitialStateType = {
    decks: DeckType[];
}

export const deckSlice = createSlice({
    name: 'deck',
    initialState: <InitialStateType> {
        decks: [
            {
                name: 'English',
                id: 'id1',
                createdTimeStamp: Date.now() - 6000,
                cards:[
                    {
                        front: "Test front",
                        back: "Test back",
                        nextReminderData: Date.now() + (60 * 2),
                        createdOn: Date.now() - (60 * 2),
                        id: "cardid1"
                    },
                    {
                        front: "name",
                        back: "nombre",
                        nextReminderData: Date.now(),
                        createdOn: Date.now() - (60 * 2),
                        id: "cardid2"
                    }
                ]
            }
        ],
    },
    reducers: {
        getDeckByName: (state, action: PayloadAction<string>):DeckType | any  => {
            let findedDeck: DeckType[] = [];
            for(let deck of state.decks){
                if(deck.name === action.payload) findedDeck.push(deck);
            }

            return findedDeck[0];
        },
        getDeckById: (state, action: PayloadAction<string>):DeckType | any => {
            let findedDeck: DeckType[] = [];
            for(let deck of state.decks){
                if(deck.id === action.payload) findedDeck.push(deck);
            }

            return findedDeck[0];
        },
        getAll: (state, action: PayloadAction): DeckType[] | any => {
            return state.decks;
        },
        updateDeckById: (state, action: PayloadAction<{id: string, deck: DeckType}>) => {
            state.decks.map((deck: DeckType) => {
                if(deck.id === action.payload.id){
                    return {...deck, ...action.payload,deck}
                }
            })
        }
    }
})



export const {
    getDeckByName,
    getDeckById,
    updateDeckById,
} = deckSlice.actions;


export default deckSlice.reducer;