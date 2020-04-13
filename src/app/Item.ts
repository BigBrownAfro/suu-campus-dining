export class Item{
    ITEM_ID:string;
    item_name:string;
    store_name:string;
    image:string;
    description:string;
    price:number;

    constructor(){

    }

    /*constructor(id, name, store, img, des, p){
        this.ITEM_ID = id;
        this.item_name = name;
        this.store_name = store;
        this.image = img;
        this.description = des;
        this.price = p;
    }*/

    static from(json){
        return Object.assign(new Item(), json);
    }
}