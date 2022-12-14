import { motion } from "framer-motion";
import styles from "./styles.module.css";
import TimesButton from "../../TimesButton";
import { useAppDispatch } from "../../../hooks/redux";
import { closeModal } from "../../../store/reducers/modalSlice";
import React, { useState, useEffect, useRef } from "react";

// -------------
import ContentArea from "../../ContentArea";

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


const CreateCardModal = () => {
    const dispatch = useAppDispatch();
    const [state,setState] = useState<{type: string, deck: string}>({
        type: '',
        deck: '',
    });

    const [isReduced, setIsReduced] = useState<string | null>(null);

    
    const frontRef = useRef<HTMLDivElement>(null);
    const backRef = useRef<HTMLDivElement>(null);

    const handleOnChange = (event: React.ChangeEvent<HTMLTextAreaElement | HTMLSelectElement>) => {
        const key: string = event.target.name;
        const value: string = event.target.value;
        setState({
            [key]: value,
            ...state
        });
    }

    const reduceToggle = (name: string) => {
        isReduced === name ? setIsReduced(null) : setIsReduced(name);
    }

    const handleOnClick = () => {}

    return (
        <div className={styles.Modal}>
            <div className={styles.header} >
                <TimesButton handleOnClick={() => dispatch(closeModal())} />
            </div>
            <div className={`${styles.content} ${isReduced === 'Front' && styles.frontReduced} ${isReduced === 'Back' && styles.backReduced}`} >
                <SelectDeckAndType onChange={handleOnChange} />
                <ContentArea name="Front" reduceToggle={reduceToggle} isReduced={isReduced === 'Front'} ref={frontRef} />
                <ContentArea name="Back" reduceToggle={reduceToggle} isReduced={isReduced === 'Back'} ref={backRef} />
            </div>
            <motion.button className={styles.createBtn} onClick={handleOnClick} >Create</motion.button>
        </div>
    )
}

export default CreateCardModal;