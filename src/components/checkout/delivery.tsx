import { Button, Checkbox, Container, Dialog, DialogActions, DialogContent, DialogTitle, FormControlLabel, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'

const Delivery = ({ setActiveStep }: any) => {
    const [deliveryDetails, setDeliveryDetails] = useState({
        name: '',
        billingAddress: '',
        deliveryAddress: '',
        isDifferentAddress: false,
    });
    const [openExtraDetails, setOpenExtraDetails] = useState(false);
    const [extraDetails, setExtraDetails] = useState('');

    const handleChange = (e: { target: { name: any; value: any; }; }) => {
        setDeliveryDetails({ ...deliveryDetails, [e.target.name]: e.target.value });
    };

    const handleCheckboxChange = (e: { target: { checked: any; }; }) => {
        setDeliveryDetails({ ...deliveryDetails, isDifferentAddress: e.target.checked });
    };

    const handleExtraDetailsClick = () => {
        setOpenExtraDetails(true);
    };

    const handleExtraDetailsClose = () => {
        setOpenExtraDetails(false);
    };

    const handleExtraDetailsSubmit = () => {
        console.log('Extra Details:', extraDetails);
        setOpenExtraDetails(false);
    };

    const handleSubmit = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        console.log('Delivery Details Submitted:', deliveryDetails);
    };
    return (
        <div>


            <Container maxWidth="sm" sx={{ marginTop: 4 }}>
                <Typography variant="h5" gutterBottom>
                    Delivery Details
                </Typography>
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <TextField
                        label="Name"
                        name="name"
                        value={deliveryDetails.name}
                        onChange={handleChange}
                        required
                        sx={{ marginBottom: 2 }}
                    />
                    <TextField
                        label="Billing Address"
                        name="billingAddress"
                        value={deliveryDetails.billingAddress}
                        onChange={handleChange}
                        required
                        sx={{ marginBottom: 2 }}
                    />
                    <FormControlLabel
                        control={<Checkbox checked={deliveryDetails.isDifferentAddress} onChange={handleCheckboxChange} />}
                        label="Delivery Address is different from Billing Address"
                        sx={{ marginBottom: 2 }}
                    />
                    {deliveryDetails.isDifferentAddress && (
                        <TextField
                            label="Delivery Address"
                            name="deliveryAddress"
                            value={deliveryDetails.deliveryAddress}
                            onChange={handleChange}
                            required
                            sx={{ marginBottom: 2 }}
                        />
                    )}
                    <Button
                        variant="contained"
                        color="primary"
                        sx={{ marginBottom: 2 }}
                        onClick={handleExtraDetailsClick}
                    >
                        Add Extra Details for Delivery
                    </Button>
                    <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                        sx={{ marginBottom: 2 }}
                    >
                        Submit
                    </Button>
                </form>
                <Dialog open={openExtraDetails} onClose={handleExtraDetailsClose}>
                    <DialogTitle>Add Extra Details for Delivery</DialogTitle>
                    <DialogContent>
                        <TextField
                            multiline
                            rows={4}
                            fullWidth
                            label="Extra Details"
                            value={extraDetails}
                            onChange={(e) => setExtraDetails(e.target.value)}
                        />
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleExtraDetailsClose} color="primary">
                            Cancel
                        </Button>
                        <Button onClick={handleExtraDetailsSubmit} color="primary">
                            Submit
                        </Button>
                    </DialogActions>
                </Dialog>
            </Container>

            <Button onClick={() => setActiveStep(2)} variant='contained' color='inherit'>Delivery to This Address</Button>
        </div>
    )
}

export default Delivery