import Query from '../components/QueryGQL';
import HomepageQuery from '../graphql/queries/HomepageQuery';
import ArticlesQuery from '../graphql/queries/ArticlesQuery';
import UtilityTabTitle from '../utilities/UtilityTabTitle';
import DisplayCardArticles from '../components/DisplayCardArticles';

const PageHome = () => {
	UtilityTabTitle('Blogu Home | Superior Software Solutions');

	return (
		<div>
			<Query query={HomepageQuery} id={null}>
				{({ data: { homePage } }) => {
					{
						/** transfer data to variables */
					}
					const homepageHeroImage =
						homePage.data.attributes.hero_image.data.attributes.url;
					const homepageTitle = homePage.data.attributes.title;
					const homepageSubtitle = homePage.data.attributes.subtitle;

					return (
						<div>
							{/** hero section start */}
							<section
								className="h-96 w-full bg-cover bg-center bg-no-repeat"
								style={{ backgroundImage: `url(${homepageHeroImage})` }}
							>
								<div className="flex h-full w-full items-center justify-center bg-slate-900/50">
									<div className="text-center">
										<h1 className="mb-2 text-2xl font-semibold uppercase text-slate-100 lg:text-3xl">
											{homepageTitle}
										</h1>
										<h3 className="mb-4 text-lg font-medium uppercase tracking-wider text-slate-100 lg:text-xl">
											{homepageSubtitle}
										</h3>
									</div>
								</div>
							</section>
							{/** hero section end */}
						</div>
					);
				}}
			</Query>

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
