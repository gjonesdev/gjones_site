const initialState = {
	placeholder: 0
};

const rootReducer = (state = initialState, action: any) => {
	switch (action.type) {
		case "placeholder (should be function)":
			return {
				...state,
				placeholder: state.placeholder + 1
			};
		default:
			return state
	}
};

export default rootReducer