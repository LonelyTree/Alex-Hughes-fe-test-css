/** @jsx jsx */

import React from 'react'
import { CssBaseline, Grid, ThemeProvider } from '@material-ui/core'
import { useStyles } from './appStyles.jsx'
import { jsx } from '@emotion/core'
import { theme } from './theme'
import Person from './Person'

export type Credit = {
	id: string
	productionType: string
	company: string
	position: string
	productionTitle: string
	year: number
}

export type Account = {
	id: string | number
	firstName: string
	lastName: string
	locationCity: string
	locationArea: string
	locationCountry: string
	accountImage: {
		id: string
		url: string
	}
	credits: Credit[]
}

const personData: Account = {
	id: '1',
	firstName: 'Alex',
	lastName: 'Williamson',
	locationCity: 'Los Angeles',
	locationArea: 'CA',
	locationCountry: 'USA',
	accountImage: {
		id: '11',
		url: 'https://placekitten.com/200/200',
	},
	credits: [
		{
			id: '11',
			productionType: 'Reality/Doc (TV)',
			company: 'YouTube',
			position: 'Camera Operator',
			productionTitle: 'Hometown Movies Vol I',
			year: 2016,
		},
		{
			id: '12',
			productionType: 'Reality/Doc (TV)',
			company: 'CineMax',
			position: 'Camera Operator',
			productionTitle: 'Hometown Movies Vol II',
			year: 2016,
		},
		{
			id: '13',
			productionType: 'Reality/Doc (TV)',
			company: 'Vimeo',
			position: 'Camera Operator',
			productionTitle: 'Hometown Movies Vol III',
			year: 2017,
		},
		{
			id: '14',
			productionType: 'Reality/Doc (TV)',
			company: 'Netflix',
			position: 'Camera Operator',
			productionTitle: 'Hometown Movies Vol IV',
			year: 2017,
		},
		{
			id: '15',
			productionType: 'Reality/Doc (TV)',
			company: 'Netflix',
			position: 'Camera Operator',
			productionTitle: 'Hometown Movies Vol V',
			year: 2018,
		},
	],
}

const App: React.FC<{}> = () => {
	const classes = useStyles()

	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<Grid className={classes.container}>
				<Grid className={classes.inner}>
					<Person accountData={personData} />
				</Grid>
			</Grid>
		</ThemeProvider>
	)
}

export default App
