# Stage 1: Build the application
FROM node:18-alpine AS builder

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the entire Next.js application code into the container
COPY . .

# Build the Next.js application
RUN npm run build

# Stage 2: Serve the application using a lightweight image
FROM node:18-alpine

# Set environment variables
ENV NODE_ENV=production

# Set the working directory inside the container
WORKDIR /app

# Copy only the built files from the builder stage
COPY --from=builder /app ./

# Expose port 3000 to be accessible outside the container
EXPOSE 3000

# Start the Next.js application
CMD ["npm", "run", "start"]
