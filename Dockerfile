# FROM busybox
# CMD echo "Hello world! This is my first Docker image." 

# pull the base image
FROM node:alpine
EXPOSE 3000

# set the working direction
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# install app dependencies
COPY package.json ./

COPY package-lock.json ./

RUN npm install

# add app
COPY . ./

# start app
CMD ["npm", "start"]