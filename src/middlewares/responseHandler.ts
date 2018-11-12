import * as Boom from 'boom'
import { Context } from 'koa';

export async function responseHandler(ctx: Context, next: () => void){
    try {
        await next();
    } catch (err) {
        let status;
        let name: string;
        let message: string;

        if (Boom.isBoom(err)) {
            status = err.output.statusCode;
            name = err.output.payload.error;
            message = err.output.payload.message;
        } else if (err.isJoi) {
            status = 400;
            name = err.name;
            message = err.details[0].message;
        } else {
            status = ctx.response.status;
            name = err.name;
            message = err.message;
        }

        ctx.response.status = status;
        ctx.body = {
            "meta": {
                status,
                name, 
                message
            }
        };
    }
}
