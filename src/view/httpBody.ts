import { JsonField, ListField } from "js-objectvalidator";
import IView from "./interface";

export default class HttpBody<Ti, Tr> implements IView<Ti, Tr> {
    constructor(private readonly validator: JsonField<Ti> | ListField) {}

    async handle(data: Ti): Promise<Tr> {
        try {
            this.validator
        }
    }
}
