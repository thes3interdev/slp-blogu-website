import Query from '../components/QueryGQL';
import HomepageQuery from '../graphql/queries/HomepageQuery';
import ArticlesQuery from '../graphql/queries/ArticlesQuery';
import UtilityTabTitle from '../utilities/UtilityTabTitle';
import DisplayHeroSection from '../components/DisplayHeroSection';
import DisplayCardArticles from '../components/DisplayCardArticles';

const PageHome = () => {
	UtilityTabTitle('Blogu Home | Superior Software Solutions');

	return (
		<div>
			{/** hero section display start */}
			<Query query={HomepageQuery} id={null}>
				{({ data: { homePage } }) => {
					return (
						<div>
							{/** hero section start */}
							<DisplayHeroSection
								backgroundImage={homePage.data.attributes.hero_image.data.attributes.url}
								title={homePage.data.attributes.title}
								subtitle={homePage.data.attributes.subtitle}
							/>
							{/** hero section end */}
						</div>
					);
				}}
			</Query>
			{/** hero section display end */}

			{/** article cards display start */}
			<Query query={ArticlesQuery}>
				{({ data: { articles } }) => {
					return <DisplayCardArticles articles={articles.data} />;
				}}
			</Query>
			{/** article cards display end */}
		</div>
	);
};

export default PageHome;
