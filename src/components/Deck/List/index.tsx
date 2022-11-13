import styles from "./styles.module.css";
import DeckItem from "../Item";
import {DeckType} from "../../../Types/index";
import {setModal} from "../../../store/reducers/modalSlice";
import {useAppDispatch} from "../../../hooks/redux";
import DeckModal from "../Modal";

import CreateDeckModal from "../CreateDeckModal";

type Props = {
    decks: DeckType[]
}



const DecksList = ({decks}: Props) => {
    const dispatch = useAppDispatch();
    
    return(
        <div> 
            {decks.map((deck: DeckType) => {

                const handleOnClick = () => {
                    if(deck.cards.length){
                        dispatch(setModal({
                            modal: <DeckModal deck={deck} />,
                            isOpen: true
                        }));
                    }else{
                        console.log('0 cards on deck!')
                    }
                }                    

                return <DeckItem key={deck.id} deck={deck} handleOnClick={handleOnClick} />
            })} 
        </div>
    )
}


export default DecksList;