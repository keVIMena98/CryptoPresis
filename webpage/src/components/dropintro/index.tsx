interface DropIntroSectionProps {
	id: string;
	lightBg: boolean;
	lightText: boolean;
	lightTextDesc: boolean;
	topline: string;
	headline: string;
	description1: string;
	description2: string;
	description3: string;
	buttonlabel: string;
	link: string;
	imgStart: boolean;
	img: string;
	alt: string;
	dark: boolean;
	primary: boolean;
	darkText: boolean;
}

const DropIntroSection: React.FC<DropIntroSectionProps> = () => {
	return (
		<div className="text-white p-8 bg-black">
			<div className="grid z-10 h-full max-h-970 mx-auto">
				<div className="grid" style={{ width: '100%' }}>
					<div className="max-w-740 px-15">
						<h1 className="mb-24 text-24 italic font-semibold leading-1 text-white">
							BITCOIN BACKGROUND BY CRYPTOPRESIS
						</h1>
						<p className="mb-12 text-12 leading-18">
							Bitcoin Backgrounds is a specially curated Twitter Background NFT
							drop.
						</p>
						<p className="mb-12 text-12 leading-18">
							Selecting 5 of the top Salvadorean artists to launch their Genesis
							piece, this collection is available free-to-mint for 5 days
							exclusively for holders of the CryptoPresis NFT.
						</p>
						<p className="mb-12 text-12 leading-18">
							Each of these pieces will grant future utility for their holders
							and are designed to be used as Twitter backgrounds complementing
							the CryptoPresis NFT profile pictures.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default DropIntroSection;
