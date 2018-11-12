import * as Boom from 'boom';

import * as ContactRepo from '../repositories/test';

export const testApi = async () => {
    const testResponse = await ContactRepo.testApi();
    if(!testResponse) {
        throw Boom.notFound('Api not working');
    }
    return testResponse;
}