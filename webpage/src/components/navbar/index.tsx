import React, { useState, useEffect } from 'react';
import { FaBars, FaTwitter, FaInstagram } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import { animateScroll as scroll } from 'react-scroll';
import { Link as LinkR } from 'react-router-dom';
import { Link as LinkS } from 'react-scroll';
// import Dropdown from '../dropdown';
import Icon1 from '../../assets/images/os-svg.svg';
import Icon2 from '../../assets/images/looksrare-svg.svg';
import Icon3 from '../../assets/images/rarible-svg.png';
import logo from '../../assets/images/logo.png';

interface NavbarProps {
	toggle: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ toggle }) => {
	// const [dropdown, setDropdown] = useState<boolean>(false);

	// const onMouseEnter = (): void => {
	// 	setDropdown(window.innerWidth < 960 ? false : true);
	// };

	// const onMouseLeave = (): void => {
	// 	setDropdown(window.innerWidth < 960 ? false : false);
	// };

	const [scrollNav, setScrollNav] = useState<boolean>(false);

	const changeNav = (): void => {
		setScrollNav(window.scrollY >= 100);
	};

	useEffect(() => {
		window.addEventListener('scroll', changeNav);
		return (): void => {
			window.removeEventListener('scroll', changeNav);
		};
	}, []);

	const toggleHome = (): void => {
		scroll.scrollToTop();
	};

	return (
		<IconContext.Provider value={{ color: '#fff' }}>
			<nav
				className="bg-black h-24 flex justify-center items-center text-sm sticky top-0 z-50 lg:transition-all lg:duration-700 lg:ease-in-out lg:transition-none"
				data-scrollnav={scrollNav}
			>
				<div className="flex justify-between h-20 z-50 w-full px-6 max-w-[1500px]">
					<LinkR
						to="/"
						onClick={toggleHome}
						className="cursor-pointer grid items-center my-6 mx-0 md:mr-6"
					>
						<img
							src={logo}
							alt="logo"
							className="w-64 items-center transition-[width] duration-500 md:w-48"
						/>
					</LinkR>
					<div
						className="flex items-center md:hidden md:mt-2 md:absolute md:top-0 md:right-0 md:transformTranslate md:text-3xl md:cursor-pointer md:text-white"
						onClick={toggle}
					>
						<FaBars className="h-5 w-5" />
					</div>
					<ul className="hidden items-center list-none text-center -mr-5 md:flex">
						<li className="h-24">
							<LinkS
								to="/welcome"
								smooth={true}
								duration={500}
								spy={true}
								offset={-100}
								className="text-white flex items-center no-underline py-0 px-4 h-full cursor-pointer hover:border-[#00ffff] hover:text-[#00ffff] hover:transition-all hover:duration-200 hover:ease-in-out"
								activeClass="border-[#00ffff] border-b-4 border-solid"
							>
								HOME{' '}
							</LinkS>
						</li>
						<li className="h-24">
							<LinkS
								to="Mint"
								smooth={true}
								duration={500}
								spy={true}
								offset={-100}
								className="text-white flex items-center no-underline py-0 px-4 h-full cursor-pointer hover:border-[#00ffff] hover:text-[#00ffff] hover:transition-all hover:duration-200 hover:ease-in-out"
								activeClass="border-[#00ffff] border-b-4 border-solid"
							>
								BUY A PRESI
							</LinkS>
						</li>
						<li className="h-24">
							<LinkS
								to="roadmap"
								smooth={true}
								duration={500}
								spy={true}
								offset={-100}
								className="text-white flex items-center no-underline py-0 px-4 h-full cursor-pointer hover:border-[#00ffff] hover:text-[#00ffff] hover:transition-all hover:duration-200 hover:ease-in-out"
								activeClass="border-[#00ffff] border-b-4 border-solid"
							>
								ROADMAP
							</LinkS>
						</li>
						{/* <li className="h-24">
							<LinkS
								to="collection"
								smooth={true}
								duration={500}
								spy={true}
								offset={-100}
								className="text-white flex items-center no-underline py-0 px-4 h-full cursor-pointer hover:border-[#00ffff] hover:text-[#00ffff] hover:transition-all hover:duration-200 hover:ease-in-out"
								activeClass="border-[#00ffff] border-b-4 border-solid"
							>
								COLLECTION
							</LinkS>
						</li> */}
						<li className="h-24">
							<LinkS
								to="team"
								smooth={true}
								duration={500}
								spy={true}
								offset={-100}
								className="text-white flex items-center no-underline py-0 px-4 h-full cursor-pointer hover:border-[#00ffff] hover:text-[#00ffff] hover:transition-all hover:duration-200 hover:ease-in-out"
								activeClass="border-[#00ffff] border-b-4 border-solid"
							>
								TEAM
							</LinkS>
						</li>
						<li className="h-24">
							<LinkS
								to="faq"
								smooth={true}
								duration={500}
								spy={true}
								offset={-100}
								className="text-white flex items-center no-underline py-0 px-4 h-full cursor-pointer hover:border-[#00ffff] hover:text-[#00ffff] hover:transition-all hover:duration-200 hover:ease-in-out"
								activeClass="border-[#00ffff] border-b-4 border-solid"
							>
								FAQ
							</LinkS>
						</li>
						{/* <li
							onMouseEnter={onMouseEnter}
							onMouseLeave={onMouseLeave}
							className="h-24"
						>
							<LinkS
								to="#"
								className="text-white flex items-center no-underline py-0 px-4 h-full cursor-pointer hover:border-[#00ffff] hover:text-[#00ffff] hover:transition-all hover:duration-200 hover:ease-in-out"
								activeClass="border-[#00ffff] border-b-4 border-solid"
							>
								MEMBERS <i className="fas fa-caret-down" />
							</LinkS>
							{dropdown && <Dropdown />}
						</li> */}
					</ul>
					<ul className="hidden items-center list-none text-center -mr-5 md:flex">
						<nav className="flex ml-6 mr-6 text-xs justify-between items-center w-36">
							<a
								href="//twitter.com/CryptoPresis"
								target="_blank"
								rel="noopener noreferrer"
								className="text-white text-lg my-0 mx-1.5 no-underline list-none transition-all duration-200 ease-in-out cursor-pointer hover:text-[#00ffff]"
							>
								<FaTwitter className="h-5 w-5" />
							</a>
							<a
								href="//instagram.com/cryptopresisnft"
								target="_blank"
								rel="noopener noreferrer"
								className="text-white text-lg mx-1.5 no-underline list-none transition-all duration-200 ease-in-out cursor-pointer hover:text-[#00ffff]"
							>
								<FaInstagram className="h-5 w-5" />
							</a>
							<a
								href="//opensea.io/collection/cryptopresisoffcial"
								target="_blank"
								rel="noopener noreferrer"
								className="text-white text-lg mx-1.5 no-underline list-none transition-all duration-200 ease-in-out cursor-pointer hover:text-[#00ffff]"
							>
								<img src={Icon1} alt="OpenSea" className="h-5 w-5" />
							</a>
							<a
								href="//rarible.com/cryptopresisofficial"
								target="_blank"
								rel="noopener noreferrer"
								className="text-white text-lg mx-1.5 no-underline list-none transition-all duration-200 ease-in-out cursor-pointer hover:text-[#00ffff]"
							>
								<img src={Icon3} alt="Rarible" className="h-5 w-5" />
							</a>
							<a
								href="//looksrare.org/collections/0x3ee15e0b8d236f7741ca5c1259fbcf1544e51621"
								target="_blank"
								rel="noopener noreferrer"
								className="text-white text-lg mx-1.5 no-underline list-none transition-all duration-200 ease-in-out cursor-pointer hover:text-[#00ffff]"
							>
								<img src={Icon2} alt="LooksRare" className="h-5 w-5" />
							</a>
						</nav>
					</ul>
				</div>
			</nav>
		</IconContext.Provider>
	);
};

export default Navbar;
