import { defaultPlugins } from '@hey-api/openapi-ts';
import { defineConfig } from '@hey-api/openapi-ts';

export default defineConfig({
    input: 'https://raw.githubusercontent.com/lazydynamics/RxInferServer/refs/heads/main/openapi/spec.yaml',
    output: 'src/client',
    plugins: [
        ...defaultPlugins,
        '@hey-api/client-fetch',
        'zod',
        {
            name: '@hey-api/sdk',
            validator: true,
        }
    ],
});