// constants
import Web3EthContract from 'web3-eth-contract';
import Web3 from 'web3';
import { Dispatch } from 'redux';
// log
import { fetchData } from '../data/dataActions';

// Add this at the top of your file or in a type declaration file (e.g., `global.d.ts`)
declare global {
	interface Window {
		ethereum: {
			isMetaMask?: boolean;
			request?: (...args: any[]) => Promise<any>;
			on?: (...args: any[]) => void;
		};
	}
}

const connectRequest = () => {
	return {
		type: 'CONNECTION_REQUEST',
	};
};

const connectSuccess = (payload: unknown) => {
	return {
		type: 'CONNECTION_SUCCESS',
		payload: payload,
	};
};

const connectFailed = (payload: unknown) => {
	return {
		type: 'CONNECTION_FAILED',
		payload: payload,
	};
};

const updateAccountRequest = (payload: unknown) => {
	return {
		type: 'UPDATE_ACCOUNT',
		payload: payload,
	};
};

export const connect = () => {
	return async (dispatch: Dispatch) => {
		dispatch(connectRequest());
		const abiResponse = await fetch('/config/abi.json', {
			headers: {
				'Content-Type': 'application/json',
				Accept: 'application/json',
			},
		});
		const abi = await abiResponse.json();
		const configResponse = await fetch('/config/config.json', {
			headers: {
				'Content-Type': 'application/json',
				Accept: 'application/json',
			},
		});
		const CONFIG = await configResponse.json();
		const { ethereum } = window;
		const metamaskIsInstalled = ethereum && ethereum.isMetaMask;
		if (metamaskIsInstalled) {
			const web3 = new Web3(ethereum as any);
			try {
				const accounts = await ethereum.request({
					method: 'eth_requestAccounts',
				});
				const networkId = await ethereum.request({
					method: 'net_version',
				});
				// eslint-disable-next-line
				if (networkId == CONFIG.NETWORK.ID) {
					const SmartContractObj = new Web3EthContract(
						abi,
						CONFIG.CONTRACT_ADDRESS
					);
					dispatch(
						connectSuccess({
							account: accounts[0],
							smartContract: SmartContractObj,
							web3: web3,
						})
					);
					// Add listeners start
					ethereum.on('accountsChanged', (accounts) => {
						dispatch(updateAccount(accounts[0]));
					});
					ethereum.on('chainChanged', () => {
						window.location.reload();
					});
					// Add listeners end
				} else {
					dispatch(
						connectFailed(
							`Change network to the ${CONFIG.NETWORK.NAME} Mainnet.`
						)
					);
				}
			} catch (err) {
				dispatch(connectFailed('Something went wrong.'));
			}
		} else {
			dispatch(connectFailed('Install Metamask.'));
		}
	};
};

export const updateAccount = (account) => {
	return async (dispatch: Dispatch) => {
		dispatch(updateAccountRequest({ account: account }));
		dispatch(fetchData(account));
	};
};
