FROM node:10-alpine
WORKDIR /usr/src/app
COPY . .
EXPOSE 5200
RUN npm install
CMD ["node", "index.js" ]
