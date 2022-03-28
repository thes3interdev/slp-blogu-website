import { gql } from '@apollo/client';

const ContactpageQuery = gql`
	query ContactPage {
		contactPage {
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

export default ContactpageQuery;
