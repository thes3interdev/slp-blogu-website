import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ApolloProvider } from '@apollo/client';
import client from './utilities/UtilityApolloClient';
import NavigationHeader from './components/NavigationHeader';
import PageHome from './pages/PageHome';
import PageContacts from './pages/PageContacts';
import PageArticle from './pages/PageArticle';

const App = () => {
	return (
		<Router>
			<ApolloProvider client={client}>
				<NavigationHeader />
				<Routes>
					<Route path="/" element={<PageHome />} />
					<Route path="/articles/:slug" element={<PageArticle />} />
					<Route path="/contacts" element={<PageContacts />} />
				</Routes>
			</ApolloProvider>
		</Router>
	);
};

export default App;
