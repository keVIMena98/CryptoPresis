// log
import store from '../store';
import { Dispatch } from 'redux';

const fetchDataRequest = () => {
	return {
		type: 'CHECK_DATA_REQUEST',
	};
};

interface DataPayload {
	totalSupply: number;
	// other properties if needed
}

const fetchDataSuccess = (payload: DataPayload) => {
	return {
		type: 'CHECK_DATA_SUCCESS',
		payload: payload,
	};
};

const fetchDataFailed = (payload: string) => {
	return {
		type: 'CHECK_DATA_FAILED',
		payload: payload,
	};
};

export const fetchData = () => {
	return async (dispatch: Dispatch) => {
		dispatch(fetchDataRequest());
		try {
			const blockchain = store.getState().blockchain;
			if (!blockchain || !blockchain.smartContract) {
				throw new Error('Smart contract is not initialized.');
			}
			const totalSupply = await blockchain.smartContract.methods
				.totalSupply()
				.call();
			const totalSupplyNumber = Number(totalSupply); // Convert to number

			dispatch(
				fetchDataSuccess({
					totalSupply: totalSupplyNumber,
				})
			);
		} catch (err) {
			console.log(err);
			dispatch(fetchDataFailed('Could not load data from contract.'));
		}
	};
};
``;
