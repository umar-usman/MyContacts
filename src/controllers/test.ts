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

export const addUser = async (ctx: Context) => {
    const payload: any = {
        name: ctx.request.body.name,
        socialId: ctx.request.body.socialId,
        email: ctx.request.body.email,
        contacts: ctx.request.body.contacts,
        isActive: ctx.request.body.isActive
    }
    const result = await testService.addUser(payload);

    ctx.body = {
        meta: {
            status: 200
        },
        data: result
    };
}