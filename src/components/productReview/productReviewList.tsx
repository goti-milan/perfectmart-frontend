import { Star } from '@mui/icons-material';
import { Grid } from '@mui/material';
import React from 'react';

const ProductReviewList = ({ ratings }: any) => {
  return (
    <>
      <div>Product Review List</div>
      <Grid container direction="column" spacing={2}>
        {ratings.map((rating: any) => (
          <Grid item key={rating?.id}>
            <Grid container spacing={2} alignItems="flex-start">
              {/* Star Rating and Comment */}
              <Grid item style={{ display: 'flex', alignItems: 'center' }}>
                <span>{rating?.starRating}</span>
                <Star style={{ marginLeft: 4 }} />
              </Grid>
              <Grid item xs>
                {rating.comment}
              </Grid>
            </Grid>
            {/* Username and Date */}
            <Grid item>
              <span>{rating.userName} | {"31-05-2024"}</span>
            </Grid>
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default ProductReviewList;
