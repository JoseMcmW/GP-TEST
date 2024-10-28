"use client";
import React from 'react';
import { DataGrid } from '@mui/x-data-grid';

export type HomeProps = {
	// types...
}

const Home: React.FC<HomeProps>  = () => {
	return (
		<div>
 			<DataGrid
				disableColumnSelector
				disableRowSelectionOnClick
				autoHeight
			/>
 		</div>
	);
};

export default Home;
