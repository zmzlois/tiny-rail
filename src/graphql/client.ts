import { ApolloClient, InMemoryCache, ApolloProvider, gql, HttpLink, from } from '@apollo/client';
import { onError } from "@apollo/client/link/error";

const errorLink = onError(({ graphQLErrors, networkError, operation, forward }) => {
    if (graphQLErrors)
        for (let err of graphQLErrors) {
            switch (err.extensions.code) {
                // Apollo Server sets code to UNAUTHENTICATED
                // when an AuthenticationError is thrown in a resolver
                case "UNAUTHENTICATED":
                    // Modify the operation context with a new token
                    const oldHeaders = operation.getContext().headers;
                    operation.setContext({
                        headers: {
                            ...oldHeaders,
                            authorization: process.env.RAILWAY_TEAM_TOKEN,
                        },
                    });
                    // Retry the request, returning the new observable
                    return forward(operation);
            }
        }
    if (networkError) console.error(`[Network error]: ${networkError}`);
});

const domain = process.env.RAILWAY_PUBLIC_DOMAIN ? `https://${process.env.RAILWAY_PUBLIC_DOMAIN}` : 'http://localhost:3000';

const httpLink = new HttpLink({ uri: "http://localhost:4000/graphql" });


export const client = new ApolloClient({
    // uri: process.env.RAILWAY_API,
    uri: "http://localhost:4000/graphql",
    link: from([errorLink, httpLink]),
    credentials: "include",
    cache: new InMemoryCache(),
    connectToDevTools: true,
    headers: {
        // authorization: `Bearer ${process.env.RAILWAY_TEAM_TOKEN}`,
        'Access-Control-Allow-Credentials': 'true',
    },

});
