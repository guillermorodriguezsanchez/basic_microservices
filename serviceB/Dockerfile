    FROM node:19.0.0
    
    RUN mkdir -p /usr/src/serviceB
    
    WORKDIR /usr/src/serviceB

    COPY  package*.json ./
    
    RUN npm install
    
    COPY . .
    
    EXPOSE 3000

    CMD ["npm", "run","start"]

