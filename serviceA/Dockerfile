    FROM node:19.0.0
    
    RUN mkdir -p /usr/src/serviceA
    
    WORKDIR /usr/src/serviceA

    COPY  package*.json ./
    
    RUN npm install
    
    COPY . .
    
    EXPOSE 3000

    CMD ["npm", "run","start"]

