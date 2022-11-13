import DecksList from "../../components/Deck/List/index";
import styles from "./styles.module.css";
import { useAppDispatch } from "../../hooks/redux";
import { setModal } from "../../store/reducers/modalSlice";
import { useAppSelector } from "../../hooks/redux";
import CreateDeckModal from "../../components/Deck/CreateDeckModal/index";
import CreateCardModal from "../../components/Card/CreateCardModal";

const Home = () => {
    const dispatch = useAppDispatch();
    const { decks } = useAppSelector((state) => state.decks);

    return(
        <div className={styles.container} >
            <DecksList decks={decks} />
            <div className={styles.bottomSection} >
                <button onClick={() => dispatch(setModal({modal: <CreateDeckModal/>, isOpen: true}))} >Create Deck</button>
                <button onClick={() => dispatch(setModal({modal: <CreateCardModal/>, isOpen: true}))} >Create Card</button>
            </div>
        </div>
    )
}


export default Home;