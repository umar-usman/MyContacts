import * as Joi from 'joi';

export const schemaCreate: Joi.SchemaMap = {
    firstName: Joi.string().required().min(2).max(30),
    lastName: Joi.string().required().min(2).max(30),
    mobileNumber: Joi.number().integer().positive().empty('').required(),
    email: Joi.string().email(),
    work: Joi.string().min(2).max(30),
    isActive: Joi.boolean().required()
}

export const schemaUpdate: Joi.SchemaMap = {
    contactId: Joi.string().required(),
    firstName: Joi.string().min(2).max(30),
    lastName: Joi.string().min(2).max(30),
    mobileNumber: Joi.number().integer().positive().empty(''),
    email: Joi.string().email(),
    work: Joi.string().min(2).max(30)
}

export const schemaRemove: Joi.SchemaMap = {
    contactId: Joi.string().required()
}