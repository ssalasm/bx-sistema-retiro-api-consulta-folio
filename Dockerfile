FROM node:18.14.0-alpine 

WORKDIR /app

COPY package*.json ./

RUN rm -rf node_modules && \
    rm -f package-lock.json && \
    npm cache clean --force && \
    npm install

COPY . .

EXPOSE 3000

CMD [ "npm", "run", "start" ]
