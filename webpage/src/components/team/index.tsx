import { FaTwitter } from 'react-icons/fa';
import Icon1 from '../../assets/images/205.png';
import Icon2 from '../../assets/images/207.png';
import Icon3 from '../../assets/images/192.png';

const Team = () => {
	return (
		<div
			className="h-full max-h-[3000px] flex flex-col justify-center items-center bg-black py-12 px-6 md:max-h-[1500px] sm:max-h-[6000px] xs:max-h-[10000px]"
			id="team"
		>
			<h1 className="py-6 text-[24px] italic leading-[1.1] font-semibold text-white sm:text-[18px]">
				THE TEAM
			</h1>
			<div className="w-full max-w-[1000px] m-auto grid grid-cols-3 gap-4 lg:grid-cols-3 md:grid-cols-2 md:px-12px sm:grid-cols-1 sm:px-0px sm:gap-2">
				<div className="bg-black border-4 border-dashed border-[#00FFFF] flex flex-col justify-start items-center p-2 shadow-sm transition-all duration-200 ease-in-out hover:transform hover:cursor-pointer">
					<img
						src={Icon1}
						alt="Team Profile"
						className="h-full w-full mb-2 sm:h-full sm:w-full"
					/>
					<h3 className="text-sm text-white mb-2 sm:text-xs">
						Capitan Capibara
					</h3>
					<h2 className="text-base text-white mb-2 sm:text-xs">Project Lead</h2>
					<a
						href="//twitter.com/capitancapibara"
						target="_blank"
						rel="noopener noreferrer"
						className="text-white text-xl hover:transition-all hover:duration-200 hover:ease-in-out hover:text-[#00ffff]"
					>
						<FaTwitter />
					</a>
				</div>
				<div className="bg-black border-4 border-dashed border-[#00FFFF] flex flex-col justify-start items-center p-2 shadow-md transition-all duration-200 ease-in-out transform hover:scale-105 hover:cursor-pointer">
					<img
						src={Icon2}
						alt="Team Profile"
						className="h-full w-full mb-2 sm:h-full sm:w-full"
					/>
					<h3 className="text-sm text-white mb-2 sm:text-xs">ackermann.eth</h3>
					<h2 className="text-base text-white mb-2 sm:text-xs">Developer</h2>
					<a
						href="//twitter.com/ackermann_eth"
						target="_blank"
						rel="noopener noreferrer"
						className="text-white text-xl hover:transition-all hover:duration-200 hover:ease-in-out hover:text-[#00ffff]"
					>
						<FaTwitter />
					</a>
				</div>
				<div className="bg-black border-4 border-dashed border-[#00FFFF] flex flex-col justify-start items-center p-2 shadow-md transition-all duration-200 ease-in-out transform hover:scale-105 hover:cursor-pointer">
					<img
						src={Icon3}
						alt="Team Profile"
						className="h-full w-full mb-2 sm:h-full sm:w-full"
					/>
					<h3 className="text-sm text-white mb-2 sm:text-xs">Pxl Plnktn</h3>
					<h2 className="text-base text-white mb-2 sm:text-xs">Artist</h2>
					<a
						href="//twitter.com/PxlPlnktn"
						target="_blank"
						rel="noopener noreferrer"
						className="text-white text-xl hover:transition-all hover:duration-200 hover:ease-in-out hover:text-[#00ffff]"
					>
						<FaTwitter />
					</a>
				</div>
			</div>
		</div>
	);
};

export default Team;
