import { Web3ReactProvider } from "@web3-react/core";

function getLibrary(provider) {
  return new Web3Provider(provider, "any");
}

export default function ({ Component, pageProps }) {
  return (
    <Web3ReactProvider getLibrary={getLibrary}>
      <Component {...pageProps} />
    </Web3ReactProvider>
  );
}