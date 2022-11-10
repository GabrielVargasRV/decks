import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type initalStateType = {
  modal: null | JSX.Element,
  isOpen: boolean
}

export const modalSlice = createSlice({
  name: 'modal',
  initialState: <initalStateType> {
    modal: null,
    isOpen: false,
  },
  reducers: {
    setModal: (state, action: PayloadAction<{modal: JSX.Element, isOpen: boolean}>) => {
      state.modal = action.payload.modal;
      if(action.payload.isOpen) state.isOpen = action.payload.isOpen;
    },
    closeModal: (state) => {
      state.isOpen = false;
    },
    openModal: (state) => {
      if(!state.modal) return;

      state.isOpen = true;
    }
  },
})

// Action creators are generated for each case reducer function
export const { setModal, closeModal, openModal } = modalSlice.actions;

export default modalSlice.reducer;