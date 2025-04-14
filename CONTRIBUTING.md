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
4. Have a GitHub token with `repo` scope (for semantic-release)

### Publishing Steps
1. Login to npm:
   ```bash
   npm login
   ```

2. Build the package:
   ```bash
   npm run build
   ```

3. Make a release:
   ```bash
   npm run release
   ```
   This will:
   - Determine the next version number based on commit messages
   - Update package.json
   - Create a git tag
   - Publish to npm
   - Create a GitHub release

### Version Management
The project uses semantic-release for automated version management. Version numbers are determined by commit messages:
- `fix:` commits trigger patch releases (1.0.0 → 1.0.1)
- `feat:` commits trigger minor releases (1.0.0 → 1.1.0)
- Commits with `BREAKING CHANGE:` trigger major releases (1.0.0 → 2.0.0)

Example commit messages:
```bash
git commit -m "fix: handle null values in response"
git commit -m "feat: add support for custom headers"
git commit -m "feat: add new API endpoint

BREAKING CHANGE: remove deprecated method"
```

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
Follow conventional commits:
- `feat:` for new features
- `fix:` for bug fixes
- `docs:` for documentation changes
- `style:` for code style changes
- `refactor:` for code refactoring
- `test:` for test-related changes
- `chore:` for maintenance tasks

## Getting Help

If you need help or have questions:
1. Check the existing documentation
2. Open an issue on GitHub
3. Contact the maintainers

## License

By contributing to this project, you agree that your contributions will be licensed under the project's MIT License. 