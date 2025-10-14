import { useState } from 'react';
import { MdKeyboardArrowRight, MdArrowForward } from 'react-icons/md';
import herobg from '../../assets/images/herobgdark3.png';
// import herobg2 from '../../assets/images/herobgdark4.png';
import { ButtonS } from '../buttons';
// import herobg2 from '../../assets/images/herobgdark4.png';

const Welcome = () => {
	const [hover, setHover] = useState(false);

	const onHover = () => {
		setHover(!hover);
	};

	return (
		<div
			className="relative flex justify-center items-center p-0 px-7.5 h-[850px] z-10 before:content-[''] before:absolute before:inset-0 before:bg-gradient-to-b before:from-[rgba(0,0,0,0.2)] before:via-[rgba(0,0,0,0.6)] before:to-transparent before:z-20 sm:h-[1000px] xs:h-[650px]"
			id="welcome"
		>
			<div className="z-0 absolute top-0 bottom-0 left-0 right-0 w-full h-full overflow-hidden">
				<div
					className="w-full h-full bg-cover bg-center bg-no-repeat"
					style={{ backgroundImage: `url(${herobg})` }}
				></div>
			</div>
			<div className="z-30 w-full max-w-[1200px] absolute flex flex-col items-center md:w-[600px] md:mb-24">
				<h1 className="text-white text-6xl italic text-center max-w-[800px] p-6 sm:text-xl">
					INVEST ON A LIMITED EDITION CRYPTOPRESIS
				</h1>
				<p className="mt-6 text-white text-sm text-center max-w-2xl p-6 sm:text-sm">
					Be part of the select few who get their hands on these limited edition
					art pieces. Own part of history.
				</p>
				<div className="mt-8 flex flex-col items-center p-6">
					<ButtonS
						to="/src/pages/mint.tsx"
						onMouseEnter={onHover}
						onMouseLeave={onHover}
						primary={true}
						dark={true}
						smooth={true}
						duration={500}
						spy={true}
						exact="true"
						offset={-100}
						href="" // Added href property
						dark2={false} // Added dark2 property
					>
						Buy {hover ? <MdArrowForward /> : <MdKeyboardArrowRight />}
					</ButtonS>
				</div>
			</div>
		</div>
	);
};

export default Welcome;
