import { IContactAttributes } from "../models/contact";

export interface IRemove {
    contactId: string;
}

export interface IUpdate extends IContactAttributes {
    contactId: string;
}