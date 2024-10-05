import "./App.css";
import { Outlet } from "react-router-dom";

// Import Apollo Client
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client"; 
import Navbar from "./components/Navbar";

// Create Apollo Client instance
const client = new ApolloClient({
  // Your GraphQL endpoint
  uri: "http://localhost:3001/graphql",
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      {" "}
      {/* Wrap your app with ApolloProvider */}
      <>
        <Navbar />
        <Outlet />
      </>
    </ApolloProvider>
  );
}

export default App;
