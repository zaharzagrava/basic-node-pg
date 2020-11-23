FROM node:12.16-slim

WORKDIR /home/app/api

COPY ./package*.json ./
RUN npm install

COPY . .

EXPOSE 4001
