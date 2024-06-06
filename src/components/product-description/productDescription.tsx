import React from 'react';
import { Typography, Divider, Grid, Box } from '@mui/material';

const ProductDescription = () => {
  return (
    <Box p={2}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography variant="h6">Specifications</Typography>
          <Divider />
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography><strong>Category:</strong> Shoes</Typography>
          <Typography><strong>Manufacturer:</strong> Nike</Typography>
          <Typography><strong>Serial Number:</strong> 358607726380311</Typography>
          <Typography><strong>Ships From:</strong> United States</Typography>
        </Grid>

        <Grid item xs={12}>
          <Typography variant="h6">Product Details</Typography>
          <Divider />
        </Grid>
        <Grid item xs={12}>
          <Typography>The foam sockliner feels soft and comfortable</Typography>
          <Typography>Pull tab</Typography>
          <Typography>Not intended for use as Personal Protective Equipment</Typography>
          <Typography>Colour Shown: White/Black/Oxygen Purple/Action Grape</Typography>
          <Typography>Style: 921826-109</Typography>
          <Typography>Country/Region of Origin: China</Typography>
        </Grid>

        <Grid item xs={12}>
          <Typography variant="h6">Benefits</Typography>
          <Divider />
        </Grid>
        <Grid item xs={12}>
          <Typography>
            Mesh and synthetic materials on the upper keep the fluid look of the OG while adding comfort and durability.
            Originally designed for performance running, the full-length Max Air unit adds soft, comfortable cushioning underfoot.
            The foam midsole feels springy and soft.
            Mesh and synthetic materials on the upper keep the fluid look of the OG while adding comfort and durability.
          </Typography>
          <Typography>The rubber outsole adds traction and durability.</Typography>
        </Grid>

        <Grid item xs={12}>
          <Typography variant="h6">Delivery and Returns</Typography>
          <Divider />
        </Grid>
        <Grid item xs={12}>
          <Typography>Your order of $200 or more gets free standard delivery.</Typography>
          <Typography>Standard delivered 4-5 Business Days</Typography>
          <Typography>Express delivered 2-4 Business Days</Typography>
          <Typography>Orders are processed and delivered Monday-Friday (excluding public holidays)</Typography>
        </Grid>
      </Grid>
    </Box>
  );
}

export default ProductDescription;
