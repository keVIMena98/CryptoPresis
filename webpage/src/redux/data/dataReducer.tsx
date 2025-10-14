interface DataState {
	loading: boolean;
	totalSupply: number; // Replace 'number' with the actual type returned by your smart contract
	cost: number; // Replace 'number' with the actual type if needed
	error: boolean;
	errorMsg: string;
}

interface CheckDataRequestAction {
	type: 'CHECK_DATA_REQUEST';
}

interface CheckDataSuccessAction {
	type: 'CHECK_DATA_SUCCESS';
	payload: {
		totalSupply: number; // Replace 'number' with the actual type returned by your smart contract
		// cost: number; // Uncomment and replace 'number' with the actual type if needed
	};
}

interface CheckDataFailedAction {
	type: 'CHECK_DATA_FAILED';
	payload: string;
}

type DataAction =
	| CheckDataRequestAction
	| CheckDataSuccessAction
	| CheckDataFailedAction;

const initialState: DataState = {
	loading: false,
	totalSupply: 0,
	cost: 0,
	error: false,
	errorMsg: '',
};

const dataReducer = (
	state: DataState = initialState,
	action: DataAction
): DataState => {
	switch (action.type) {
		case 'CHECK_DATA_REQUEST':
			return {
				...state,
				loading: true,
				error: false,
				errorMsg: '',
			};
		case 'CHECK_DATA_SUCCESS':
			return {
				...state,
				loading: false,
				totalSupply: action.payload.totalSupply,
				// cost: action.payload.cost,
				error: false,
				errorMsg: '',
			};
		case 'CHECK_DATA_FAILED':
			return {
				...initialState,
				loading: false,
				error: true,
				errorMsg: action.payload,
			};
		default:
			return state;
	}
};

export default dataReducer;
