import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter } from 'react-icons/fa';

const NavigationFooter = () => {
	const navigationLinks = [
		{ name: 'Home', link: '/' },
		{ name: 'Contacts', link: '/contacts' },
	];

	const currentYear = new Date().getFullYear();

	return (
		<footer className="mt-auto bg-slate-800 py-16">
			<div className="mx-auto flex max-w-7xl flex-col px-4">
				<div className="items-center justify-between text-center text-slate-100 md:flex">
					<h2 className="text-xl font-bold uppercase tracking-wide">Blogu</h2>
					<div className=" flex justify-center space-x-2 text-2xl sm:max-w-xs">
						<FaFacebook className="m-2 cursor-pointer" />
						<FaTwitter className="m-2 cursor-pointer" />
					</div>
				</div>
				<hr className="my-4 h-px border-slate-100" />
				<div className="flex flex-col items-center justify-between text-slate-100 md:flex-row">
					<div>
						<p className="text-sm ">
							© Copyright {currentYear} Superior Software Solutions LTD.
						</p>
					</div>
					<div>
						<ul className="flex items-center space-x-2">
							{navigationLinks.map((link) => (
								<li key={link.name}>
									<Link to={link.link} className="tracking-wide hover:underline">
										{link.name}
									</Link>
								</li>
							))}
						</ul>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default NavigationFooter;
