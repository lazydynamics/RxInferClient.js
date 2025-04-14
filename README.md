# RxInfer Client

[![npm version](https://badge.fury.io/js/%40lazydynamics%2Frxinfer-client.svg)](https://badge.fury.io/js/%40lazydynamics%2Frxinfer-client)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

A TypeScript client for interacting with RxInferServer, providing type-safe access to its API endpoints.

## About RxInferServer

RxInferServer is a Julia-based server that provides an API for performing probabilistic inference using the RxInfer.jl package. This client library allows you to interact with RxInferServer from TypeScript/JavaScript applications.

### Key Features of RxInferServer
- Probabilistic inference using message passing
- Support for various probabilistic models
- RESTful API interface
- Real-time inference capabilities

## Installation

```bash
npm install @lazydynamics/rxinfer-client
```

## Usage

```typescript
import { RxInferClient, pingServer } from '@lazydynamics/rxinfer-client';

// Create a client instance
const client = await RxInferClient.create();

// Use the client to interact with RxInferServer
const response = await pingServer({ client });
console.log(response.data);  // { status: 'ok' }
```

## Development

### Prerequisites
- Node.js (LTS version recommended)
- RxInferServer running locally or accessible via network

### Setting up RxInferServer
1. Clone the RxInferServer repository:
   ```bash
   git clone https://github.com/lazydynamics/RxInferServer.git
   cd RxInferServer
   ```

2. Build and start the server:
   ```bash
   make docker
   make dev
   ```

   This will start RxInferServer on `http://localhost:8000`.

### Building the Client
1. Install dependencies:
   ```bash
   npm install
   ```

2. Generate TypeScript client from OpenAPI specification:
   ```bash
   npm run generate
   ```

3. Build the package:
   ```bash
   npm run build
   ```

### Running Tests
```bash
npm test
```

Note: Tests require RxInferServer to be running locally.

## Documentation

Generate and view documentation:
```bash
npm run docs
npm run docs:serve
```

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md) for details on how to contribute to this project.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Support

If you encounter any issues or have questions, please:
1. Check the [documentation](https://lazydynamics.github.io/RxInferClient.js/)
2. Open an [issue](https://github.com/lazydynamics/RxInferClient.js/issues)
3. Contact the maintainers 