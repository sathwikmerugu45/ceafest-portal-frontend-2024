import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
    // uri: "http://localhost:5410/graphql",
    uri: "https://api.fest.ceaiitm.org",
    cache: new InMemoryCache(),
    credentials: "include",
});

export default client