import {
  ApolloProvider,
  ApolloClient,
  InMemoryCache,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { Routes, Route } from "react-router-dom";
import SearchBooks from "./pages/SearchBooks";
import SavedBooks from "./pages/SavedBooks";
import Navbar from "./components/Navbar";
import Auth from "./utils/auth";

// Set up the HTTP link
const httpLink = createHttpLink({
  uri: "https://novelquest.onrender.com/graphql",
});


// Set up the authorization link
const authLink = setContext((_, { headers }) => {
  const token = Auth.getToken(); // Get token from localStorage
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "", // Include token in the Authorization header
    },
  };
});

// Initialize Apollo Client with both links
const client = new ApolloClient({
  link: authLink.concat(httpLink), // Concatenate authLink and httpLink
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Navbar />
      <Routes>
        <Route path="/" element={<SearchBooks />} />
        <Route path="/saved" element={<SavedBooks />} />
      </Routes>
    </ApolloProvider>
  );
}

export default App;
