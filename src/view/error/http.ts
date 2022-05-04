import { HttpErrorDescription } from "../../@types/http";


export class GenericHttpError extends Error {
    decription: HttpErrorDescription
    constructor(decription: HttpErrorDescription) {
        super(decription.message);
        this.decription = decription;
    }
}