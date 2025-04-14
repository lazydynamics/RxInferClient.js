import { defineConfig } from '@hey-api/openapi-ts';

export default defineConfig({
  input: 'https://raw.githubusercontent.com/lazydynamics/RxInferServer/refs/heads/main/openapi/spec.yaml',
  output: 'src/client',
  plugins: ['@hey-api/client-fetch'],
});