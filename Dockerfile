FROM --platform=linux/arm64 cypress/browsers:node16.16.0-chrome107-ff107

RUN apt-get update -qq && apt-get install -yq --no-install-recommends --fix-missing libgtk2.0-0 libgtk-3-0 libgbm-dev libnotify-dev libgconf-2-4 libnss3 libxss1 libasound2 libxtst6 xauth xvfb

# Set the working directory to /stayc-dashboard-frontend inside the container
WORKDIR /stayc-dashboard-frontend

# Copy app files
COPY . .

# Install dependencies (npm ci makes sure the exact versions in the lockfile gets installed)
RUN npm ci 

# ==== RUN =======
ENV NODE_ENV development
ENV DOCKER_DEFAULT_PLATFORM=linux/arm64
