import { Contact, IContactAttributes } from '../models/contact';

export const getAll = async () => {
    return await Contact.find();
}

export const create = async (payload: IContactAttributes) => {
    return await Contact.create(payload)
        .catch((err) => {
            console.log(err);
        });
}

export const update = async (contactId: string, payload: IContactAttributes) => {
    return await Contact.findOneAndUpdate({ _id: contactId }, payload, { new: true });
}

export const remove = async (contactId: string) => {
    return await Contact.findOneAndUpdate({ _id: contactId }, { isActive: false }, { new: true });
}