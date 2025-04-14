/**
 * Main entry point for the RxInfer Client package.
 * @packageDocumentation
 */
import { Client } from '@hey-api/client-fetch';
import { createClient } from '@hey-api/client-fetch';
import { tokenGenerate } from './client/sdk.gen';

export * from './client/index';
export { Client } from '@hey-api/client-fetch';

/**
 * RxInferClient provides a factory for creating API clients to interact with the RxInfer service.
 * This class cannot be instantiated directly - use the static create() method instead.
 */
export class RxInferClient {
    /**
     * Private constructor to prevent direct instantiation.
     * @throws Error Always throws an error directing users to use the create() method.
     */
    constructor() {
        throw new Error('Use RxInferClient.create() to create a new client');
    }

    /**
     * Creates a new API client for the RxInfer service.
     * @param baseUrl - The base URL of the RxInfer API. Defaults to 'http://localhost:8000/v1'.
     * @param apiKey - Optional API key. If not provided, a temporary token will be generated.
     * @returns A Promise that resolves to a configured Client instance.
     * @throws Error If no API key is provided and token generation fails.
     */
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