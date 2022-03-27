import { ApolloClient, InMemoryCache } from '@apollo/client';

/** configure the apollo client */
const client = new ApolloClient({
	uri:
		process.env.NODE_ENV === 'production'
			? 'https://slp-blogu-baas.s3.co.ke/graphql'
			: 'http://localhost:1337/graphql',
	cache: new InMemoryCache(),
});

export default client;
