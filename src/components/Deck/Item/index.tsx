import styles from "./style.module.css";
import { motion } from "framer-motion";
import {DeckType} from "../../../Types/index";



interface Props{
    deck: DeckType;
    handleOnClick: () => {} | void |null;
}

const Deck = ({deck, handleOnClick}: Props) => {

    return (
        <motion.button onClick={handleOnClick}
            className={styles.deck}
            whileHover={{scale: 1.03}}
            whileTap={{scale: 0.99}}
        >
            <h3>{deck.name}</h3>
            <p>{deck.cards.length}</p>
        </motion.button>
    )
}

export default Deck;