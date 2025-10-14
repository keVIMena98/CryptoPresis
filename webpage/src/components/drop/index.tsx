import React from 'react';
import { ButtonA } from '../buttons';
// import { useNavigate } from 'react-router-dom';

interface DropSectionProps {
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
	dark2: boolean;
	primary: boolean;
	darkText: boolean;
	href: string;
}

const DropSection: React.FC<DropSectionProps> = ({
	lightBg,
	id,
	imgStart,
	topline,
	lightText,
	headline,
	darkText,
	description1,
	description2,
	description3,
	buttonlabel,
	img,
	link,
	alt,
	primary,
	dark,
	dark2,
	// href,
}) => {
	// const navigate = useNavigate();
	return (
		<div
			className={`text-white p-8 ${lightBg ? 'bg-gray-100' : 'bg-black'}`}
			id={id}
		>
			<div className="grid z-10 h-full max-h-970 mx-auto max-w-1500 justify-center">
				<div
					className={`grid ${imgStart ? 'grid-cols-2' : 'grid-cols-2'}`}
					style={{ width: '100%', maxWidth: '1500px' }}
				>
					<div className="mb-15 px-15 col-span-1">
						<div className="max-w-540">
							<p className="text-cyan-500 uppercase text-xs font-bold leading-16 mb-16">
								{topline}
							</p>
							<h1
								className={`mb-24 text-24 font-semibold ${
									lightText ? 'text-white' : 'text-black'
								}`}
							>
								{headline}
							</h1>
							<p
								className={`mb-12 text-12 leading-18 ${
									darkText ? 'text-black' : 'text-white'
								}`}
							>
								{description1}
							</p>
							<p
								className={`mb-12 text-12 leading-18 ${
									darkText ? 'text-black' : 'text-white'
								}`}
							>
								{description2}
							</p>
							<p
								className={`mb-12 text-12 leading-18 ${
									darkText ? 'text-black' : 'text-white'
								}`}
							>
								{description3}
							</p>
						</div>
					</div>
					<div className="mb-15 px-15 col-span-1">
						<div className="max-w-555">
							<img className="w-full mb-10" src={img} alt={alt} />
						</div>
						<div className="flex justify-center p-12">
							<ButtonA
								href={link}
								to={link}
								smooth
								duration={500}
								spy
								exact="true"
								offset={-80}
								primary={primary}
								dark={dark}
								dark2={dark2}
							>
								{buttonlabel}
							</ButtonA>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default DropSection;
