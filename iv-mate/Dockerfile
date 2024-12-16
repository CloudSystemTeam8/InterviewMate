FROM node:22.11.0
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install
COPY . .
CMD ["npm", "start"]
EXPOSE 3000
