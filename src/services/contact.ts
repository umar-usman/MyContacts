import * as Joi from 'joi';
import * as Boom from 'boom';

import { IRemove, IUpdate } from '../Interfaces/contact';
import * as Schema from '../validations/schemas/contact';
import * as ContactRepo from '../repositories/contact';
import { validate } from '../validations/index';
import { IContactAttributes } from '../models/contact';

export const getAll = async () => {
    const contacts = await ContactRepo.getAll();
    if (!contacts) {
        throw Boom.notFound('Contacts');
    }
    return contacts;
}

export const create = async (payload: IContactAttributes) => {
    const validatedPayload = await validate(payload, Schema.schemaCreate);
    console.log("inside service");
    const contacts = await ContactRepo.create(validatedPayload);
    if (!contacts) {
        throw Boom.notFound('Contacts');
    }
    return contacts;
}

export const update = async (payload: IUpdate) => {
    const validatedPayload = await validate(payload, Schema.schemaUpdate);
    const contacts = await ContactRepo.update(payload.contactId, validatedPayload);
    if (!contacts) {
        throw Boom.notFound('Contacts');
    }
    return contacts;
}

export const remove = async (payload: IRemove) => {
    const { contactId } = await validate(payload, Schema.schemaRemove);
    const contacts = await ContactRepo.remove(contactId);
    if (!contacts) {
        throw Boom.notFound('Contacts');
    }
    return contacts;
}