import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { Web3ReactProvider } from "@web3-react/core";
import Web3 from "web3";
import { Web3ContextProvider } from "./components/contexts/contextWeb3";
import { APIContextProvider } from "./components/contexts/contextAPI";

const getLibrary = (provider: any) => {
  return new Web3(provider);
};

const client = new ApolloClient({
  uri: "https://rickandmortyapi.com/graphql",
  cache: new InMemoryCache(),
});

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <Web3ReactProvider getLibrary={getLibrary}>
        <Web3ContextProvider>
          <APIContextProvider>
            <App />
          </APIContextProvider>
        </Web3ContextProvider>
      </Web3ReactProvider>
    </ApolloProvider>
  </React.StrictMode>
);
