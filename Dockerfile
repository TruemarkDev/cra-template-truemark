ARG NODE_VERSION=18.14.0

FROM node:${NODE_VERSION}-alpine

# Set the working directory to /cra-template-truemark inside the container
WORKDIR /cra-template-truemark

# copy package.json file content
COPY package*.json ./

# Copy app files
COPY . .

# Install project dependencies
RUN npm install

# Create a batch script to run both npm start,cypress and unit tests
RUN echo "@echo off" > C:\start-and-test.bat \
    && echo "npm start" >> C:\start-and-test.bat \
    && echo "npx cypress run" >> C:\start-and-test.bat \
    && echo "npm test" >> C:\start-and-test.bat

# Run the shell script
CMD ["start-and-test"] 

