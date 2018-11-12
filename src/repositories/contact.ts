import { Contact } from '../models/contact';

export const getAll = async () => {
    return await Contact.find();
}