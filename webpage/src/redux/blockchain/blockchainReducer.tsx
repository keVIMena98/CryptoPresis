/* eslint-disable no-mixed-spaces-and-tabs */
import Web3EthContract from 'web3-eth-contract';
import Web3 from 'web3';

type Abi = {
	constant?: boolean;
	inputs?: { name: string; type: string }[];
	name: string; // made non-optional
	outputs?: { name: string; type: string }[];
	payable?: boolean;
	stateMutability?: 'nonpayable' | 'payable' | 'pure' | 'view';
	type: 'function' | 'constructor' | 'event' | 'fallback' | 'receive'; // made non-optional
}[];

export interface BlockchainState {
	loading: boolean;
	account: string | null;
	smartContract: Web3EthContract<Abi> | null;
	web3: Web3 | null;
	errorMsg: string;
}

const initialState: BlockchainState = {
	loading: false,
	account: null,
	smartContract: null,
	web3: null,
	errorMsg: '',
};

type BlockchainAction =
	| { type: 'CONNECTION_REQUEST' }
	| {
			type: 'CONNECTION_SUCCESS';
			payload: {
				account: string;
				smartContract: Web3EthContract<Abi>;
				web3: Web3;
			};
	  }
	| { type: 'CONNECTION_FAILED'; payload: string }
	| { type: 'UPDATE_ACCOUNT'; payload: { account: string } };

const blockchainReducer = (
	state: BlockchainState = initialState,
	action: BlockchainAction
): BlockchainState => {
	switch (action.type) {
		case 'CONNECTION_REQUEST':
			return {
				...initialState,
				loading: true,
			};
		case 'CONNECTION_SUCCESS':
			return {
				...state,
				loading: false,
				account: action.payload.account,
				smartContract: action.payload.smartContract,
				web3: action.payload.web3,
			};
		case 'CONNECTION_FAILED':
			return {
				...initialState,
				loading: false,
				errorMsg: action.payload,
			};
		case 'UPDATE_ACCOUNT':
			return {
				...state,
				account: action.payload.account,
			};
		default:
			return state;
	}
};

export default blockchainReducer;
