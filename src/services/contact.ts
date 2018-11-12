import * as Joi from 'joi';

import * as Boom from 'boom';

import * as ContactRepo from '../repositories/contact';
// import * as Validations from '../validations/contact'; 

// import { IContactAttributes } from '../models/contact';

export const getAll = async () => {
    const contacts = await ContactRepo.getAll();
    if(!contacts) {
        throw Boom.notFound('Contacts');
    }
    return contacts;
}