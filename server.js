require("dotenv").config({ path: ".env" });
const express = require('express');
// const app = express();
// const graphqlHTTP = require('express-graphql');
const { ApolloServer } = require("apollo-server");
const typeDefs = require("./backend/api/schema");
const resolvers = require("./backend/api/resolver");
const mongoose = require("mongoose");
const db = require("./backend/db");
const { verifyAndGetUser } = require("./backend/api/auth");
// const cors = require('cors');

// allow cross-origin requests
// app.use(cors());

//middleware for understanding graphql with express, each time a requests hits the url the function fires 
// app.use('/graphql', graphqlHTTP({
//   typeDefs,
//   graphiql: true
// }));

const connectToDatabase = async () => {
  try {
    mongoose.set('strictQuery', false); // Corrected line
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("> DB connection successfully");
  } catch (error) {
    console.error("> DB connection failed");
  }
};


const createApolloServer = () => {
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    async context({ req }) {
      const token = req.headers.authorization;
      const user = await verifyAndGetUser(token);
      return {
        ...db,
        user,
      };
    },
  });

  return server;
};

const startApolloServer = async (server) => {
  try {
    const { url } = await server.listen(4000);
    console.log(`> 🚀 Apollo running on port ${url}`);
  } catch (error) {
    console.error("> Apollo server not running");
  }
};

(async () => {
  await connectToDatabase();
  const server = createApolloServer();
  await startApolloServer(server);
})();
