"use client";
import { Person } from '@/models';
import { removeFavorites } from '@/redux/states';
import { AppStore } from '@/redux/store';
import { Button } from '@mui/material';
import { GridRenderCellParams, DataGrid } from '@mui/x-data-grid';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

export type FavoriteTableProps = {}

const FavoriteTable: React.FC<FavoriteTableProps>  = ({}) => {
	const stateFavorites = useSelector((store: AppStore) => store.favorites);
	const dispatch = useDispatch();

	const handleClick = (person: Person) => {
		dispatch(removeFavorites(person))
	};

	const columns = [
		{
			field: 'actions',
			type: 'actions',
			sortable: false,
			headerName: '',
			flex: 1,
			width: 50,
			renderCell: (params: GridRenderCellParams) => <>{
				<Button variant='outline' onClick={() => handleClick(params.row)}>x</Button>
			}</>
		},
		{
			field: 'name',
			headerName: 'Name',
			flex: 1,
			minWidth: 150,
			renderCell: (params: GridRenderCellParams) => <>{params.value}</>
		},
		{
			field: 'category',
			headerName: 'Categories',
			flex: 1,
			renderCell: (params: GridRenderCellParams) => <>{params.value}</>
		},
		{
			field: 'company',
			headerName: 'Company',
			flex: 1,
			renderCell: (params: GridRenderCellParams) => <>{params.value}</>
		},
		{
			field: 'levelOfHappiness',
			headerName: 'levelOfHappiness',
			flex: 1,
			renderCell: (params: GridRenderCellParams) => <>{params.value}</>
		}
	];
	console.log('stateFavorites :>> ', stateFavorites);
	return (
 		<DataGrid
			rows={stateFavorites.length > 0 ? stateFavorites : []}
			columns={columns}
			disableColumnSelector
			disableRowSelectionOnClick
			autoHeight
			pageSizeOptions={[5,100]}
			initialState={{
				pagination: {
					paginationModel: { pageSize: 5, page: 0 },
				},
			}}
			getRowId={(row: any) => row.id}
		/>
	);
};

export default FavoriteTable;
