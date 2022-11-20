import styles from "./styles.module.css";
import React, { useState, forwardRef } from "react";
import ImageInput from "../ImageInput";
import { AiOutlineCaretDown, AiOutlineCaretUp } from "react-icons/ai";

type Props = {
    name: string,
    reduceToggle: (name: string) => any,
    isReduced: boolean,
}

const ContentArea = forwardRef<HTMLDivElement, Props>((props,ref) => {
    const [isFocused,setIsFocused] = useState<boolean>(false);

    const handleImageUpload = (sources: string[]) => {
        for(let src of sources){
            const imgHTML = `<img src=${src} />`;
            const currentHTML = (ref as React.MutableRefObject<HTMLDivElement>).current.innerHTML;
            (ref as React.MutableRefObject<HTMLDivElement>).current.innerHTML = currentHTML + imgHTML;
        }
    }

    return (
        <div className={styles.container} >
            <div className={styles.header}>
                <p>{props.name}</p>
                <div>
                    {props.isReduced ? 
                        <AiOutlineCaretUp onClick={() => props.reduceToggle(props.name)} fill="#fff" className={styles.icon} /> : 
                        <AiOutlineCaretDown onClick={() => props.reduceToggle(props.name)} fill="#fff" className={styles.icon} />
                    }
                    <ImageInput onUpload={(sources) => handleImageUpload(sources)} />
                </div>
            </div>
            <div
                tabIndex={0}
                contentEditable={true}
                ref={ref}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
                className={`${styles.content} ${styles.unactive} ${isFocused ? styles.active : styles.unactive}`} 
            />
        </div>
    )
})

export default ContentArea;