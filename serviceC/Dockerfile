    FROM node:19.0.0
    
    RUN mkdir -p /usr/src/serviceC
    
    WORKDIR /usr/src/serviceC

    COPY  package*.json ./
    
    RUN npm install
    
    COPY . .
    
    EXPOSE 3000

    CMD ["npm", "run","start"]
