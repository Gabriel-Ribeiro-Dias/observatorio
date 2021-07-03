FROM node
WORKDIR /app
COPY package.json .
RUN yarn install
RUN npm remove react-leaflet @react-leaflet/core
RUN npm i react-leaflet@3.1.0 @react-leaflet/core@1.0.2
COPY . .
EXPOSE 3000
CMD ["npm","start"]
