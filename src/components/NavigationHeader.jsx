import { useState } from 'react';
import { Link } from 'react-router-dom';

const NavigationHeader = () => {
	const navigationLinks = [
		{ name: 'Home', link: '/' },
		{ name: 'Contacts', link: '/contacts' },
	];

	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const handleClose = () => setIsMenuOpen(!isMenuOpen);

	return (
		<div className="fixed inset-x-0 top-0 bg-sky-800">
			<div className="mx-auto px-4 py-5 sm:max-w-xl md:max-w-full md:px-24 lg:max-w-screen-xl lg:px-8">
				<div className="relative flex items-center justify-between">
					<Link to="/" className="inline-flex items-center">
						<span className="ml-2 text-xl font-semibold uppercase tracking-wide text-slate-100">
							Blogu
						</span>
					</Link>

					<ul className="hidden items-center space-x-8 lg:flex">
						{navigationLinks.map((link) => (
							<li key={link.name}>
								<Link
									to={link.link}
									className="font-medium tracking-wide text-slate-100 "
								>
									{link.name}
								</Link>
							</li>
						))}
					</ul>

					<div className="lg:hidden">
						<button
							className="focus:shadow-outline -mr-1 rounded p-2 transition duration-200 focus:outline-none"
							onClick={() => setIsMenuOpen(true)}
						>
							<svg className="w-5 text-slate-100" viewBox="0 0 24 24">
								<path
									fill="currentColor"
									d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
								/>
								<path
									fill="currentColor"
									d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
								/>
								<path
									fill="currentColor"
									d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
								/>
							</svg>
						</button>

						{isMenuOpen && (
							<div className="absolute top-0 left-0 w-full">
								<div className="rounded border bg-slate-100 p-5 shadow-sm">
									<div className="mb-4 flex items-center justify-between">
										<div>
											<Link
												onClick={handleClose}
												to="/"
												className="inline-flex items-center"
											>
												<span className="text-xl font-bold uppercase tracking-wide text-gray-800">
													Blogu
												</span>
											</Link>
										</div>

										<div>
											<button onClick={() => setIsMenuOpen(false)}>
												<svg className="w-5 text-slate-800" viewBox="0 0 24 24">
													<path
														fill="currentColor"
														d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
													/>
												</svg>
											</button>
										</div>
									</div>

									<div>
										<ul className="space-y-4">
											{navigationLinks.map((link) => (
												<li key={link.name}>
													<Link
														onClick={handleClose}
														to={link.link}
														className="font-medium tracking-wider"
													>
														{link.name}
													</Link>
												</li>
											))}
										</ul>
									</div>
								</div>
							</div>
						)}
					</div>
				</div>
			</div>
		</div>
	);
};

export default NavigationHeader;
