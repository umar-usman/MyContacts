import { Context } from 'koa';

import * as ContactService from '../services/contact';

export const getAll = async (ctx: Context) => {
    const result = await ContactService.getAll();

    ctx.body = {
        meta: {
            status: 200
        },
        data: result
    };
}