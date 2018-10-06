import React from "react";
import ReactDOM from "react-dom";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import Router from "./Router";

const client = new ApolloClient({
  uri: process.env.BACKEND_URL || "/graphql"
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <Router />
  </ApolloProvider>,
  document.getElementById("app")
);

if (module.hot) {
  module.hot.accept("./Router", () => {
    const NextAppRouter = require("./Router").default;
    ReactDOM.render(
      <ApolloProvider client={client}>
        <NextAppRouter />
      </ApolloProvider>,
      document.getElementById("app")
    );
  });
}
