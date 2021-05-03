import React from 'react'
import { Card, CardHeader, CardContent, Typography, Grid, Divider } from '@material-ui/core'
import useStyles from './style'
import Form from './Form/Form'
import List from './List/List'

const Main = () => {
    const classes = useStyles()
    return (
        <Card className={classes.root}>
            <CardHeader title="Expense Tracker" subheader="Powered by SalmanJamil" />
            <CardContent>
                <Typography align="center" variant="h5">Total Balance $100</Typography>
                <Typography variant="subtitle1" style={{ lineHeight: '1.5em', marginTop: '20px' }}>
                    {/* InfoCard */}
                    Try saying: Add income fro $100 in Category Salary for Monday ...
                </Typography>
                <Divider/>
                <Form/>
            </CardContent>
            <CardContent className={classes.cardcontent}>
                <Grid container spacing={2} >
                    <Grid item xs={12}>
                        <List />
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    )
}

export default Main
