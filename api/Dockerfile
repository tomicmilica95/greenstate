FROM node:16

WORKDIR /usr/src/app

COPY package*.json ./
COPY tsconfig.json ./
COPY src ./src

RUN npm install --only=prod

EXPOSE 5000

CMD ["npm", "start"]
