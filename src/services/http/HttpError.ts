export class HttpError extends Error{
    errors;
    constructor(message: string, errors: any[]) {
        super(message);
        this.errors = errors;
        Object.setPrototypeOf(this, HttpError.prototype);
    }
}
