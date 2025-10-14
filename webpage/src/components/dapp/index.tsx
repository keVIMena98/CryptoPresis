import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { connect } from '../../redux/blockchain/blockchainActions.js';
import { fetchData } from '../../redux/data/dataActions.js';

interface DappProps {
	flex?: string;
	fd?: string; // Flex Direction
	jc?: string; // Justify Content
	ai?: string;
	test?: string;
	image?: string;
}

function Dapp({ flex, fd, jc, ai, test, image }: DappProps) {
	const dispatch = useDispatch();
	const blockchain = useSelector((state) => state.blockchain);
	const data = useSelector((state) => state.data);
	const [claimingNft, setClaimingNft] = useState(false);
	const [feedback, setFeedback] = useState(`Click buy to mint your NFT.`);
	const [mintAmount, setMintAmount] = useState(1);
	const [CONFIG, SET_CONFIG] = useState({
		CONTRACT_ADDRESS: '',
		SCAN_LINK: '',
		NETWORK: {
			NAME: '',
			SYMBOL: '',
			ID: 0,
		},
		NFT_NAME: '',
		SYMBOL: '',
		MAX_SUPPLY: 1,
		WEI_COST: 0,
		DISPLAY_COST: 0,
		GAS_LIMIT: 0,
		MARKETPLACE: '',
		MARKETPLACE_LINK: '',
		SHOW_BACKGROUND: false,
	});

	const claimNFTs = () => {
		let cost = CONFIG.WEI_COST;
		let gasLimit = CONFIG.GAS_LIMIT;
		let totalCostWei = String(cost * mintAmount);
		let totalGasLimit = String(gasLimit * mintAmount);
		console.log('Cost: ', totalCostWei);
		console.log('Gas limit: ', totalGasLimit);
		setFeedback(`Minting your ${CONFIG.NFT_NAME}...`);
		setClaimingNft(true);
		blockchain.smartContract.methods
			.mint(mintAmount)
			.send({
				gasLimit: String(totalGasLimit),
				to: CONFIG.CONTRACT_ADDRESS,
				from: blockchain.account,
				value: totalCostWei,
			})
			.once('error', (err) => {
				console.log(err);
				setFeedback('Sorry, something went wrong please try again later.');
				setClaimingNft(false);
			})
			.then((receipt) => {
				console.log(receipt);
				setFeedback(
					`WOW, the ${CONFIG.NFT_NAME} is yours! go visit Rarible.com to view it.`
				);
				setClaimingNft(false);
				dispatch(fetchData(blockchain.account));
			});
	};

	const decrementMintAmount = () => {
		let newMintAmount = mintAmount - 1;
		if (newMintAmount < 1) {
			newMintAmount = 1;
		}
		setMintAmount(newMintAmount);
	};

	const incrementMintAmount = () => {
		let newMintAmount = mintAmount + 1;
		if (newMintAmount > 5) {
			newMintAmount = 5;
		}
		setMintAmount(newMintAmount);
	};

	const getData = () => {
		if (blockchain.account !== '' && blockchain.smartContract !== null) {
			dispatch(fetchData(blockchain.account));
		}
	};

	const getConfig = async () => {
		const configResponse = await fetch('/config/config.json', {
			headers: {
				'Content-Type': 'application/json',
				Accept: 'application/json',
			},
		});
		const config = await configResponse.json();
		SET_CONFIG(config);
	};

	useEffect(() => {
		getConfig();
	}, []);

	// eslint-disable-next-line
	useEffect(() => {
		getData();
	}, [blockchain.account]);

	return (
		<div
			//Container
			id="Mint"
			className={`flex w-full bg-cover bg-center ${
				flex ? `flex-${flex}` : 'flex-0'
			} ${fd ? `flex-${fd}` : 'flex-col'} ${
				jc ? `justify-${jc}` : 'justify-start'
			} ${ai ? `items-${ai}` : 'items-start'} ${test ? 'bg-pink-500' : ''} ${
				image ? `bg-[url(${image})]` : ''
			} p-12 bg-black items-center`}
		>
			<h1 className="text-white text-xs my-6 italic leading-snug font-semibold sm:text-2xl">
				BUY A PRESI
			</h1>
			<div //ResponsiveWrapper
				className="flex flex-1 flex-col justify-stretched items-stretched w-full max-w-[1500px] md:flex-row"
			>
				<div //Container
					className={`flex w-full bg-cover bg-center ${
						flex ? `flex-${flex}` : 'flex-0'
					} ${fd ? `flex-${fd}` : 'flex-col'} ${
						jc ? `justify-${jc}` : 'justify-start'
					} ${ai ? `items-${ai}` : 'items-start'} ${
						test ? 'bg-pink-500' : ''
					} ${
						image ? `bg-[url(${image})]` : ''
					} justify-center items-center bg-black p-12 rounded-3xl border-4 border-dashed border-[#00ffff] shadow-md`}
				>
					<p className="text-white leading-6 text-center text-lg font-bold">
						<p className="text-white text-base font-bold text-center leading-6">
							LIMITED COLLECTION
						</p>
						<div className="h-2 w-2" />
						{CONFIG.MAX_SUPPLY - data.totalSupply} REMAINING
						{/*{data.totalSupply} / {CONFIG.MAX_SUPPLY}*/}
					</p>
					<div className="text-white text-xs leading-6 text-center">
						connect wallet to view remaining supply.
					</div>
					<div className="h-2 w-2" />
					<div className="text-white text-xs leading-6 text-center">
						<a
							target="_blank"
							href={CONFIG.SCAN_LINK}
							className="text-white no-underline"
						>
							{/*truncate(CONFIG.CONTRACT_ADDRESS, 15)*/}
							{(CONFIG.CONTRACT_ADDRESS, 'Etherscan')}
						</a>
					</div>
					<div className="h-4 w-4" />
					{Number(data.totalSupply) >= CONFIG.MAX_SUPPLY ? (
						<>
							<p className="text-white text-base font-bold text-center leading-6">
								The sale has ended.
							</p>
							<p className="text-white text-xs leading-6 text-center">
								You can still find {CONFIG.NFT_NAME} on{' '}
							</p>
							<div className="h-4 w-4" />
							<a
								className="text-white no-underline"
								target="_blank"
								href={CONFIG.MARKETPLACE_LINK}
							>
								{CONFIG.MARKETPLACE}
							</a>
						</>
					) : (
						<>
							<p className="text-white text-base font-bold text-center leading-6">
								1 {CONFIG.NFT_NAME} costs {CONFIG.DISPLAY_COST}{' '}
								{CONFIG.NETWORK.SYMBOL}.
							</p>
							<div className="h-2 w-2" />
							<p className="text-white text-xs leading-6 text-center">
								Excluding gas fees.
							</p>
							<div className="h-4 w-4" />
							{blockchain.account === '' ||
							blockchain.smartContract === null ? (
								<div
									className={`flex w-full bg-cover bg-center ${
										flex ? `flex-${flex}` : 'flex-0'
									} ${fd ? `flex-${fd}` : 'flex-col'} ${
										jc ? `justify-${jc}` : 'justify-start'
									} ${ai ? `items-${ai}` : 'items-start'} ${
										test ? 'bg-pink-500' : ''
									} ${
										image ? `bg-[url(${image})]` : ''
									} p-4 bg-black items-center`}
								>
									<p className="text-white text-xs leading-6 text-center">
										Connect to the {CONFIG.NETWORK.NAME} network to buy
										CryptoPresis
									</p>
									<div className="h-2 w-2" />
									<button
										className="p-2 rounded-[50px] border-none bg-[#00ffff] font-bold text-black w-[100px] cursor-pointer shadow-md hover:shadow-none active:shadow-none"
										onClick={(e) => {
											e.preventDefault();
											console.log('Button Clicked');
											dispatch(connect());
											getData();
										}}
									>
										BUY
									</button>
									{blockchain.errorMsg !== '' ? (
										<>
											<div className="h-4 w-4" />
											<p className="text-white text-xs leading-6 text-center">
												{blockchain.errorMsg}
											</p>
										</>
									) : null}
								</div>
							) : (
								<>
									<p className="text-white text-xs leading-6 text-center">
										{feedback}
									</p>
									<div className="h-6 w-6" />
									<div
										className={`flex w-full bg-cover bg-center ${
											flex ? `flex-${flex}` : 'flex-0'
										} ${fd ? `flex-${fd}` : 'flex-col'} ${
											jc ? `justify-${jc}` : 'justify-start'
										} ${ai ? `items-${ai}` : 'items-start'} ${
											test ? 'bg-pink-500' : ''
										} ${
											image ? `bg-[url(${image})]` : ''
										} p-12 bg-black items-center`}
									>
										<button
											className="p-2 rounded-[50px] border-none bg-[#00ffff] font-bold text-black w-[100px] cursor-pointer shadow-md hover:shadow-none active:shadow-none"
											disabled={claimingNft ? 1 : 0}
											onClick={(e) => {
												e.preventDefault();
												decrementMintAmount();
											}}
										>
											-
										</button>
										<div className="h-6 w-6" />
										<p className="text-white text-center text-xl">
											{mintAmount}
										</p>
										<div className="w-8" />
										<button
											className="p-2 rounded-[50px] border-none bg-[#00ffff] font-bold text-black w-[100px] cursor-pointer shadow-md hover:shadow-none active:shadow-none"
											disabled={claimingNft ? 1 : 0}
											onClick={(e) => {
												e.preventDefault();
												incrementMintAmount();
											}}
										>
											+
										</button>
									</div>
									<div className="h-6 w-6" />
									<div
										className={`flex w-full bg-cover bg-center ${
											flex ? `flex-${flex}` : 'flex-0'
										} ${fd ? `flex-${fd}` : 'flex-col'} ${
											jc ? `justify-${jc}` : 'justify-start'
										} ${ai ? `items-${ai}` : 'items-start'} ${
											test ? 'bg-pink-500' : ''
										} ${
											image ? `bg-[url(${image})]` : ''
										} p-12 bg-black items-center`}
									>
										<button
											className="p-2 rounded-[50px] border-none bg-[#00ffff] font-bold text-black w-[100px] cursor-pointer shadow-md hover:shadow-none active:shadow-none"
											disabled={claimingNft ? 1 : 0}
											onClick={(e) => {
												e.preventDefault();
												claimNFTs();
												getData();
											}}
										>
											{claimingNft ? 'BUSY' : 'BUY'}
										</button>
									</div>
								</>
							)}
						</>
					)}
					{/* <div className="h-6 w-6" /> */}
				</div>
			</div>
		</div>
	);
}

export default Dapp;
