import Query from '../components/QueryGQL';
import ContactpageQuery from '../graphql/queries/ContactpageQuery';
import UtilityTabTitle from '../utilities/UtilityTabTitle';
import DisplayHeroSection from '../components/DisplayHeroSection';

const PageContacts = () => {
	UtilityTabTitle('Contact Blogu | Superior Software Solutions');

	return (
		<div>
			{/** hero section display start */}
			<Query query={ContactpageQuery} id={null}>
				{({ data: { contactPage } }) => {
					return (
						<div>
							{/** hero section start */}
							<DisplayHeroSection
								backgroundImage={
									contactPage.data.attributes.hero_image.data.attributes.url
								}
								title={contactPage.data.attributes.title}
								subtitle={contactPage.data.attributes.subtitle}
							/>
							{/** hero section end */}
						</div>
					);
				}}
			</Query>
			{/** hero section display end */}
		</div>
	);
};

export default PageContacts;
