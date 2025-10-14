import { useState } from 'react';
import { Data } from './data';
import { IconContext } from 'react-icons';
import { FiPlus, FiMinus } from 'react-icons/fi';
import example from '../../assets/images/example.gif';

type FaqProps = {
	LightBg: boolean;
	imgStart: boolean;
};

const Faq = ({ LightBg, imgStart }: FaqProps) => {
	const [clicked, setClicked] = useState<number | null>(null);
	// const imgStart = true; // or false, depending on your needs

	const toggle = (index: number) => {
		if (clicked === index) {
			return setClicked(null);
		}

		setClicked(index);
	};

	const gridAreaClasses = imgStart
		? 'grid-areas-[col2_col1]'
		: 'grid-areas-[col1_col2]';

	const gridAreaClassesMobile = imgStart
		? 'md:grid-areas-[col1_col2]'
		: 'md:grid-areas-[col1_col1_col2_col2]';

	return (
		<IconContext.Provider value={{ color: '#00fff', size: '20px' }}>
			<div
				className={`text-white p-12 ${
					LightBg ? 'bg-[#f9f9f9]' : 'bg-[#010606]'
				} sm:p-0 sm:px-6`}
				id="faq"
			>
				<div className="grid z-10 h-full max-h-[1600px] w-full mx-auto justify-center">
					<div className="flex py-6 w-full justify-center">
						<h1 className="text-[24px] italic leading-relaxed font-semibold text-white sm:text-[24px]">
							FAQ
						</h1>
					</div>
					<div
						className={`grid grid-cols-2 items-center md:grid-cols-1 ${gridAreaClasses} ${gridAreaClassesMobile}`}
					>
						<div className="mb-4 px-4">
							<div className="max-w-[740px] pt-0 pb-16">
								{Data.map((item, index) => {
									return (
										<div key={index}>
											<div
												onClick={() => toggle(index)}
												className="bg-black text-white flex justify-center items-center text-left cursor-pointer border border-[#00ffff] text-sm sm:text-xs"
											>
												<h1 className="p-8 text-sm sm:text-xs">
													{item.question}
												</h1>
												<span className="mr-6">
													{clicked === index ? <FiMinus /> : <FiPlus />}
												</span>
											</div>
											{clicked === index ? (
												<div className="bg-black text-white h-24 flex flex-col justify-center items-center text-sm sm:text-xs">
													<p className="text-sm sm:text-xs">{item.answer}</p>
												</div>
											) : null}
										</div>
									);
								})}
							</div>
						</div>
						<div className="mb-4 px-4">
							<div className="max-w-[555px] h-full">
								<img
									src={example}
									alt="Example"
									className="w-full mb-12 pr-0"
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</IconContext.Provider>
	);
};

export default Faq;
