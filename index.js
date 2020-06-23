const express = require('express');
const { ApolloServer, gql } = require('apollo-server-express');
const jwt = require('jsonwebtoken');
require('dotenv').config('variables.env');
const resolvers = require('./graphql/Resolvers');
const typeDefs = require('./graphql/Schema');

const connectDB = require('./config/db');


// Conectar a la BD
connectDB();

const server = new ApolloServer({ 
  typeDefs, 
  resolvers,
  context: ({ req }) => {
    // Si no existe el token en el header "Usuario no logueado", entonces se le asigna un String vacío
    const token = req.headers['authorization'] || '';
    if (token) {
        try {
            const user = jwt.verify(token.replace('Bearer ', ''), process.env.SECRET);
            return { user };
        } catch (error) {
            console.log(error);
        }
    }
  } 
});

const app = express();
server.applyMiddleware({ app });

app.listen({ port: 4001 }, () =>
  console.log('Now browse to http://localhost:4001' + server.graphqlPath)
);
