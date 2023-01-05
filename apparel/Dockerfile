FROM node
WORKDIR /app
RUN npm install -g nodemon
COPY package.json package.json
RUN npm install
#-g won't work
RUN mv /app/node_modules /node_modules
COPY . .
EXPOSE 80
CMD ["nodemon", "server.js"]