import React, { useState, useEffect, useCallback } from "react";
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import accounting from 'accounting';
import { updatePrice } from "../actions/stockActions";
import { hideErrorDialog } from "../actions/errorDialogInfoActions";

var StockInfo = ({updatePrice, stock}) => {
    const callSetInterval = useCallback(() => {return setInterval(updatePrice,3000);},[updatePrice]);
    const [repeatingIntervalId, setRepeatingIntervalId] = useState(callSetInterval);

	useEffect(() => {
		if (!repeatingIntervalId){
			setTimeout(() => {let newid = callSetInterval(); setRepeatingIntervalId(newid);},10);
		}
		return () => {
			clearInterval(repeatingIntervalId);
			setTimeout(() => setRepeatingIntervalId(0),10);
		};
	},[repeatingIntervalId,setRepeatingIntervalId,callSetInterval]);

    return (
        <div>
            <div className="row">
                <div className="col-xs-12">
                    <p>Stock Name: ({stock.name}):</p>
                </div>
            </div>
            <div className="row">
                <div className="col-xs-12">
                    <p>Stock Price: {accounting.formatMoney(stock.price)}</p>
                </div>
            </div>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        stock: state.stock,
    };
};


const mapDispatchToProps = (dispatch) => {
    return {
        updatePrice: () => {
            dispatch(updatePrice());
        },
        hideErrorDialog: () => {
            dispatch(hideErrorDialog());
        }
    };
};

StockInfo.propTypes = {
    updatePrice: PropTypes.func,
    hideErrorDialog: PropTypes.func,
    stock: PropTypes.shape({
        name: PropTypes.string,
        price: PropTypes.number,
        showErrorDialog: PropTypes.bool,
        errorMessage: PropTypes.string,
	updatePending: PropTypes.bool
    }),
};

export default connect(mapStateToProps, mapDispatchToProps)(StockInfo);
