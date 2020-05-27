/** @jsx jsx */
import React from 'react'
import { jsx } from '@emotion/core'
import Button from '@material-ui/core/Button'
import { Account } from '../App'
import PersonCredit from './PersonCredit'
import { Grid } from '@material-ui/core'
import { useStyles } from './styles/styledPersonDetails'

type Props = {
	className?: string
	accountData: Account
	maxCredits?: number
}

const PersonDetails: React.FC<Props> = (props) => {
	const { accountData, maxCredits = 3 } = props

	const classes = useStyles()

	return (
		<Grid className={classes.personDetails}>
			{accountData.credits.slice(0, maxCredits).map((credit) => {
				return <PersonCredit key={credit.id} creditData={credit} />
			})}
			<Button className={classes.contact} color='primary'>
				Contact this person
			</Button>
		</Grid>
	)
}

export default PersonDetails
