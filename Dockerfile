FROM node:carbon

RUN apt-get update
RUN apt-get -y install \
    libgtkextra-dev \
    libgtk-3-0 \
    libgconf2-dev \
    libnss3 \
    libasound2 \
    libxtst-dev \
    libxss1 \
    libx11-xcb1

RUN npm install --save-dev electron

# Copy source code
COPY . /app

# Change working directory
WORKDIR /app

# Install dependencies
RUN npm install --save-dev electron
RUN npm install

# Launch application
CMD ["npm","start"]