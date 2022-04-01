import { useState } from 'react';
import { Link } from 'react-router-dom';

const DisplayMessageForm = () => {
	const initialValues = { name: '', email: '', nationality: '', message: '' };
	const [formValues, setFormValues] = useState(initialValues);
	const [formErrors, setFormErrors] = useState({});
	const [isSubmitted, setIsSubmitted] = useState(false);

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormValues({ ...formValues, [name]: value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		setFormErrors(validate(formValues));
		console.log(formValues);
		setIsSubmitted(true);
	};

	const validate = (values) => {
		const errors = {};
		const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;

		if (!values.name) {
			errors.name = 'The name is required.';
		}

		if (!values.email) {
			errors.email = 'The email address is required.';
		} else if (!emailRegex.test(values.email)) {
			errors.email = 'The email address is not valid.';
		}

		if (!values.nationality) {
			errors.nationality = 'The nationality is required.';
		}

		if (!values.message) {
			errors.message = 'The message cannot be blank.';
		} else if (values.message.length < 5) {
			errors.message = 'Your message is too short and may not make sense.';
		}

		return errors;
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
									value={formValues.name}
									onChange={handleChange}
								/>
								<p className="text-red-500">{formErrors.name}</p>
							</div>
							<div className="mb-4 flex-1">
								<label>
									Email<span className="font-bold text-red-600">*</span>
								</label>
								<input
									type="text"
									name="email"
									className="mt-1 w-full rounded-md border-2 border-gray-100 bg-gray-100 py-3 focus:border-gray-100 focus:outline-none focus:ring-1 focus:ring-gray-200 focus:ring-offset-2"
									placeholder="john.doe@email.com"
									value={formValues.email}
									onChange={handleChange}
								/>
								<p className="text-red-500">{formErrors.email}</p>
							</div>
						</div>
						<div className="flex flex-col sm:flex-row sm:gap-8">
							<div className="mb-5 flex-1">
								<label>
									Nationality<span className="font-bold text-red-600">*</span>
								</label>
								<input
									type="text"
									name="nationality"
									className="mt-1 w-full rounded-md border-2 border-gray-100 bg-gray-100 py-3 focus:border-gray-100 focus:outline-none focus:ring-1 focus:ring-gray-200 focus:ring-offset-2"
									placeholder="Kenya"
									value={formValues.nationality}
									onChange={handleChange}
								/>
								<p className="text-red-500">{formErrors.nationality}</p>
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
									value={formValues.message}
									onChange={handleChange}
								></textarea>
								<p className="text-red-500">{formErrors.message}</p>
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
