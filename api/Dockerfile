FROM node:16

WORKDIR /usr/src/app

COPY package.json ./

RUN apt-get update && \
    apt-get install -y make gcc g++ python && \
    rm -rf /var/lib/apt/lists/*

RUN npm install -g typescript ts-node
RUN npm install

COPY . .

EXPOSE 3001

CMD ["npm", "run", "dev"]
