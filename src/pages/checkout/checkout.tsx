import { Grid, Typography } from '@mui/material'
import React from 'react'
import StepperComp from '../../components/stepper'
import ConfirmOrder from '../../components/checkout/confirmOrder'
import Address from '../../components/checkout/address'
import Delivery from '../../components/checkout/delivery'
import PaymentPage from '../../components/checkout/payment'

const CheckOut = () => {
    const [activeStep, setActiveStep] = React.useState(0);
    return (
        <Grid container spacing={2}>
            {/* Title and Stepper */}
            <Grid item xs={12}>
                <Typography variant='h5'>Checkout</Typography>
                <StepperComp activeStep={activeStep} setActiveStep={setActiveStep} />
            </Grid>

            <Grid px={5}>
                {activeStep === 0 ? <Address activeStep={activeStep} setActiveStep={setActiveStep} />
                    : activeStep === 1 ? <Delivery setActiveStep={setActiveStep} /> :
                        activeStep === 2 ? <ConfirmOrder setActiveStep={setActiveStep} /> :
                            activeStep === 3 ? <PaymentPage /> : " null"}
            </Grid>

        </Grid>
    )
}

export default CheckOut