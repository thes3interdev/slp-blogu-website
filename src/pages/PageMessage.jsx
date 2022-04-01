import Query from '../components/QueryGQL';
import ContactpageQuery from '../graphql/queries/ContactpageQuery';
import UtilityTabTitle from '../utilities/UtilityTabTitle';
import DisplayHeroSection from '../components/DisplayHeroSection';
import DisplayMessageForm from '../components/DisplayMessageForm';

const PageMessage = () => {
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
								backgroundImage={contactPage.data.attributes.hero_image.data.attributes.url}
								title={contactPage.data.attributes.title}
								subtitle={contactPage.data.attributes.subtitle}
							/>
							{/** hero section end */}
						</div>
					);
				}}
			</Query>
			{/** hero section display end */}

			{/** message form display start */}
			<DisplayMessageForm />
			{/** message form display end */}
		</div>
	);
};

export default PageMessage;
