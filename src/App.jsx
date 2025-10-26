import './App.scss';

import React from "react";
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import StockInfo from "./components/StockInfo";
import DraggableDialog from "./components/DraggableDialog";
import { updatePrice } from "./actions/stockActions";
import { hideErrorDialog } from "./actions/errorDialogInfoActions";

const App = (props) => {
	return (
            <div id="AppContainer" className="container">
		{props.stock?.showErrorDialog ? <DraggableDialog /> : <StockInfo/>}
            </div>
	);
};

const mapStateToProps = (state) => {
    return {
        stock: state.stock,
    };
};

App.propTypes = {
    stock: PropTypes.shape({
        showErrorDialog: PropTypes.bool
    }),
};

export default connect(mapStateToProps, null)(App);

