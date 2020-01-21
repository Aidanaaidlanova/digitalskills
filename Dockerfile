FROM node:12.2.0

# set working directory
WORKDIR /opt/services/front

# add `/app/node_modules/.bin` to $PATH
ENV PATH /opt/services/front/node_modules/.bin:$PATH

# install and cache app dependencies
COPY package.json /opt/services/front/package.json
RUN npm install

COPY . /opt/services/front
RUN npm run build
