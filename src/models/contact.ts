'use strict';

import { Document, Model, Schema } from 'mongoose';

import mongoose from './db';

const contact = new Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    mobileNumber: { type: Number, required: true },
    email: { type: String, required: false },
    work: { type: String, required: false },
    isActive: { type: Boolean, default: false }
}, {
        collection: 'contact', versionKey: false
    });

export interface IContactAttributes {
    firstName: string;
    lastName: number;
    mobileNumber: string;
    email: string;
    work: string;
    isActive: boolean;
}

export interface IContactModel extends Document, IContactAttributes { }

export const Contact: Model<IContactModel> = mongoose.model('contact', contact);