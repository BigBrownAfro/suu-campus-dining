export class Order{
    ORDER_ID:string;
    USER_ID:string;
    ITEM_ID:string;
    final_price:number;
    date:string;
    is_favorite:string;

    constructor(){

    }

    static from(json){
        return Object.assign(new Order(), json);
    }
}