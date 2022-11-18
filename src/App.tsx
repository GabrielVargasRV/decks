import { useState, useEffect } from 'react';
import { useAppDispatch } from './hooks/redux';
import { setAll } from "./store/reducers/deckSlice";
import DeckAPI from './services/decks';
import './App.css'
import Layout from "./components/Layout";

import Home from "./Pages/Home";

import {
  Routes,
  Route,
  BrowserRouter
} from "react-router-dom";



function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const decks = DeckAPI.getAll();
    dispatch(setAll(decks));
  }, [])

  return (
    <Layout>
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home/>} />
          </Routes>
      </BrowserRouter>
    </Layout>
  )
}

export default App
