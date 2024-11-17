"use client";
import { Person } from '@/models';
import { addFavorites } from '@/redux/states';
import { AppStore } from '@/redux/store';
import { Checkbox } from '@mui/material';
import { DataGrid, GridRenderCellParams } from '@mui/x-data-grid';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';

export type PeopleTableProps = {}

const PeopleTable: React.FC<PeopleTableProps>  = ({}) => {
	const [ selectedPeople, setSelectedPeople ] = useState<Person[]>([]);
	const statePeople = useSelector((store: AppStore) => store.people);
	const favoritePeople = useSelector((store: AppStore) => store.favorites);
	const findPerson = (person: Person) => !!favoritePeople.find(p => p.id === person.id);
	const filterPerson = (person: Person) => favoritePeople.filter(p => p.id !== person.id);
	const dispatch = useDispatch();

	const handleChange = (person: Person) => {
		const filteredPeople = findPerson(person) ? filterPerson(person) : [...selectedPeople, person];
		dispatch(addFavorites(filteredPeople))
		setSelectedPeople(filteredPeople);
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
				<Checkbox size='small' checked={findPerson(params.row)} onChange={() => handleChange(params.row)}/>
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

	useEffect(() => {
		setSelectedPeople(favoritePeople)
	}, [favoritePeople])

	return (
		<DataGrid
			rows={statePeople}
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

export const PeopleTableStl = styled.div``;

export default PeopleTable;
