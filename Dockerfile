FROM --platform=linux/arm64 cypress/browsers:node16.16.0-chrome107-ff107

RUN apt-get update -qq && apt-get install -yq --no-install-recommends --fix-missing libgtk2.0-0 libgtk-3-0 libgbm-dev libnotify-dev libgconf-2-4 libnss3 libxss1 libasound2 libxtst6 xauth xvfb

# Set the working directory to /cra-template-truemark inside the container
WORKDIR /cra-template-truemark

# Copy app files
COPY . .

# Install project dependencies
RUN npm install

# Port used
EXPOSE 3000

# Create a shell script to run both npm start and unit tests
RUN echo '#!/bin/bash' > /usr/local/bin/start-and-test \
    && echo 'npm start &' >> /usr/local/bin/start-and-test \
    && echo 'npx cypress run' >> /usr/local/bin/start-and-test \
    && echo 'npm test' >> /usr/local/bin/start-and-test \
    && chmod +x /usr/local/bin/start-and-test

# Run the shell script
CMD ["start-and-test"] 

