import { configureStore  } from '@reduxjs/toolkit'
import modalSlice from './reducers/modalSlice';
import deckSlice from "./reducers/deckSlice";


const store = configureStore({
  reducer: {
    modal: modalSlice,
    decks: deckSlice,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({serializableCheck: false})
})

export default store;

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch