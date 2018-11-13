'use strict';

import { Document, Model, Schema } from 'mongoose';

import mongoose from './db';

const user = new Schema({
    name: { type: String, required: true },
    socialId: { type: String, required: true },
    email: { type: String, required: false },
    contacts: { type: [Number], required: true,  ref: 'contact', default: [] },
    isActive: { type: Boolean, default: false },
}, {
        collection: 'user', versionKey: false
    });

export interface IUserAttributes {
    name: string;
    socialId: string;
    email: string;
    isActive: boolean;
}

export interface IUserModel extends Document, IUserAttributes { }

export const User: Model<IUserModel> = mongoose.model('contact', user);