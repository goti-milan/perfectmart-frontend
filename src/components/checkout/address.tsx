import { Box, Button, FormControl, FormControlLabel, FormLabel, Grid, InputLabel, MenuItem, Modal, Paper, Radio, RadioGroup, Select, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'


const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const dummyAddresses = [
  {
    name: 'John Doe',
    street1: '123 Main St',
    street2: 'Apt 4B',
    city: 'Springfield',
    state: 'IL',
    zip: '62704',
    country: 'US',
    mobile: "1234567890"
  },
  {
    name: 'Jane Smith',
    street1: '456 Elm St',
    street2: '',
    city: 'Austin',
    state: 'TX',
    zip: '73301',
    country: 'US',
    mobile: "1234567890"
  },
  {
    name: 'Carlos Rodriguez',
    street1: '789 Pine St',
    street2: 'Suite 5A',
    city: 'Miami',
    state: 'FL',
    zip: '33101',
    country: 'US',
    mobile: "1234567890"
  }
];


const Address = ({ activeStep, setActiveStep }: any) => {
  const [address, setAddress] = useState({
    name: '',
    street1: '',
    street2: '',
    city: '',
    state: '',
    zip: '',
    country: '',
    mobile: '',

  });
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setAddress({
      ...address,
      [name]: value,
    });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    // onSubmit(address);
  };

  return (
    <Grid >
      <Box sx={{ p: 2 }}>
        <FormControl>
          <FormLabel id="demo-radio-buttons-group-label">Select Address</FormLabel>
          <RadioGroup
            row
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue="0"
            name="radio-buttons-group"
          >
            {dummyAddresses.map((add, index) => {
              return (
                <FormControlLabel
                  key={index}
                  value={index.toString()}
                  control={<Radio />}
                  label={
                    <>
                      <Paper sx={{ mb: 2, p: 2 }}>
                        <Typography variant="h6" fontWeight={700} >{add.name}</Typography>
                        <Typography>{add.street1}</Typography>
                        {add.street2 && <Typography>{add.street2}</Typography>}
                        <Typography>{`${add.city}, ${add.state}`}</Typography>
                        <Typography>{add.zip}</Typography>
                        <Typography>{add.country}</Typography>
                        <Typography>Phone number: {add.mobile}</Typography>
                      </Paper>
                      {index === 0 ?

                        <>
                          <Button onClick={() => setActiveStep(1)} variant='contained' color='inherit'>Delivery to This Address</Button>
                          <Button onClick={handleOpen} variant='contained' color='inherit'>Edit Address</Button>
                        </> : null
                      }
                    </>
                  }
                />
              )
            })}
          </RadioGroup>
        </FormControl>
      </Box>


      <Button onClick={handleOpen} variant='contained' color='primary' >Add New Address</Button>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box component="form" onSubmit={handleSubmit} sx={style}>
          <Typography variant="h6" gutterBottom>
            Shipping Address
          </Typography>
          <TextField
            label="Name"
            name="name"
            value={address.name}
            onChange={handleChange}
            fullWidth
            margin="normal"
            required
          />
          <TextField
            label="Street Address 1"
            name="street"
            value={address.street1}
            onChange={handleChange}
            fullWidth
            margin="normal"
            required
          />
          <TextField
            label="Street Address 2"
            name="street"
            value={address.street2}
            onChange={handleChange}
            fullWidth
            margin="normal"
            required
          />
          <TextField
            label="City"
            name="city"
            value={address.city}
            onChange={handleChange}
            fullWidth
            margin="normal"
            required
          />
          <FormControl fullWidth margin="normal" required>
            <InputLabel>State</InputLabel>
            <Select
              name="state"
              value={address.state}
              onChange={handleChange}
            >
              {/* Add your states here */}
              <MenuItem value="CA">California</MenuItem>
              <MenuItem value="NY">New York</MenuItem>
              <MenuItem value="TX">Texas</MenuItem>
              {/* ...other states */}
            </Select>
          </FormControl>
          <TextField
            label="ZIP Code"
            name="zip"
            value={address.zip}
            onChange={handleChange}
            fullWidth
            margin="normal"
            required
          />
          <FormControl fullWidth margin="normal" required>
            <InputLabel>Country</InputLabel>
            <Select
              name="country"
              value={address.country}
              onChange={handleChange}
            >
              {/* Add your countries here */}
              <MenuItem value="US">United States</MenuItem>
              <MenuItem value="CA">Canada</MenuItem>
              {/* ...other countries */}
            </Select>
          </FormControl>

          <FormControl>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue="female"
              name="radio-buttons-group"
            >
              <FormControlLabel value="0" control={<Radio />} label="Default Address" />
            </RadioGroup>
          </FormControl>

          <Button variant="contained" color="primary" type="submit" fullWidth>
            Save Address
          </Button>
        </Box>
      </Modal>
    </Grid>
  )
}

export default Address