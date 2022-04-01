import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ApolloProvider } from '@apollo/client';
import client from './utilities/UtilityApolloClient';
import NavigationHeader from './components/NavigationHeader';
import PageHome from './pages/PageHome';
import PageArticle from './pages/PageArticle';
import PageMessage from './pages/PageMessage';
import NavigationFooter from './components/NavigationFooter';

const App = () => {
	return (
		<Router>
			<ApolloProvider client={client}>
				<div className="flex h-screen flex-col">
					<NavigationHeader />
					<Routes>
						<Route path="/" element={<PageHome />} />
						<Route path="/articles/:slug" element={<PageArticle />} />
						<Route path="/messages" element={<PageMessage />} />
					</Routes>
					<NavigationFooter />
				</div>
			</ApolloProvider>
		</Router>
	);
};

export default App;
