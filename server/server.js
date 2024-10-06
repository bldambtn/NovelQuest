const express = require("express");
const { ApolloServer } = require("apollo-server-express");
const { typeDefs, resolvers } = require("./schemas");
const { authMiddleware } = require("./utils/auth");
const db = require("./config/connection");
const path = require("path"); // You need to add this line

const app = express();
const PORT = process.env.PORT || 3001;

async function startApolloServer() {
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: authMiddleware,
  });

  await server.start();
  server.applyMiddleware({ app });

  // Set security headers for Content Security Policy (CSP)
  // app.use((req, res, next) => {
  //   res.setHeader(
  //     "Content-Security-Policy",
  //     "default-src 'self'; script-src 'self' https://novelquest.onrender.com https://static.cloudflareinsights.com; img-src 'self' data:; style-src 'self' https://fonts.googleapis.com 'unsafe-inline'; font-src 'self' https://fonts.gstatic.com;"
  //   );
  //   next();
  // });

  // Serve static assets in production
  if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, "../client/build")));
  }

  db.once("open", () => {
    app.listen(PORT, () => {
      console.log(
        `🌍 Now listening on http://localhost:${PORT}${server.graphqlPath}`
      );
    });
  });
}

startApolloServer();
