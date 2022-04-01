import { gql } from '@apollo/client';

const CreateContactMutation = gql`
	mutation createContact($name: String!, $email: String!, $nationality: ENUM_CONTACT_NATIONALITY, $message: String!) {
		createContact(data: { name: $name, email: $email, nationality: $nationality, message: $message }) {
			data {
				id
				attributes {
					name
					email
					nationality
					message
				}
			}
		}
	}
`;

export default CreateContactMutation;
