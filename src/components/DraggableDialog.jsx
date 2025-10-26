import * as React from 'react';
import {connect} from "react-redux";
import PropTypes from "prop-types";
import { updatePrice } from "../actions/stockActions";
import { hideErrorDialog } from "../actions/errorDialogInfoActions";
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import AppBar from '@mui/material/AppBar';
import PaperComponent from "./PaperComponent";

const DraggableDialog = (props) => {
      return (
          <Dialog
            open={props.stock.showErrorDialog}
            onClose={props.hideErrorDialog}
            PaperComponent={PaperComponent} // Pass the custom PaperComponent
            aria-labelledby="draggable-dialog-title"
          >
            <DialogTitle style={{ cursor: 'move' }} id="draggable-dialog-title">
	      	<AppBar>
             		<span>Error Updating Stock Price</span>
	      	</AppBar>
            </DialogTitle>
            <DialogContent>
              <DialogContentText>
	      	{props.stock.errorMessage}
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button variant="contained" onClick={props.hideErrorDialog}>
               	Ok 
              </Button>
            </DialogActions>
          </Dialog>
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

DraggableDialog.propTypes = {
    updatePrice: PropTypes.func,
    hideErrorDialog: PropTypes.func,
    stock: PropTypes.shape({
        name: PropTypes.string,
        price: PropTypes.number,
        showErrorDialog: PropTypes.bool,
        errorMessage: PropTypes.string
    }),
};

export default connect(mapStateToProps, mapDispatchToProps)(DraggableDialog);
