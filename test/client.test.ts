import { RxInferClient } from '../src';
import { pingServer } from '../src';
import { Client } from '../src';

describe('RxInferClient', () => {
  let client: Client;

  beforeEach(async () => {
    client = await RxInferClient.create();
  });

  it('should instantiate the client', () => {
    expect(client).toBeDefined();
  });

  it('should ping the server', async () => {
    const response = await pingServer({ client });
    expect(response.data).toEqual({ status: 'ok' });
  });
}); 