#base image

FROM node:14-alpine

#install some dependencies
COPY ./ ./
RUN npm install

#default command

CMD ["npm","start"]