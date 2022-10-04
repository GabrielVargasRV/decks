import DecksList from "../../components/DecksList/index";
import {DeckItemType} from "../../Types/index";

import { useAppSelector } from "../../hooks/redux";

const Home = () => {
    const { decks } = useAppSelector((state) => state.decks);

    return(
        <div>
            <DecksList decks={decks} />
        </div>
    )
}


export default Home;