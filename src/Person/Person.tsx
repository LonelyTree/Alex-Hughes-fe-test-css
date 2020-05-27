/** @jsx jsx */

import React from 'react'
import { jsx } from '@emotion/core'
import { useStyles } from './styles/styledPerson'
import { Grid } from '@material-ui/core'

import PersonCard from './PersonCard'
import { Account } from '../App'
import PersonDetails from './PersonDetails'

type Props = {
	className?: string
	accountData: Account
}

const Person: React.FC<Props> = (props) => {
	const { accountData } = props
	const classes = useStyles()

	return (
		<Grid className={classes.personContainer}>
			<Grid className={classes.person}>
				<Grid className={classes.personCardContainer}>
					<PersonCard accountData={accountData} />
				</Grid>
				<Grid className={classes.personDetailsContainer}>
					<PersonDetails accountData={accountData} />
				</Grid>
			</Grid>
		</Grid>
	)
}

export default Person
