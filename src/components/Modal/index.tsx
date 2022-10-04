import { motion } from "framer-motion";
import styles from "./styles.module.css";

interface Props{
    isOpen: boolean;
    child: JSX.Element | null;
}

const animation = {
    hidden: {
        opacity: 0,
    },
    visible: {
        opacity: 1,

    },
    exit: {
        y: "100vh",
        opacity: 0,
    }
}


const Modal = ({isOpen, child}: Props) => {

    if(isOpen && child){
        return(
            <motion.div 
                className={styles.container}
                variants={animation}
                initial="hidden"
                animate="visible"
                exit="exit"
            >
                {child}
            </motion.div>
        )
    }

    return <div></div>
}


export default Modal;