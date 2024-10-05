require("dotenv").config(); 
const express = require("express");
const path = require("path");
const db = require("./config/connection");
const routes = require("./routes");
const { ApolloServer } = require("apollo-server-express");
const { typeDefs, resolvers } = require("./schemas");
const { AuthenticationError } = require("apollo-server-express");
const jwt = require("jsonwebtoken");

const app = express();
const PORT = process.env.PORT || 3001; 
const secret = process.env.SECRET;

// Middleware for parsing request bodies
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const getUser = (token) => {
  if (token) {
    try {
      return jwt.verify(token, secret);
    } catch (e) {
      throw new AuthenticationError("Invalid token");
    }
  }
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({ req }) => {
    const token = req.headers.authorization || "";
    const user = getUser(token);
    return { user };
  },
});

// Apply Apollo middleware to the Express app
server.applyMiddleware({ app });

// Serve static assets in production
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../client/build")));
}

// Use defined routes
app.use(routes);

// Connect to the database and start the server
db.once("open", () => {
  app.listen(PORT, () => {
    console.log(`🌍 Now listening on localhost:${PORT}${server.graphqlPath}`);
  });
});
