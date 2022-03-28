import Query from '../components/QueryGQL';
import ContactpageQuery from '../graphql/queries/ContactpageQuery';
import UtilityTabTitle from '../utilities/UtilityTabTitle';

const PageContacts = () => {
	UtilityTabTitle('Contacts Page | Superior Software Solutions');

	return (
		<div>
			<Query query={ContactpageQuery} id={null}>
				{({ data: { contactPage } }) => {
					{
						/** transfer data to variables */
					}
					const contactpageHeroImage =
						contactPage.data.attributes.hero_image.data.attributes.url;
					const contactpageTitle = contactPage.data.attributes.title;
					const contactpageSubtitle = contactPage.data.attributes.subtitle;

					return (
						<div>
							{/** hero section start */}
							<section
								className="h-96 w-full bg-cover bg-center bg-no-repeat"
								style={{ backgroundImage: `url(${contactpageHeroImage})` }}
							>
								<div className="flex h-full w-full items-center justify-center bg-slate-900 bg-opacity-50">
									<div className="text-center">
										<h1 className="mb-2 text-2xl font-semibold uppercase text-slate-100 lg:text-3xl">
											{contactpageTitle}
										</h1>
										<h3 className="mb-4 text-lg font-medium uppercase tracking-wider text-slate-100 lg:text-xl">
											{contactpageSubtitle}
										</h3>
									</div>
								</div>
							</section>
							{/** hero section end */}
						</div>
					);
				}}
			</Query>
		</div>
	);
};

export default PageContacts;
