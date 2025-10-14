const mintSection = ({ LightBg }: { LightBg?: boolean }) => (
	<main
		className={`text-white ${
			LightBg ? 'bg-f9f9f9' : 'bg-010606'
		} p-48 md:p-0 md:px-24`}
	>
		<iframe
			className="max-w-1000 grid z-10 w-full mx-auto justify-center"
			src="https://cloudflare-ipfs.com/ipfs/bafybeihz5jer6ad75ku3dh6mj4rlufrtiydv5mkoqurm55nv2uckmfiuya?contract=0xB7D67be516E80f05259CDdb9efA3523F72E2F912&chainId=137&tokenId=0"
			width="100%"
			height="600px"
			frameBorder="0"
		></iframe>
	</main>
);

export default mintSection;
