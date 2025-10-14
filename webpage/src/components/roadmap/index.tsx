const Roadmap = () => {
	return (
		<div
			className="text-white bg-black py-12 px-6 md:pt-12 md:pr-6 md:pb-0 md:pl-6 md:h-full md:max-h-[3000px] ms:py-12 ms:px-6 ms:h-full ms:max-h-[6000px]"
			id="roadmap"
		>
			<div className="grid z-[1] h-full max-h-[2000px] w-full max-w-[1500px] mr-auto ml-auto justify-center md:max-h-[3000px]">
				<div className="flex pt-6 pb-6 w-full justify-center">
					<h1 className="text-lg italic leading-[1.1] font-semibold text-white sm:text-lg">
						ROADMAP 1.0
					</h1>
				</div>
				<div className="max-w-[1500px] m-auto border-l-4 border-solid border-white pl-6">
					<div className="shadow-md p-6 mx-0 my-12 leading-relaxed cursor-pointer relative transition-all duration-500 beforeElement element hover:shadow-lg hover:before:bg-[#00ffff] md:max-w-full md:ml-0">
						<h2 className="text-lg m-0 font-bold text-white">
							Sim Labs Genesis Collection
						</h2>
						<div className="max-w-[800px] mt-6">
							<p className="mb-6 text-justify text-sm leading-6 text-white xs:text-xs">
								Holders of CryptoPresis will be guaranteed whitelist into all
								future projects developed by the creators of CryptoPresis, Sim
								Labs, and one CryptoPresis owned will equal to one whitelist!
							</p>
						</div>
					</div>
					<div className="shadow-md p-6 mx-0 my-12 leading-relaxed cursor-pointer relative transition-all duration-500 beforeElement element hover:shadow-lg hover:before:bg-[#00ffff] md:max-w-full md:ml-0">
						<h2 className="text-lg m-0 font-bold text-white">
							Drop Series from Local Artist
						</h2>
						<div className="max-w-[800px] mt-6">
							<p className="mb-6 text-justify text-sm leading-6 text-white sm:text-">
								CryptoPresis holders will benefit from a series of Twitter
								background drops in collaboration with digital artists from El
								Salvador. The artwork from each artist will provide some form of
								future utility for holders as these local artists continue their
								artistic journey in the NFT space.
							</p>
						</div>
					</div>
					<div className="shadow-md p-6 mx-0 my-12 leading-relaxed cursor-pointer relative transition-all duration-500 beforeElement element hover:shadow-lg hover:before:bg-[#00ffff] md:max-w-full md:ml-0">
						<h2 className="text-lg m-0 font-bold text-white">
							Official Merch Drop
						</h2>
						<div className="max-w-[800px] mt-6">
							<p className="mb-6 text-justify text-sm leading-6 text-white xs:text-xs">
								Launch of the member-exclusive CryptoPresis Merch Store,
								featuring limited edition tee, hoodies and other goodies. We
								will conduct seasoned drops for CryptoPresis holders to add to
								their collection.
							</p>
						</div>
					</div>
					<div className="shadow-md p-6 mx-0 my-12 leading-relaxed cursor-pointer relative transition-all duration-500 beforeElement element hover:shadow-lg hover:before:bg-[#00ffff] md:max-w-full md:ml-0">
						<h2 className="text-lg m-0 font-bold text-white">
							Gift CryptoPresis #1 to Nayib Bukele
						</h2>
						<div className="max-w-[800px] mt-6">
							<p className="mb-6 text-justify text-sm leading-6 text-white xs:text-xs">
								Although this is not a promise and has never been the sole
								purpose of CryptoPresis, we decided to still pursue gifting the
								president of El Salvador his personalized NFT. As the project
								continues to innovate, in due time we will get recognized.
							</p>
						</div>
					</div>
					<div className="shadow-md p-6 mx-0 my-12 leading-relaxed cursor-pointer relative transition-all duration-500 beforeElement element hover:shadow-lg hover:before:bg-[#00ffff] md:max-w-full md:ml-0">
						<h2 className="text-lg m-0 font-bold text-white">
							Donate to Charitable Organizations
						</h2>
						<div className="max-w-[800px] mt-6">
							<p className="mb-6 text-justify text-sm leading-6 text-white xs:text-xs">
								CryptoPresis will donate 10% to charitable organizations in El
								Salvador with the purpose of providing a launch for local
								digital artists to become educated in the NFT space and host
								numerous events throughout the year.
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Roadmap;
