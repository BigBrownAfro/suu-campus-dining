export class User{
    USER_ID:string;
    password:string;
    security_level:string;

    constructor(){
        
    }

    static from(json){
        return Object.assign(new User(), json);
    }
}