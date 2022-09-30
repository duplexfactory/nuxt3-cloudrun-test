FROM node:14-slim

WORKDIR /usr/src/app

COPY . ./
RUN yarn

ARG ENV
RUN echo $ENV > .env

RUN echo testtt
RUN echo $ENV

EXPOSE 8080

ENV HOST=0.0.0.0
ENV PORT=8080

RUN yarn build

CMD [ "yarn", "start" ]
