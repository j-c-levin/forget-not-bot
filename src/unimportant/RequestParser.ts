export class Request {
    private res: any;

    constructor(res: any) {
        this.res = res;
    }

    public respond(message: string): void {
        this.res.send({
            fulfillmentText: message,
        });
    }
}
