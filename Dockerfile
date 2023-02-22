FROM node:18.14.0-alpine 

WORKDIR /app

COPY package*.json ./

RUN rm -rf node_modules && \
    npm cache clean --force && \
    npm install

RUN npm install @nestjs/axios

COPY . .

EXPOSE 3000

CMD [ "npm", "run", "start" ]
