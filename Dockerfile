FROM node:14.16.0

COPY . /app
WORKDIR /app

RUN yarn global add nodemon ts-node
RUN yarn install

CMD ['nodemon', 'src/index']
