FROM node:18.17.0

WORKDIR /app

# Copy the package.json and package-lock.json files to the working directory
COPY package*.json ./ 

RUN npm install

COPY . .

RUN npm run build

EXPOSE 3000

CMD ["npm", "run", "dev"]