import { motion } from "framer-motion";
import styles from "./styles.module.css";
import TimesButton from "../TimesButton";
import { useAppDispatch } from "../../hooks/redux";
import { closeModal } from "../../store/reducers/modalSlice";
import { useState } from "react";
import DeckAPI from "../../services/decks/index";

const CreateDeckModal = () => {
    const dispatch = useAppDispatch();
    const [deckName, setDeckName] = useState<string>('');


    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const name: string = event.target.value;
        setDeckName(name);
    }

    const handleOnClick = () => {
        DeckAPI.create(deckName);

        setTimeout(() => {
            dispatch(closeModal());
        }, 500);
    }

    return(
        <div className={styles.Modal} >
            <div className={styles.header} >
                <TimesButton  handleOnClick={() => dispatch(closeModal())} />
                <h2>Create Deck</h2>
                <div></div>
            </div>
            <div className={styles.content} >
                <input
                    placeholder="Write a name for this deck"
                    onChange={handleInputChange}
                    className={styles.input}
                    value={deckName}
                />
            </div>
            <motion.button onClick={handleOnClick} className={styles.createBtn} >Create</motion.button>
        </div>
    )   
}

export default CreateDeckModal;