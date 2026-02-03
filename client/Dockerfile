# Client Dockerfile (Vite React)
FROM node:20-alpine

# Set working directory
WORKDIR /app

# Install dependencies first (leverage Docker layer caching)
COPY package*.json ./
RUN npm ci

# Copy source
COPY . .

# Expose Vite dev port
EXPOSE 5173

# Run Vite dev server and bind to 0.0.0.0 for container access
CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0"]
