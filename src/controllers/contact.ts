import { Context } from 'koa';

import * as ContactService from '../services/contact';
// import { ICreate } from '../Interfaces/contact';
import { IContactAttributes } from '../models/contact';
import { IUpdate, IRemove } from '../Interfaces/contact';

export const getAll = async (ctx: Context) => {
    const result = await ContactService.getAll();
    ctx.body = {
        meta: {
            status: 200
        },
        data: result
    };
}

export const create = async (ctx: Context) => {
    const payload: IContactAttributes = {
        firstName: ctx.request.body.firstName,
        lastName: ctx.request.body.lastName,
        mobileNumber: ctx.request.body.mobileNumber,
        email: ctx.request.body.email,
        work: ctx.request.body.work,
        isActive: true
    }
    const result = await ContactService.create(payload);
    ctx.body = {
        meta: {
            status: 200
        },
        data: result
    };
}

export const update = async (ctx: Context) => {
    const payload: IUpdate = {
        contactId: ctx.params.contactId,
        firstName: ctx.request.body.firstName,
        lastName: ctx.request.body.lastName,
        mobileNumber: ctx.request.body.mobileNumber,
        email: ctx.request.body.email,
        work: ctx.request.body.work,
        isActive: true
    }
    const result = await ContactService.update(payload);
    ctx.body = {
        meta: {
            status: 200
        },
        data: result
    };
}

export const remove = async (ctx: Context) => {
    const payload: IRemove = {
        contactId: ctx.params.contactId
    }
    const result = await ContactService.remove(payload);
    ctx.body = {
        meta: {
            status: 200
        },
        data: result
    };
}
