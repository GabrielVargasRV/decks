import { motion } from "framer-motion";
import styles from "./styles.module.css";
import TimesButton from "../../TimesButton";
import { useAppDispatch } from "../../../hooks/redux";
import { closeModal } from "../../../store/reducers/modalSlice";
import { useState } from "react";



// ----------------------------------- Icons -------------------------------------//
import { AiFillFileImage } from "react-icons/ai";

// ----------------------------------- Icons -----------------------------------//

const SelectDeckAndType = ({onChange}: {onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void}) => {
    
    return(
        <div className={styles.SelectDeckAndType} >
            <div>
                <p>Deck: </p>
                <select name="deck" onChange={(event: React.ChangeEvent<HTMLSelectElement>) => onChange(event)} >
                    <option>General</option>
                </select>
            </div>
            <div>
                <p>Type: </p>
                <select name="deck" onChange={(event: React.ChangeEvent<HTMLSelectElement>) => onChange(event)} >
                    <option>Basic</option>
                </select>
            </div>
        </div>
    )
}


// ----------------------------------------------------

const TextareaContainer = ({name, onChange, icons}: {
    name: string,
    onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void,
    icons: JSX.Element | null 
    }) => {

    return(
        <div className={styles.textareaContainer} >
            <div >
                <p>{name}</p>
                {icons}
            </div>
            <textarea name={name.toLocaleLowerCase()} onChange={(event: React.ChangeEvent<HTMLTextAreaElement>) => onChange(event)} ></textarea>
        </div>
    )
}


// ----------------------------------------------------


const CreateCardModal = () => {
    const dispatch = useAppDispatch();
    const [state,setState] = useState({
        type: '',
        deck: '',
        font: '',
        back: ''
    });

    const handleOnChange = (event: React.ChangeEvent<HTMLTextAreaElement | HTMLSelectElement>) => {
        const key: string = event.target.name;
        const value: string = event.target.value;
        console.log(key, ': ', value);
        setState({
            [key]: value,
            ...state
        });
    }

    const handleOnClick = () => {}

    return (
        <div className={styles.Modal}>
            <div className={styles.header} >
                <TimesButton handleOnClick={() => dispatch(closeModal())} />
            </div>
            <div className={styles.content} >
                <SelectDeckAndType onChange={handleOnChange} />
                <TextareaContainer onChange={handleOnChange} name="Front" icons={<AiFillFileImage fill="#fff" className={styles.icon} onClick={() => {}} />} />
                <TextareaContainer onChange={handleOnChange} name="Back" icons={<AiFillFileImage  fill="#fff" className={styles.icon} onClick={() => {}} />} />
            </div>
            <motion.button className={styles.createBtn} onClick={handleOnClick} >Create</motion.button>
        </div>
    )
}


export default CreateCardModal;