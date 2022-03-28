import { gql } from '@apollo/client';

const HomepageQuery = gql`
	query Homepage {
		homePage {
			data {
				attributes {
					title
					subtitle
					hero_image {
						data {
							attributes {
								url
							}
						}
					}
				}
			}
		}
	}
`;

export default HomepageQuery;
