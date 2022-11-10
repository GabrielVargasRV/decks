import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {DeckType} from "../../Types/index";

type InitialStateType = {
    decks: DeckType[];
}

export const deckSlice = createSlice({
    name: 'deck',
    initialState: <InitialStateType> {
        decks: [
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
        setAll: (state, action: PayloadAction<DeckType[]>): void => {
           state.decks = action.payload; 
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
    setAll
} = deckSlice.actions;


export default deckSlice.reducer;