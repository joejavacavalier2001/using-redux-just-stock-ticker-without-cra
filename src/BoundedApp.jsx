"use client";
import React from "react";
import { ErrorBoundary } from "react-error-boundary";
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import App from "./App";

var BoundedApp = () => {  
	return (
		<ErrorBoundary fallback={<div>Something went wrong</div>}>
			<DndProvider backend={HTML5Backend}>
  				<App />
			</DndProvider>
		</ErrorBoundary>
	);
};

export default BoundedApp;
