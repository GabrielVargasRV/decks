import { motion } from 'framer-motion';
import styles from "./styles.module.css";
import {closeModal} from "../../store/reducers/modalSlice";
import { useAppDispatch } from "../../hooks/redux";
import { DeckType, CardType } from "../../Types/index";
import { useState, useEffect } from "react";
import TimesButton from "../TimesButton";

import Card from "../Card/index";



interface Props{ 
    deck: DeckType;
}

const DeckModal = ({deck}: Props) => {
    const dispatch = useAppDispatch();
    const [loading, setLoading] = useState<boolean>(true);
    const [cardsToReview, setCardsToReview] = useState<{cards: CardType[], index: number}>({
        cards: [],
        index: 0,
    });


    useEffect(() => {
        const tempArray: CardType[] = [];
        for(let card of deck.cards){
            if(card.nextReminderDate <= Date.now()){
            }
            tempArray.push(card);
        }

        setCardsToReview({
            ...cardsToReview,
            cards: [...tempArray],
        });

        setLoading(false);
    }, []);

    if(loading) return <div>loading...</div>

    return(
        <motion.div className={styles.deckModal} >
            <div className={styles.header} >
                <TimesButton handleOnClick={() => dispatch(closeModal())} />
                <h2>{deck.name}</h2>
                <div>.</div>
            </div>
            <div className={styles.content} >
                <Card card={cardsToReview.cards[cardsToReview.index]} />
            </div>
        </motion.div>
    );

}

export default DeckModal;