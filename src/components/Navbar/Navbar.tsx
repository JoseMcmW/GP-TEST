"use client";
import { AppBar, Button, Toolbar, Typography } from '@mui/material';
import React from 'react';
import { CustomDialog } from '../CustomDialog';
import { FavoriteTable } from './FavoriteTable.ts';
import { dialogOpenSubject$ } from '../CustomDialog/CustomDialog.tsx';
import { AppStore } from '@/redux/store.ts';
import { useSelector } from 'react-redux';

export type NavbarProps = {
	// types...
}

const Navbar: React.FC<NavbarProps>  = () => {
	useSelector((store: AppStore) => store.favorites);
	const handleClick = () => {
		dialogOpenSubject$.setSubject = true
	};

	return (
		<>
			<CustomDialog>
				<FavoriteTable />
			</CustomDialog>
			<AppBar position="fixed">
				<Toolbar>
					<Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
						Gentleman Programming React Test
					</Typography>
					<Button variant='outline' onClick={handleClick}>Open Favorites</Button>
				</Toolbar>
			</AppBar>
		</>

	);
};

export default Navbar;
