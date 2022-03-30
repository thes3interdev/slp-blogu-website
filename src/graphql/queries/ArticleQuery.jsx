import { gql } from '@apollo/client';

const ArticleQuery = gql`
	query Article($slug: String!) {
		articles(filters: { slug: { eq: $slug } }) {
			data {
				attributes {
					title
					slug
					excerpt
					content
					featured_image {
						data {
							attributes {
								url
							}
						}
					}
					publishedAt
					author {
						data {
							attributes {
								name
								bio
								image {
									data {
										attributes {
											url
										}
									}
								}
							}
						}
					}
					categories {
						data {
							attributes {
								name
								slug
							}
						}
					}
				}
			}
		}
	}
`;

export default ArticleQuery;
