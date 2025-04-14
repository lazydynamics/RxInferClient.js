/**
 * Main entry point for the RxInfer Client package.
 * @packageDocumentation
 */
import { Client } from '@hey-api/client-fetch';
import { type Config, type ClientOptions as DefaultClientOptions, createClient, createConfig } from '@hey-api/client-fetch';
import { tokenGenerate } from './client/sdk.gen';

export * from './client/index';
export { Client } from '@hey-api/client-fetch';

export class RxInferClient {
    constructor() {
        throw new Error('Use RxInferClient.create() to create a new client');
    }

    static async create(baseUrl: string = 'http://localhost:8000/v1', apiKey: string | undefined = undefined): Promise<Client> {
        let token: string | undefined = apiKey;
        if (!token) {
            const tmpClient = createClient({
                baseUrl: baseUrl,
            });
            const tokenResponse = await tokenGenerate({
                client: tmpClient,
            });
            token = tokenResponse.data?.token;
            if (!token) {
                throw new Error('No API key provided');
            }
        }
        return createClient({
            baseUrl: baseUrl,
            auth: token,
        });
    }
}