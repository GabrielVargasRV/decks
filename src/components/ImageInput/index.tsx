
import { AiFillFileImage } from "react-icons/ai";
import styles from "./styles.module.css";

const ImageInput = ({onUpload}: {onUpload: (sources: string[]) => any}) => {

    const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const files = event.target!.files;
        if(!files) return;

        let imagesSrc: string[] = [];

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
            <input type="file" accept="image/jpeg, image/png, image/jpg" onChange={handleOnChange} />
            <AiFillFileImage fill="#fff" className={styles.icon} />
        </label>
    )
}

export default ImageInput;