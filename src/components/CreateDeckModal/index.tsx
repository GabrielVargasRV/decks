import { motion } from "framer-motion";
import styles from "./styles.module.css";
import TimesButton from "../TimesButton";
import { useAppDispatch } from "../../hooks/redux";
import { closeModal } from "../../store/reducers/modalSlice";
import { useState } from "react";

const CreateDeckModal = () => {
    const dispatch = useAppDispatch();
    const [deckName, setDeckName] = useState('');

    return(
        <div className={styles.Modal} >
            <div className={styles.header} >
                <TimesButton  handleOnClick={() => dispatch(closeModal())} />
                <h2>Create Deck</h2>
                <div>.</div>
            </div>
            <div className={styles.content} >
                <input className={styles.input}  />
            </div>
            <button className={styles.createBtn} >Create</button>
        </div>
    )   
}

export default CreateDeckModal;