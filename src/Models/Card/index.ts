// import { v4 as uuidv4 } from "uuid";

class AssetLoader{
    static audio(){

    }

    static img(){

    }
}

// class CardContent{
// }

class Card{
    // id: string;
    lastAppearance: number;
    waitTime: number;

    front: string;
    back: string;
    assets: object;

    constructor(){
        // this.id = uuidv4();
        this.lastAppearance = Date.now();
        this.waitTime = 0;

        this.front = ``;
        this.back = ``;

        this.assets = {};
    }

    setWaitTime(time:number){
        this.lastAppearance = Date.now();
        this.waitTime = time;
    }

    setFront(str:string){
        this.front = str;
    }

    setBack(str:string){
        this.back = str;
    }

    loadAsset(source:any, type: string){

    }

}


export default Card;