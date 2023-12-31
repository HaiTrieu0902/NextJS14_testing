import { graph, config } from '@grafbase/sdk';
const g = graph.Standalone();

export default config({
    graph: g,
    // Authentication - https://grafbase.com/docs/auth
    auth: {
        // OpenID Connect
        // const oidc = auth.OpenIDConnect({ issuer: g.env('OIDC_ISSUER_URL') })
        // providers: [oidc],
        rules: (rules) => {
            rules.public();
        },
    },
    // Caching - https://grafbase.com/docs/graphql-edge-caching
    // cache: {
    //   rules: [
    //     {
    //       types: ['Query'], // Cache everything for 60 seconds
    //       maxAge: 60,
    //       staleWhileRevalidate: 60
    //     }
    //   ]
    // }
});
