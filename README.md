# Book_Server

GraphQL Server with Apollo Server and MongoDB
This repository contains a GraphQL server built with Apollo Server, MongoDB, and Express. It serves as a backend for a GraphQL API, allowing you to interact with your data using GraphQL queries and mutations.

Prerequisites
Make sure you have the following installed on your machine:

Node.js
npm
MongoDB
Setup
## Clone the repository:

bash
```
Copy code
git clone <repository-url>
Install dependencies:
```

bash
```
Copy code
cd <repository-folder>
npm install
```
Create a .env file in the root of the project and add the following:
env
Copy code
MONGODB_URI=<your-mongodb-uri>
Replace <your-mongodb-uri> with the connection URI for your MongoDB database.

Running the Server
To start the server, run the following command:

bash
```
Copy code
npm start
```
The GraphQL server will be accessible at http://localhost:4000.

## GraphQL Playground
Visit http://localhost:4000 in your browser to access the GraphQL Playground. Here, you can interact with the GraphQL API, run queries, and explore the schema.

## API Endpoints
GraphQL Playground: http://localhost:4000
Database Connection
The server connects to the MongoDB database specified in the .env file. Make sure your MongoDB instance is running.

## Author
Echichinwo Laurels Ozy

## License
This project is licensed under the MIT License. Feel free to use, modify, and distribute the code for your projects.
