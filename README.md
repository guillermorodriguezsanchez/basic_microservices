# Microservices Exam
This project consists of three microservices created using Docker and Node.js. The services are connected to each other and can be called to obtain the current time. Consul.io is also used in order to not specify the port in the browser.

## Services
### The three services are:

- Service A: Acts as the entry point for the application and is responsible for calling services B and C to obtain the current time.
- Service B: Returns the current time in UTC format.
- Service C: Returns the current time in local time zone format.

## Technologies Used
- Docker
- Node.js
- Consul.io
## Credits
This project was created by Guillermo Rodríguez Sánchez.
