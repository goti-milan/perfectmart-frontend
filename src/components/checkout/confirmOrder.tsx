import { Grid, Typography, Card, CardActionArea, CardMedia, Paper, CardHeader, CardContent, Stack, Divider, TextField, Button } from '@mui/material'
import React from 'react'

const ConfirmOrder = ({setActiveStep}: any) => {
    return (
        <Grid container>
            {/* Cart Details */}
            <Grid item xs={12}>
                <Typography>Cart (0 items)</Typography>
            </Grid>

            {/* Cart and Order Summary */}
            <Grid item xs={12} md={8}>
                <Card>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            height="auto"
                            image="https://hips.hearstapps.com/hmg-prod/images/run-affordable-running-shoes-1676481206.jpg?resize=2048:*"
                            alt="Product Image"
                        />
                    </CardActionArea>
                </Card>
                {/* Cart Content */}
                {/* Add your cart content here */}
            </Grid>
            <Grid item xs={12} md={4}>
                {/* Order Summary */}
                <Paper elevation={0} variant="outlined">
                    <Card>
                        <CardHeader title="Order Summary" />
                        <CardContent>
                            <Stack spacing={1}>
                                <Grid container justifyContent="space-between" className="MuiStack-root css-9jay18">
                                    <Typography variant="body2">Sub Total</Typography>
                                    <Typography variant="subtitle2">1000.00</Typography>
                                </Grid>
                                <Grid container justifyContent="space-between" className="MuiStack-root css-9jay18">
                                    <Typography variant="body2">Discount</Typography>
                                    <Typography variant="subtitle2">-10%</Typography>
                                </Grid>
                                <Grid container justifyContent="space-between" className="MuiStack-root css-9jay18">
                                    <Typography variant="body2">GST</Typography>
                                    <Typography variant="subtitle2">180.00</Typography>
                                </Grid>
                                <Grid container justifyContent="space-between" className="MuiStack-root css-9jay18">
                                    <Typography variant="body2">Shipping</Typography>
                                    <Typography variant="subtitle2">90.00</Typography>
                                </Grid>
                                <Divider />
                                <Grid container justifyContent="space-between" className="MuiStack-root css-9jay18">
                                    <Grid>
                                        <Typography variant="subtitle1">Total</Typography>
                                        <Typography variant="caption">(VAT included if applicable)</Typography>
                                    </Grid>
                                    <Typography variant="subtitle1">1200</Typography>
                                </Grid>
                                <div className="MuiFormControl-root MuiFormControl-fullWidth MuiTextField-root css-feqhe6">
                                    <TextField
                                        id="discount-code"
                                        label="Discount codes / Gifts"
                                        variant="outlined"
                                        value="DISCOUNT5"
                                        InputProps={{
                                            endAdornment: (
                                                <Button size="medium" variant="contained" disableElevation>
                                                    Apply
                                                </Button>
                                            )
                                        }}
                                    />
                                </div>
                            </Stack>
                        </CardContent>
                    </Card>
                </Paper>
                {/* Checkout Button */}
                <Button onClick={() => setActiveStep(3)} variant="contained" color='success' size="large" fullWidth >
                    Check Out
                </Button>
            </Grid>

            {/* Continue Shopping */}
            <Grid item xs={12}>
                <Typography   >Continue Shopping</Typography>
            </Grid>
        </Grid>
    )
}

export default ConfirmOrder