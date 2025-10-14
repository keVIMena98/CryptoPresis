import collage from '../../assets/images/collage.png';

const CollageSection = () => {
	return (
		<div className="py-12 bg-black">
			<div
				className="h-80 bg-cover bg-repeat-linear"
				style={{
					backgroundImage: `url(${collage})`,
					animation: 'animatedBackground 100s linear infinite',
				}}
			></div>
		</div>
	);
};

export default CollageSection;
