import { Link } from 'react-router-dom';

const DisplayCardArticles = ({ articles }) => {
	return (
		<div className="my-16 w-full px-2">
			{/** section header start */}
			<div className="mx-auto max-w-6xl">
				<div className="text-center">
					<h2 className="text-3xl font-bold">Trusted by Developers Around The World</h2>
					<p className="py-5 text-xl">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident aspernatur
						asperiores nostrum corporis harum. Exercitationem architecto minus vero esse
						quas vel.
					</p>
				</div>
			</div>
			{/** section header end */}

			{/** section body start */}
			<div className="mx-auto max-w-6xl">
				<div className="grid grid-cols-1 gap-x-8 gap-y-8 px-4 pt-12 sm:pt-20 lg:grid-cols-3">
					{articles.map((article) => {
						return (
							<div key={article.attributes.slug}>
								<div className="overflow-hidden rounded-lg bg-slate-50 shadow-lg transition-shadow duration-300">
									<img
										src={article.attributes.featured_image.data.attributes.url}
										className="h-64 w-full bg-center object-cover object-center"
										alt={article.attributes.title}
									/>
									<div className="border border-t-0 p-5">
										<Link
											to={`/articles/${article.attributes.slug}`}
											className="display-card-title"
										>
											{article.attributes.title}
										</Link>
										<p className="mb-2 line-clamp-3">{article.attributes.excerpt}</p>
										<Link
											to={`/articles/${article.attributes.slug}`}
											className="action-button"
										>
											Learn More
										</Link>
									</div>
								</div>
							</div>
						);
					})}
				</div>
			</div>
			{/** section body end */}
		</div>
	);
};

export default DisplayCardArticles;
