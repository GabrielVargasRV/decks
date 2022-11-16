import { motion } from "framer-motion";
import styles from "./styles.module.css";
import TimesButton from "../../TimesButton";
import { useAppDispatch } from "../../../hooks/redux";
import { closeModal } from "../../../store/reducers/modalSlice";
import React, { useState, useEffect, useRef } from "react";



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

const TextareaContainer = ({name, onChange, icons}: {name: string, onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void,icons: JSX.Element | null }) => {

    return(
        <div className={styles.textareaContainer} >
            <div >
                <p>{name}</p>
                {icons}
            </div>
            <textarea name={name.toLocaleLowerCase()} onChange={(event: React.ChangeEvent<HTMLTextAreaElement>) => onChange(event)} ></textarea>
        </div>
    );
}


// ----------------------------------------------------


const ImageInput = ({onUpload}: {onUpload: (sources: string[]) => any}) => {

    const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const files = event.target!.files;
        if(!files) return;

        const imagesSrc: string[] = [];

        for(let file of files){
            if (file.type && !file.type.startsWith('image/')) {
                console.log('File is not an image.', file.type, file);
                return;
            }
    
            const reader: FileReader = new FileReader();
            reader.addEventListener('load', (event) => {
                const result = reader.result as string;
                if(result !== null) {
                    imagesSrc.push(result);

                    if(imagesSrc.length === files.length){
                        onUpload(imagesSrc);
                    }
                }

            })
            reader.readAsDataURL(file);
        }


    }

    return(
        <label>
            <input type="file" accept="image/jpeg, image/png, image/jpg" onChange={(event: React.ChangeEvent<HTMLInputElement>) => handleOnChange(event)} />
            <AiFillFileImage fill="#fff" className={styles.icon} />
        </label>
    )
}


const CreateCardModal = () => {
    const dispatch = useAppDispatch();
    const [state,setState] = useState<{type: string, deck: string, front: string, back: string}>({
        type: '',
        deck: '',
        front: '',
        back: ''
    });

    const handleOnChange = (event: React.ChangeEvent<HTMLTextAreaElement | HTMLSelectElement>) => {
        const key: string = event.target.name;
        const value: string = event.target.value;
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
                <TextareaContainer onChange={handleOnChange} name="Front" icons={<ImageInput onUpload={(sources: string[]) => {}} /> } />
                <TextareaContainer onChange={handleOnChange} name="Back" icons={<ImageInput onUpload={(sources: string[]) => {}} />} />
            </div>
            <motion.button className={styles.createBtn} onClick={handleOnClick} >Create</motion.button>
        </div>
    )
}

export default CreateCardModal;