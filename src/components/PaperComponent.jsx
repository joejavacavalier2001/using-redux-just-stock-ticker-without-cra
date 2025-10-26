import * as React from 'react';
import Paper from '@mui/material/Paper';
import Draggable from 'react-draggable';

const PaperComponent = (props) => {
	const nodeRef = React.useRef(null); // Ref for Draggable
	return (
		<Draggable
			nodeRef={nodeRef} // Attach ref to Draggable
			handle="#draggable-dialog-title" // Specifies the draggable handle
			cancel={'[class*="MuiDialogContent-root"]'} /* Prevents dragging from content area */><Paper ref={nodeRef} {...props} /></Draggable> 
      );
};
export default PaperComponent;  

