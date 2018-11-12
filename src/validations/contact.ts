import * as Joi from 'joi';

export const schema_findAll = Joi.object().keys({
    limit: Joi.number().integer().positive().empty('').default(5),
    offset: Joi.number().integer().positive().allow(0).default(0),
    userId: Joi.number().integer().positive().allow(0).empty().required()
});