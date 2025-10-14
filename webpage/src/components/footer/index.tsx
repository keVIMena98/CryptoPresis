import { FaTwitter, FaInstagram } from 'react-icons/fa';
import { animateScroll as scroll } from 'react-scroll';
import { Link as LinkR } from 'react-router-dom';
import { Link as LinkS } from 'react-scroll';
import logo from '../../assets/images/logo.png';
import os from '../../assets/images/os-svg.svg';
import rarible from '../../assets/images/rarible-svg.png';
import looksrare from '../../assets/images/looksrare-svg.svg';

const Footer = () => {
	const toggleHome = () => {
		scroll.scrollToTop();
	};

	return (
		<footer className="bg-[#009999]">
			<div className="py-12 px-6 flex flex-col justify-center items-center w-full max-w-[1500px] m-auto">
				<div className="flex justify-center sm:pt-8">
					<div className="flex max-w-[1500px] sm:flex-col">
						{/* First column */}
						<div className="flex flex-col items-start m-4 text-right w-[200px] box-border text-white sm:m-0 sm:p-2 sm:w-full">
							<h1 className="text-base mb-4">Home</h1>
							<LinkS
								to="#"
								className="text-white text-left no-underline mb-2 text-sm hover:text-[#00ffff] transition-colors duration-300 ease-out"
							>
								Buy A Presi
							</LinkS>
							<LinkS
								to="#"
								className="text-white text-left no-underline mb-2 text-sm hover:text-[#00ffff] transition-colors duration-300 ease-out"
							>
								Roadmap
							</LinkS>
							<LinkS
								to="#"
								className="text-white text-left no-underline mb-2 text-sm hover:text-[#00ffff] transition-colors duration-300 ease-out"
							>
								Collection
							</LinkS>
							<LinkS
								to="#"
								className="text-white text-left no-underline mb-2 text-sm hover:text-[#00ffff] transition-colors duration-300 ease-out"
							>
								Team
							</LinkS>
							<LinkS
								to="#"
								className="text-white text-left no-underline mb-2 text-sm hover:text-[#00ffff] transition-colors duration-300 ease-out"
							>
								FAQ
							</LinkS>
						</div>
					</div>
					{/* Second column */}
					<div className="flex max-w-[1500px] sm:flex-col">
						<div className="flex flex-col items-start m-4 text-right w-[200px] box-border text-white sm:m-0 sm:p-2 sm:w-full">
							<h1 className="text-base mb-4">Charity</h1>
							<LinkS
								to="#"
								className="text-white text-left no-underline mb-2 text-sm hover:text-[#00ffff] transition-colors duration-300 ease-out"
							>
								Bitcoin Beach
							</LinkS>
							<LinkS
								to="#"
								className="text-white text-left no-underline mb-2 text-sm hover:text-[#00ffff] transition-colors duration-300 ease-out"
							>
								Crypto Education
							</LinkS>
							<LinkS
								to="#"
								className="text-white text-left no-underline mb-2 text-sm hover:text-[#00ffff] transition-colors duration-300 ease-out"
							>
								Local Artists
							</LinkS>
							<LinkS
								to="#"
								className="text-white text-left no-underline mb-2 text-sm hover:text-[#00ffff] transition-colors duration-300 ease-out"
							>
								Community
							</LinkS>
						</div>
					</div>
					{/* Third column */}
					<div className="flex max-w-[1500px] sm:flex-col">
						<div className="flex flex-col items-start m-4 text-right w-[200px] box-border text-white sm:m-0 sm:p-2 sm:w-full">
							<h1 className="text-base mb-4">Legal</h1>
							<LinkS
								to="#"
								className="text-white text-left no-underline mb-2 text-sm hover:text-[#00ffff] transition-colors duration-300 ease-out"
							>
								Terms & Conditions
							</LinkS>
						</div>
					</div>
				</div>
				{/* Social media and logo section */}
				<section className="w-full">
					<div className="flex justify-between items-center w-full mt-[40px] mx-auto max-w-[1500px] mb-0 md:flex-row text-left">
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
						<small className="text-white text-[6px] text-center mx-12 my-0 mb-3 md:mb-0 xs:text-[10px]">
							Made with{' '}
							<span role="img" aria-label="Heart">
								💖
							</span>{' '}
							and a whole lot of
							<span role="img" aria-label="Heart">
								{' '}
								🍷
							</span>
							. Simlabs © {new Date().getUTCFullYear()} All Rights Reserved.
						</small>
						<ul className="hidden items-center list-none text-center -mr-5 md:flex">
							<div className="flex ml-6 mr-6 text-xs justify-between items-center w-36">
								<a
									href="https://twitter.com/CryptoPresis"
									target="_blank"
									rel="noopener noreferrer"
									aria-label="Twitter"
									className="text-white text-lg my-0 mx-1.5 no-underline list-none transition-all duration-200 ease-in-out cursor-pointer hover:text-[#00ffff]"
								>
									<FaTwitter className="h-5 w-5" />
								</a>

								<a
									href="https://instagram.com/cryptopresisnft"
									target="_blank"
									rel="noopener noreferrer"
									aria-label="Instagram"
									className="text-white text-lg my-0 mx-1.5 no-underline list-none transition-all duration-200 ease-in-out cursor-pointer hover:text-[#00ffff]"
								>
									<FaInstagram className="h-5 w-5" />
								</a>

								<a
									href="https://opensea.io/collection/cryptopresisoffcial"
									target="_blank"
									rel="noopener noreferrer"
									aria-label="OpenSea"
									className="text-white text-lg my-0 mx-1.5 no-underline list-none transition-all duration-200 ease-in-out cursor-pointer hover:text-[#00ffff]"
								>
									<img src={os} alt="OpenSea" className="h-5 w-5" />
								</a>

								<a
									href="https://rarible.com/cryptopresisofficial"
									target="_blank"
									rel="noopener noreferrer"
									aria-label="Rarible"
									className="text-white text-lg my-0 mx-1.5 no-underline list-none transition-all duration-200 ease-in-out cursor-pointer hover:text-[#00ffff]"
								>
									<img src={rarible} alt="Rarible" className="h-5 w-5" />
								</a>

								<a
									href="https://looksrare.org/collections/0x3ee15e0b8d236f7741ca5c1259fbcf1544e51621"
									target="_blank"
									rel="noopener noreferrer"
									aria-label="LooksRare"
									className="text-white text-lg my-0 mx-1.5 no-underline list-none transition-all duration-200 ease-in-out cursor-pointer hover:text-[#00ffff]"
								>
									<img src={looksrare} alt="LooksRare" className="h-5 w-5" />
								</a>
							</div>
						</ul>
					</div>
				</section>
			</div>
		</footer>
	);
};

export default Footer;
