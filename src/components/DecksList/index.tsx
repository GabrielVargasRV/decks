import styles from "./styles.module.css";
import DeckItem from "../DeckItem";
import {DeckType} from "../../Types/index";
import {setModal} from "../../store/reducers/modalSlice";
import {useAppDispatch} from "../../hooks/redux";
import DeckModal from "../DeckModal";

import CreateDeckModal from "../CreateDeckModal";

type Props = {
    decks: DeckType[]
}



const DecksList = ({decks}: Props) => {
    const dispatch = useAppDispatch();
    
    return(
        <div className={styles.list}> 
            {decks.map((deck: DeckType) => (
                <DeckItem key={deck.id} deck={deck} handleOnClick={() => dispatch(setModal({modal: <DeckModal deck={deck} />, isOpen: true})) } />
            ))} 
            <div className={styles.createSection} >
                <button onClick={() => dispatch(setModal({modal: <CreateDeckModal/>, isOpen: true}))} >Create Deck</button>
                <button>Create Card</button>
            </div>
        </div>
    )
}


export default DecksList;