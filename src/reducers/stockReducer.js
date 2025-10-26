const stockReducer = (state , action) => {

    switch (action.type) {
    case "UPDATE_PRICE_PENDING":
	state = {
	    ...state,
	    stock: {...state.stock, updatePending: true}
	};
	break;
    case "UPDATE_PRICE_FULFILLED":
        state = {
            ...state,
	    stock: {...state.stock, price: action.payload, updatePending: false}
        };
        break;
    case "UPDATE_PRICE_REJECTED":
        state = {
            ...state,
	    stock: {...state.stock, showErrorDialog: true, errorMessage: action.payload.message, updatePending: false}
        };
        break;
    case "HIDE_STOCK_ERROR":
    case "HIDE_ERROR_DIALOG":
        state = {
            ...state,
	    stock: {...state.stock, showErrorDialog: false, errorMessage: ""}
        };
        break;
    default:
        state = {...state};
        break;
    }

    return state;
};

export default stockReducer;

