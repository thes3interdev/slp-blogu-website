const DisplayHeroSection = ({ backgroundImage, title, subtitle }) => {
	return (
		<div>
			{/** hero section start */}
			<section
				className="h-96 w-full bg-cover bg-center bg-no-repeat"
				style={{
					backgroundImage: `url(${backgroundImage})`,
				}}
			>
				<div className="flex h-full w-full items-center justify-center bg-slate-900/50">
					<div className="text-center uppercase text-slate-100">
						<h1 className="mb-2 text-2xl font-semibold lg:text-3xl">{title}</h1>
						<h3 className="mb-4 text-lg font-medium tracking-wider lg:text-xl">
							{subtitle}
						</h3>
					</div>
				</div>
			</section>
			{/** hero section end */}
		</div>
	);
};

export default DisplayHeroSection;
