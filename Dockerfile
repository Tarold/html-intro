FROM node:18.16.0-alpine3.17

RUN mkdir server

WORKDIR /server

COPY . .

RUN npm i

EXPOSE 5000

CMD npm run dev