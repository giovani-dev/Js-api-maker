import { HttpErrorDescription } from "../@types/http";
import { GenericHttpError } from "./error/http";
import { ExceptionDoesNotAccepted } from "./error/exception";
import IView from "./view";

export default class HttpException implements IView<Error, HttpErrorDescription> {
    async handle(data: Error): Promise<HttpErrorDescription> {
        if(data instanceof GenericHttpError) {
            return data.decription;
        }
        throw new ExceptionDoesNotAccepted(`Exception ${data.name} does not implement GenericHttpError`);
    }
}
