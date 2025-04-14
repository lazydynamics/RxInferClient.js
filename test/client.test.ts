import { RxInferClient } from '../src';

describe('RxInferClient', () => {
  let client: RxInferClient;

  beforeEach(() => {
    client = new RxInferClient();
  });

  it('should instantiate the client', () => {
    expect(client).toBeInstanceOf(RxInferClient);
  });

  it('should ping the server', async () => {
    // Mock the ping method if it exists in your client
    // This is a placeholder test that will need to be updated
    // once the OpenAPI client is generated
    expect(client).toBeDefined();
  });
}); 