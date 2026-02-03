# Server Dockerfile (Node.js + Express)
FROM node:20-alpine

# Environment
ENV NODE_ENV=development

# Set working directory
WORKDIR /app

# Install dependencies first (leverage Docker layer caching)
COPY package*.json ./
RUN npm ci

# Copy source
COPY . .

# Expose API port
EXPOSE 5000

# Start in dev mode with nodemon for hot reload
CMD ["npm", "run", "dev"]
