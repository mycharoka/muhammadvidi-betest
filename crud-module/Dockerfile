# Use an official Node.js runtime as a parent image
FROM node:18.16.1

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy the package.json and package-lock.json (if available)
COPY package*.json ./

# Install app dependencies
RUN npm install

# If you are building your code for production
# RUN npm ci --only=production

# Bundle app source
COPY . .

# Expose the port the app runs on
EXPOSE 8002

# Define environment variable for development
# ENV NODE_ENV=development

# Start the application
CMD ["npm", "run", "dev"]
