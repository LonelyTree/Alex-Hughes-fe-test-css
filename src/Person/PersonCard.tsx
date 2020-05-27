/** @jsx jsx */
import React from 'react'
import { jsx } from '@emotion/core'
import { Account } from '../App'
import { useStyles } from './styles/styledPersonCard'
import { Grid } from '@material-ui/core'
import Typography from '@material-ui/core/Typography'

type Props = {
	className?: string
	accountData: Account
}

const PersonCard: React.FC<Props> = (props) => {
	const { accountData } = props

	const classes = useStyles()

	const fullName = `${accountData.firstName} ${accountData.lastName}`

	return (
		<Grid className={classes.person}>
			<img
				className={classes.personCardAvatar}
				src={accountData.accountImage.url}
				alt={fullName}
			/>
			<Typography className={classes.link} variant='h6'>
				{fullName}
			</Typography>
			<Typography variant='body2'>
				{`${accountData.locationCity}, ${accountData.locationArea}`}
			</Typography>
		</Grid>
	)
}

export default PersonCard
