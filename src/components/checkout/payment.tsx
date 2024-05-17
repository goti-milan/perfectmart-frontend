// src/PaymentPage.js

import React, { useState } from 'react';
import { Container, Typography, TextField, Button, Grid, Card, CardContent, MenuItem } from '@mui/material';
import { styled } from '@mui/material/styles';

const StyledContainer = styled(Container)(({ theme }) => ({
  marginTop: theme.spacing(4),
}));

const StyledCard = styled(Card)(({ theme }) => ({
  padding: theme.spacing(2),
}));

const StyledFormControl = styled('div')(({ theme }) => ({
  marginTop: theme.spacing(2),
}));

const StyledButton = styled(Button)(({ theme }) => ({
  marginTop: theme.spacing(4),
}));

const PaymentPage = () => {
  const [paymentDetails, setPaymentDetails] = useState({
    name: '',
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    paymentMethod: 'credit',
  });

  const handleChange = (e: { target: { name: any; value: any; }; }) => {
    setPaymentDetails({ ...paymentDetails, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    console.log('Payment Details Submitted:', paymentDetails);
    // Handle the payment submission logic here
  };

  return (
    <StyledContainer maxWidth="sm">
      <StyledCard>
        <CardContent>
          <Typography variant="h5" gutterBottom>
            Payment Information
          </Typography>
          <form onSubmit={handleSubmit}>
            <StyledFormControl>
              <TextField
                fullWidth
                label="Name on Card"
                name="name"
                value={paymentDetails.name}
                onChange={handleChange}
              />
            </StyledFormControl>
            <StyledFormControl>
              <TextField
                fullWidth
                label="Card Number"
                name="cardNumber"
                value={paymentDetails.cardNumber}
                onChange={handleChange}
              />
            </StyledFormControl>
            <Grid container spacing={2} style={{ marginTop: '16px' }}>
              <Grid item xs={6}>
                <TextField
                  fullWidth
                  label="Expiry Date"
                  name="expiryDate"
                  value={paymentDetails.expiryDate}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  fullWidth
                  label="CVV"
                  name="cvv"
                  value={paymentDetails.cvv}
                  onChange={handleChange}
                />
              </Grid>
            </Grid>
            <StyledFormControl>
              <TextField
                select
                fullWidth
                label="Payment Method"
                name="paymentMethod"
                value={paymentDetails.paymentMethod}
                onChange={handleChange}
              >
                <MenuItem value="credit">Credit Card</MenuItem>
                <MenuItem value="debit">Debit Card</MenuItem>
                {/* <MenuItem value="upi">UPI</MenuItem> */}
              </TextField>
            </StyledFormControl>
            <StyledButton type="submit" variant="contained" color="primary" fullWidth>
              Pay Now
            </StyledButton>
          </form>
        </CardContent>
      </StyledCard>
    </StyledContainer>
  );
};

export default PaymentPage;
