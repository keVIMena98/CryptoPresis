import { ButtonA } from '../buttons';

interface CollectionProps {
	LightBg: boolean;
	imgStart: boolean;
	lightText: boolean;
	headline: string;
	darkText: boolean;
	description: string;
	buttonlabel: string;
	buttonlabel2: string;
	primary: boolean;
	dark: boolean;
	dark2: boolean;
}

const Collection = ({
	LightBg,
	imgStart,
	lightText,
	headline,
	darkText,
	description,
	buttonlabel,
	buttonlabel2,
	primary,
	dark,
	dark2,
}: CollectionProps) => {
	const gridAreaClasses = imgStart
		? 'grid-areas-[col2_col1]'
		: 'grid-areas-[col1_col2]';

	const gridAreaClassesMobile = imgStart
		? 'md:grid-areas-[col1_col2]'
		: 'md:grid-areas-[col1_col1_col2_col2]';
	return (
		<div
			className={`text-white py-12 px-6 ${
				LightBg ? 'bg-gray-100' : 'bg-black'
			} md:py-12 md:px-12`}
			id="collection"
		>
			<div className="grid z-[1] h-full max-h-[970px] w-full mx-auto justify-center">
				<div
					className={`grid grid-cols-[minmax(5fr,_1fr)] w-full items-center ${gridAreaClasses} ${gridAreaClassesMobile}`}
				>
					<div className="mb-4 px-4 col-start-1 col-end-2">
						<div className="max-w-[740px] pt-0 pb-[60px] md:pb-0">
							<h1
								className={`mt-12 mb-6 text-lg italic leading-[1.1] font-semibold ${
									lightText ? 'text-[#f7f8fa]' : 'text-[#010606]'
								} md:text-[18px] sm:my-6 sm:text-center`}
							>
								{headline}
							</h1>
							<p
								className={`w-full text-justify text-sm leading-[18px] ${
									darkText ? 'text-[#010606]' : 'text-white'
								} sm:text-[14px]`}
							>
								{description}
							</p>
						</div>
					</div>
					<div className="mb-4 px-4 col-start-2 col-end-1">
						<div className="flex justify-start p-3 sm:justify-center sm:px-6 sm:py-2">
							{/* <a href="//rarible.com/cryptopresisofficial" target="_blank"> */}
							<ButtonA
								smooth
								duration={500}
								spy
								exact="true"
								offset={-80}
								primary={primary}
								dark={dark}
								dark2={dark2}
								to="https://rarible.com/cryptopresisofficial"
								href="https://rarible.com/cryptopresisofficial"
							>
								{buttonlabel}
							</ButtonA>
							{/* </a> */}
						</div>
						<div className="flex justify-start p-3 sm:justify-center sm:px-6 sm:py-2">
							{/* <a
								href="//mintable.app/store/CryptoPresis-Sim-Labs-LLC/0x3ee15e0b8d236f7741ca5c1259fbcf1544e51621"
								target="_blank"
							> */}
							<ButtonA
								smooth
								duration={500}
								spy
								exact="true"
								offset={-80}
								primary={primary}
								dark={dark}
								dark2={dark2}
								to="//mintable.app/store/CryptoPresis-Sim-Labs-LLC/0x3ee15e0b8d236f7741ca5c1259fbcf1544e51621"
								href="//mintable.app/store/CryptoPresis-Sim-Labs-LLC/0x3ee15e0b8d236f7741ca5c1259fbcf1544e51621"
							>
								{buttonlabel2}
							</ButtonA>
							{/* </a> */}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Collection;
