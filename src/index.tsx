import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
    uri: "https://api.blocktap.io/graphql",
    cache: new InMemoryCache()
});

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
    <ApolloProvider client={client}>
        <App />
    </ApolloProvider>
);
