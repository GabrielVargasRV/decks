import { motion } from "framer-motion"
import { FaTimes } from "react-icons/fa";
import { IconContext } from "react-icons";
import styles from "./styles.module.css"


const CloseIcon = ({color = "#ffffff", size}: {color?: string, size?: string}) => {
    return(
        <IconContext.Provider value={{color, size}} >
            <div>
                <FaTimes/>
            </div>
        </IconContext.Provider>
    )
}

const TimesButton = ({handleOnClick}: {handleOnClick: () => {}}) => {
    return(
        <motion.button
            whileHover={{borderRadius: "10%", rotate: -90}}
            animate={{borderRadius: "50%"}}
            className={styles.TimesButton}
            onClick={handleOnClick}
        >
            <CloseIcon size="30px"/>
        </motion.button>
    )
}

export default TimesButton;