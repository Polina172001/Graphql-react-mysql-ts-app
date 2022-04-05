import React, { useState } from "react";
import {
  ApolloClient,
  ApolloProvider,
  InMemoryCache,
  useMutation,
} from "@apollo/client";
import "./App.css";
import { CREATE_USER } from "./Graphql/Mutation";
import CreateUser from "./Components/CreateUser";
import ListOfUsers from "./Components/ListOfUsers";
import UpdatePassword from "./Components/UpdatePassword";

function App() {
  const client = new ApolloClient({
    uri: "http://localhost:3001/graphql",
    cache: new InMemoryCache(),
  });

  return (
    <>
      <ApolloProvider client={client}>
        <CreateUser />
        <ListOfUsers />
        <UpdatePassword />
      </ApolloProvider>
    </>
  );
}

export default App;
