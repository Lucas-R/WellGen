FROM node:18

WORKDIR /api

COPY package*json ./

RUN npm install

COPY . .

RUN npm run build

COPY . .

CMD [ "npm", "run", "start" ]