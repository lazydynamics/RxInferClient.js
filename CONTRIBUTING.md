# Contributing to RxInfer Client

Thank you for your interest in contributing to the RxInfer Client! This guide will help you understand how to set up the development environment, build the package, generate documentation, and publish new versions.

## Table of Contents
- [Development Setup](#development-setup)
- [Building the Package](#building-the-package)
- [Generating Documentation](#generating-documentation)
- [Publishing the Package](#publishing-the-package)
- [Code Style and Guidelines](#code-style-and-guidelines)

## Development Setup

### Prerequisites
- Node.js (LTS version recommended)
- npm (comes with Node.js)
- Git

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/lazydynamics/RxInferClient.js.git
   cd RxInferClient.js
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

## Building the Package

The package uses TypeScript for development. Here's how to build it:

1. Generate TypeScript client from OpenAPI specification:
   ```bash
   npm run generate
   ```
   This command reads the OpenAPI specification from `openapi.json` and generates TypeScript code in the `src` directory.

2. Build the package:
   ```bash
   npm run build
   ```
   This compiles TypeScript to JavaScript and generates type definitions in the `dist` directory.

## Generating Documentation

We use TypeDoc to generate documentation from TypeScript source code. Follow these steps to generate and view documentation:

1. Generate documentation:
   ```bash
   npm run docs
   ```
   This creates HTML documentation in the `docs` directory.

2. Preview documentation locally:
   ```bash
   npm run docs:serve
   ```
   This starts a local server to view the generated documentation.

### Writing Documentation
- Use JSDoc comments for all public APIs
- Include examples in your documentation
- Follow the existing documentation style
- Document all parameters, return values, and exceptions

Example of good documentation:
```typescript
/**
 * Creates a new instance of the RxInfer client.
 * @param options - Configuration options for the client
 * @example
 * ```typescript
 * const client = new RxInferClient({
 *   baseUrl: 'http://localhost:8080'
 * });
 * ```
 */
constructor(options?: ClientOptions) {
  // ...
}
```

## Publishing the Package

### Prerequisites for Publishing
1. Have an npm account
2. Be a member of the @lazydynamics organization
3. Have the necessary permissions to publish packages

### Publishing Steps
1. Login to npm:
   ```bash
   npm login
   ```

2. Build the package:
   ```bash
   npm run build
   ```

3. Update the version in package.json:
   ```bash
   npm version <patch|minor|major>
   ```
   This will:
   - Update the version in package.json
   - Create a git tag
   - Commit the changes

4. Push the changes and tag:
   ```bash
   git push && git push --tags
   ```

5. Publish the package:
   ```bash
   npm publish
   ```

6. Create a GitHub release:
   - Go to the repository's Releases page on GitHub
   - Click "Create a new release"
   - Select the tag that was just created
   - Add release notes describing the changes
   - Click "Publish release"

Note: After publishing to npm, it's important to create a corresponding GitHub release to maintain consistency between npm and GitHub.

### Version Management
Use semantic versioning for releases:
- `npm version patch` for bug fixes (1.0.0 → 1.0.1)
- `npm version minor` for new features (1.0.0 → 1.1.0)
- `npm version major` for breaking changes (1.0.0 → 2.0.0)

## Code Style and Guidelines

### TypeScript
- Use TypeScript's type system to its full potential
- Avoid `any` type
- Use interfaces for object shapes
- Use type aliases for complex types
- Document all public APIs

### Git Workflow
1. Create a new branch for your feature/fix
2. Make your changes
3. Run tests (when available)
4. Submit a pull request

### Commit Messages
Keep commit messages clear and descriptive:
- Use present tense
- Start with a capital letter
- Be specific about what changed

## Getting Help

If you need help or have questions:
1. Check the existing documentation
2. Open an issue on GitHub
3. Contact the maintainers

## License

By contributing to this project, you agree that your contributions will be licensed under the project's MIT License. 