interface OverviewProps {
	lightBg: boolean;
	id: string;
	imgStart: boolean;
	lightText: boolean;
	headline: string;
	darkText: boolean;
	description: string;
	img: string;
	alt: string;
}

const Overview: React.FC<OverviewProps> = ({
	lightBg,
	id,
	imgStart,
	lightText,
	headline,
	darkText,
	description,
	img,
	alt,
}: OverviewProps) => {
	const gridAreaClasses = imgStart
		? 'grid-areas-[col2_col1]'
		: 'grid-areas-[col1_col2]';

	const gridAreaClassesMobile = imgStart
		? 'md:grid-areas-[col1_col2]'
		: 'md:grid-areas-[col1_col1_col2_col2]';

	return (
		<div
			className={`text-white py-12 px-6 bg-${
				lightBg ? '[#f9f9f9]' : '[#010606]'
			} md:px-6`}
			id={id}
		>
			<div className="grid z-1 h-full w-full max-h-[970px] mr-auto ml-auto justify-center">
				<div
					className={`grid auto-cols-[minmax(3fr,_1fr)] items-center md:grid-cols-2 ${gridAreaClasses} ${gridAreaClassesMobile}`}
				>
					<div className="mb-4 px-4">
						<div className="max-w-[740px] pt-4 pb-14">
							<h1
								className={`mt-12 mb-6 text-2xl italic md:text-4xl leading-none font-semibold ${
									lightText ? 'text-[#f7f8fa]' : 'text-[#010606]'
								} md:text-lg`}
							>
								{headline}
							</h1>
							<p
								className={`w-full text-justify text-[12px] leading-4 sm:text-[16px] ${
									darkText ? 'text-[#010606]' : 'text-[#f7f8fa]'
								}`}
							>
								{description}
							</p>
						</div>
					</div>
					<div className="mb-4 px-4 justify-end">
						<div className="h-full max-w-[720px]">
							<img src={img} alt={alt} className="w-full m-0 pr-0" />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Overview;
