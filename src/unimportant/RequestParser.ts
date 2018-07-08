export class Request {
    private req: any;
    private res: any;

    constructor(req: any, res: any) {
        this.req = req;
        this.res = res;
    }

    public respond(message: string): void {
        this.res.send({
            fulfillmentText: message,
        });
    }

    public getMessage(): string {
        return this.req.body.queryResult.queryText;
    }
}
