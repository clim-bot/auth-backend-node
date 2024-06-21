# Use the official Node.js image.
FROM node:14

# Create and change to the app directory.
WORKDIR /usr/src/app

# Install app dependencies.
COPY package*.json ./
RUN npm install

# Copy the app files.
COPY . .

# Expose the port the app runs on.
EXPOSE 8080

# Run the app.
CMD ["npm", "start"]
