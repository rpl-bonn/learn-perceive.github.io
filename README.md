# Robot Perception and Learning Lab Website

This is a Gatsby.js website for the Robot Perception and Learning Lab.

## Prerequisites

- **Node.js**: Version 22 or higher (as specified in Dockerfile)
- **npm**: Comes with Node.js

## Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd learn-perceive.github.io
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

## Development

To run the development server locally:

```bash
npm run develop
```

or

```bash
npm start
```

The site will be available at `http://localhost:8000` by default.

## Build

To build the production version:

```bash
npm run build
```

This creates an optimized production build in the `public/` directory.

## Serve Production Build

To serve the production build locally:

```bash
npm run serve
```

This serves the built site, typically at `http://localhost:9000`.

## Clean

To clean the Gatsby cache and public directory:

```bash
npm run clean
```

## Docker (Optional)

To build and run using Docker:

1. Build the Docker image:
   ```bash
   docker build -t learn-perceive .
   ```

2. Run the container:
   ```bash
   docker run -p 8080:80 learn-perceive
   ```

The site will be available at `http://localhost:8080`.

## Troubleshooting

- If you encounter issues, try cleaning the cache first: `npm run clean`
- Make sure you're using Node.js version 22 or higher
- If dependencies fail to install, try deleting `node_modules` and `package-lock.json` (if present), then run `npm install` again

---

<a href="https://app.pagescms.org/rpl-bonn/learn-perceive.github.io/main/collection/projects"><button>edit</button></a>
