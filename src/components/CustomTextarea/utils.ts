
export const dicctionary = {
}

const listeners = new Map();
export class Keyboard{

    static listen(key: string, cb: (key: string) => void){
        console.log('listining')
        listeners.set(key, cb);
    }

    static stopListening(key: string){
        console.log('stop listening')
        listeners.delete(key);
    }

    static onKeyDown(event: KeyboardEvent){
        const callbacks = [...listeners.values()];
        
        for(let callback of callbacks){
            const translatedKey = Keyboard.translate(event.key);
            callback(translatedKey);
        }
    }

    static translate(key: string){
        const dicctionary = new Map([
            ['Shift', ''],
            ['Enter', '<br>'],
            ['Control', ''],
            ['Tap', ''],
            ['CapsLock', '']
        ]);

        if(dicctionary.has(key)) return dicctionary.get(key);

        return key;
    }
}

document.addEventListener("keydown", Keyboard.onKeyDown, false);