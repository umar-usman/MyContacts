import { Context } from 'koa';

import * as testService from '../services/test';

export const testApi = async (ctx: Context) => {
    const result = await testService.testApi();

    ctx.body = {
        meta: {
            status: 200
        },
        data: result
    };
}