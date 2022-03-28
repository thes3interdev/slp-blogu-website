import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ApolloProvider } from '@apollo/client';
import client from './utilities/UtilityApolloClient';
import PageHome from './pages/PageHome';
import PageContacts from './pages/PageContacts';

const App = () => {
	return (
		<Router>
			<ApolloProvider client={client}>
				<Routes>
					<Route path="/" element={<PageHome />} />
					<Route path="/contacts" element={<PageContacts />} />
				</Routes>
			</ApolloProvider>
		</Router>
	);
};

export default App;
