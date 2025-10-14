import React from 'react';
import { Link as LinkS } from 'react-scroll';
// import { Link as LinkR } from 'react-router-dom';
import { FaTimes, FaTwitter, FaInstagram } from 'react-icons/fa';
import Icon1 from '../../assets/images/os-svg.svg';
import Icon2 from '../../assets/images/looksrare-svg.svg';
import Icon3 from '../../assets/images/rarible-svg.png';

interface SidebarProps {
	isOpen: boolean;
	// toggle: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, toggle }) => {
	return (
		<aside
			className={`fixed z-50 w-full h-full bg-black grid items-center top-0 left-0 transition-all duration-300 ${
				isOpen ? 'opacity-100 top-0' : 'opacity-0 -top-full'
			}`}
		>
			<div
				className="absolute top-6 right-6 bg-transparent text-2xl cursor-pointer outline-none"
				onClick={toggle}
			>
				<FaTimes className="text-white" />
			</div>
			<div className="text-white">
				<ul className="grid grid-cols-1 grid-rows-6 text-center md:grid-rows-6 md:text-center">
					<li className="h-24">
						<LinkS
							to="Home"
							onClick={toggle}
							smooth={true}
							duration={500}
							spy={true}
							offset={-100}
							className="flex items-center justify-center text-lg text-white cursor-pointer transition-colors duration-200 hover:text-cyan-400"
						>
							HOME
						</LinkS>
					</li>
					<li className="h-24">
						<LinkS
							to="Mint"
							onClick={toggle}
							smooth={true}
							duration={500}
							spy={true}
							offset={-100}
							className="flex items-center justify-center text-lg text-white cursor-pointer transition-colors duration-200 hover:text-cyan-400"
						>
							BUY A PRESI
						</LinkS>
					</li>
					<li className="h-16">
						<LinkS
							to="Roadmap"
							onClick={toggle}
							smooth={true}
							duration={500}
							spy={true}
							offset={-100}
							className="flex items-center justify-center text-lg text-white cursor-pointer transition-colors duration-200 hover:text-cyan-400"
						>
							ROADMAP
						</LinkS>
					</li>
					{/* <li className="h-16">
						<LinkS
							to="Collection"
							onClick={toggle}
							smooth={true}
							duration={500}
							spy={true}
							offset={-100}
							className="flex items-center justify-center text-lg text-white cursor-pointer transition-colors duration-200 hover:text-cyan-400"
						>
							COLLECTION
						</LinkS>
					</li> */}
					<li className="h-16">
						<LinkS
							to="Team"
							onClick={toggle}
							smooth={true}
							duration={500}
							spy={true}
							offset={-100}
							className="flex items-center justify-center text-lg text-white cursor-pointer transition-colors duration-200 hover:text-cyan-400"
						>
							TEAM
						</LinkS>
					</li>
					<li className="h-16">
						<LinkS
							to="FAQ"
							onClick={toggle}
							smooth={true}
							duration={500}
							spy={true}
							offset={-100}
							className="flex items-center justify-center text-lg text-white cursor-pointer transition-colors duration-200 hover:text-cyan-400"
						>
							FAQ
						</LinkS>
					</li>
					{/* <li className="h-16">
						<LinkR
							to="/drop"
							onClick={toggle}
							className="flex items-center justify-center text-lg text-white cursor-pointer transition-colors duration-200 hover:text-cyan-400"
						>
							DROP
						</LinkR>
					</li> */}
					{/* <li className="h-16">
						<LinkS
							to=""
							onClick={toggle}
							className="flex items-center justify-center text-lg text-white cursor-pointer transition-colors duration-200 hover:text-cyan-400"
						>
							MERCH (Coming Soon)
						</LinkS>
					</li> */}
				</ul>
				<div className="flex text-lg justify-center">
					<a
						href="//twitter.com/CryptoPresis"
						target="_blank"
						rel="noopener noreferrer"
						className="text-white mt-12 mx-1.5 text-lg no-underline list-none transition-all duration-200 ease-in-out cursor-pointer px-2.5 hover:text-cyan-400"
					>
						<FaTwitter className="h-5 w-5" />
					</a>
					<a
						href="//instagram.com/cryptopresisnft"
						target="_blank"
						rel="noopener noreferrer"
						className="text-white mt-12 mx-1.5 text-lg no-underline list-none transition-all duration-200 ease-in-out cursor-pointer px-2.5 hover:text-cyan-400"
					>
						<FaInstagram className="h-5 w-5" />
					</a>
					<a
						href="//opensea.io/collection/cryptopresisoffcial"
						target="_blank"
						rel="noopener noreferrer"
						className="text-white mt-12 mx-1.5 text-lg no-underline list-none transition-all duration-200 ease-in-out cursor-pointer px-2.5 hover:text-cyan-400"
					>
						<img src={Icon1} alt="OpenSea" className="h-5 w-5" />
					</a>
					<a
						href="//rarible.com/cryptopresisofficial"
						target="_blank"
						rel="noopener noreferrer"
						className="text-white mt-12 mx-1.5 text-lg no-underline list-none transition-all duration-200 ease-in-out cursor-pointer px-2.5 hover:text-cyan-400"
					>
						<img src={Icon3} alt="Rarible" className="h-5 w-5" />
					</a>
					<a
						href="//looksrare.org/collections/0x3ee15e0b8d236f7741ca5c1259fbcf1544e51621"
						target="_blank"
						rel="noopener noreferrer"
						className="text-white mt-12 mx-1.5 text-lg no-underline list-none transition-all duration-200 ease-in-out cursor-pointer px-2.5 hover:text-cyan-400"
					>
						<img src={Icon2} alt="LooksRare" className="h-5 w-5" />
					</a>
				</div>
			</div>
		</aside>
	);
};

export default Sidebar;
