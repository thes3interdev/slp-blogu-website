import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import CREATE_MESSAGE from '../graphql/mutations/CreateContactMutation';

const DisplayMessageForm = () => {
	const navigate = useNavigate();
	const [createContact] = useMutation(CREATE_MESSAGE);
	const [message, setMessage] = useState({});

	const handleChange = (event) => {
		setMessage({ ...message, [event.target.name]: event.target.value });
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		createContact({ variables: { ...message } });
		window.location.reload();
		navigate(-1);
	};

	return (
		<div className="my-16 w-full px-2">
			{/** section header start */}
			<div className="mx-auto max-w-6xl">
				<div className="text-center">
					<h2 className="text-3xl font-bold">Send a Message</h2>
					<p className="py-5 text-lg">
						What’s new and noteworthy at Blogu? Well, everything is noteworthy. From new articles and tutorials and
						exciting technology deep dives to crackling blog commentary and good old-fashioned news, we have a lot to
						tell you, but we promise we’ll be selective about our updates to you and will not spam you.
					</p>
				</div>
			</div>
			{/** section header end */}

			{/**section body start */}
			<div className="mx-auto max-w-3xl px-8 pb-8">
				<div className="mx-auto max-w-3xl rounded-lg bg-white px-4 py-8 shadow-lg sm:px-6 lg:px-8">
					{/** data entry form start */}
					<form onSubmit={handleSubmit} className="py-6">
						<div className="flex flex-col sm:flex-row sm:gap-8">
							<div className="mb-4 flex-1">
								<label>
									Name<span className="font-bold text-red-600">*</span>
								</label>
								<input
									type="text"
									name="name"
									className="mt-1 w-full rounded-md border-2 border-gray-100 bg-gray-100 py-3 focus:border-gray-100 focus:outline-none focus:ring-1 focus:ring-gray-200 focus:ring-offset-2"
									placeholder="John Doe"
									onChange={handleChange}
									required
								/>
							</div>
							<div className="mb-4 flex-1">
								<label>
									Email<span className="font-bold text-red-600">*</span>
								</label>
								<input
									type="email"
									name="email"
									className="mt-1 w-full rounded-md border-2 border-gray-100 bg-gray-100 py-3 focus:border-gray-100 focus:outline-none focus:ring-1 focus:ring-gray-200 focus:ring-offset-2"
									placeholder="john.doe@email.com"
									onChange={handleChange}
									required
								/>
							</div>
						</div>
						<div className="flex flex-col sm:flex-row sm:gap-8">
							<div className="mb-5 flex-1">
								<label>
									Country of Residence<span className="font-bold text-red-600">*</span>
								</label>
								<input
									type="text"
									name="nationality"
									className="mt-1 w-full rounded-md border-2 border-gray-100 bg-gray-100 py-3 focus:border-gray-100 focus:outline-none focus:ring-1 focus:ring-gray-200 focus:ring-offset-2"
									placeholder="Kenya"
									onChange={handleChange}
									required
								/>
							</div>
						</div>
						<div className="flex flex-col sm:flex-row sm:gap-8">
							<div className="mb-5 flex-1">
								<label>Message</label>
								<textarea
									className="mt-1 w-full rounded-md border-2 border-gray-100 bg-gray-100 py-3 focus:border-gray-100 focus:outline-none focus:ring-1 focus:ring-gray-200 focus:ring-offset-2"
									name="message"
									cols="30"
									rows="5"
									placeholder="Tell us what we can help you with!"
									onChange={handleChange}
									required
								></textarea>
							</div>
						</div>
						<button type="submit" className="action-button">
							Send Message
						</button>
						<p className="m-2 text-center text-xs">
							Your personal details are protected as per the terms of the
							<Link to="/" className="text-sky-700 underline">
								<span> privacy policy</span>
							</Link>
						</p>
					</form>
					{/** data entry form end */}
				</div>
			</div>
			{/**section body end */}
		</div>
	);
};

export default DisplayMessageForm;
