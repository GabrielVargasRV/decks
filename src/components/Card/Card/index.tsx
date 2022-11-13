import { useState } from "react";
import { CardType } from "../../../Types/index";
import styles from "./styles.module.css";

interface Props{
    card: CardType;
}

const Card = ({card}: Props) => {
    const [showBack, setShowBack] = useState<boolean>(false);


    if(showBack) return (
        <div className={styles.container} >
            <div className={styles.content} >
                {card.front}
                <hr/>
                {card.back}
            </div>
            <div className={styles.bottom} >
                <button className={styles.BadBtn} >Bad</button>
                <button className={styles.GoodBtn} >Good</button>
                <button className={styles.EasyBtn} >Easy</button>
            </div>
        </div>
    )


    return(
        <div className={styles.container} >
            <div className={styles.content} >
                {card.front}
            </div>
            <div className={styles.bottom} >
                <button 
                    className={styles.showAnswerBtn}
                    onClick={() => setShowBack(true)}
                >Show Answer</button>
            </div>
        </div>
    )
}


export default Card;