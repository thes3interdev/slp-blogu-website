import { gql } from '@apollo/client';

const ArticlesQuery = gql`
	query Articles {
		articles {
			data {
				attributes {
					title
					slug
					excerpt
					featured_image {
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

export default ArticlesQuery;
