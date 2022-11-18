import styles from "./styles.module.css";
import { useState, useRef, useEffect } from "react";
import {Keyboard} from "./utils";



let str: string = '';
const CustomTextarea = () => {
    const [text,setText] = useState('');
    const [isFocused,setIsFocused] = useState<boolean>(false);
    const ref = useRef(null);

    useEffect(() => {
        Keyboard.listen('A1', (key: string) => {
            str = str + key;
            setText(str);
        })

        return () => {
            Keyboard.stopListening('A1')
        };
    }, []);


    return (
        <div
            tabIndex={0}
            contentEditable
            ref={ref}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            dangerouslySetInnerHTML={{__html: text}} 
            className={`${styles.container} ${styles.unactive} ${isFocused ? styles.active : styles.unactive}`} 
        />
    )
}

export default CustomTextarea;