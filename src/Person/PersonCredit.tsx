/** @jsx jsx */
import React from 'react'
import { jsx } from '@emotion/core'
import cn from 'classnames'
import { Grid } from '@material-ui/core'
import Typography from '@material-ui/core/Typography'
import { useStyles } from './styles/styledPersonCredit'
import { Credit } from '../App'

type Props = {
	className?: string
	creditData: Credit
}

const PersonCredit: React.FC<Props> = (props) => {
	const { creditData } = props
	const classes = useStyles()

	return (
		<Grid className={cn(classes.personCredit)}>
			<Grid className={classes.creditLeft}>
				<Typography
					className={cn(classes.creditTop, classes.topLeft)}
					variant='body1'
				>
					{creditData.position}
				</Typography>
				<Typography className={classes.creditBottomLeft} variant='body1'>
					{creditData.productionType}
				</Typography>
			</Grid>
			<Grid className={classes.creditRight}>
				<Typography className={classes.topRight} variant='body1'>
					{creditData.productionTitle}
				</Typography>
				<Typography className={classes.creditBottomRight} variant='body1'>
					{creditData.year}
				</Typography>
			</Grid>
		</Grid>
	)
}

export default PersonCredit
