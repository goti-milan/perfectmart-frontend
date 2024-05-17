import React, { useState } from 'react'
import { Container, Grid, Typography, Button, Card, CardActionArea, CardActions, CardContent, CardMedia } from '@mui/material';
import ProductDescription from '../../components/product-description/productDescription';
import ProductReviewList from '../../components/productReview/productReviewList';

const Product = () => {
const [productDescriptionSection, setProductDescriptionSection] = useState(true);


  return (
    <div>
      <Container  maxWidth="lg" style={{ marginTop: '20px' }}>
        <Typography>
          Home
          Shop
          Foundations Matte Flip Flop
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <Grid container >
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
            </Grid>

            <Grid container spacing={1}>
              {Array.from({ length: 5 }).map((_, index) => (
                <Grid item xs={2} key={index}>
                  <Card>
                    <CardActionArea>
                      <CardMedia
                        component="img"
                        height="auto"
                        image={`https://via.placeholder.com/100x100?text=Thumbnail+${index + 1}`}
                        alt={`Thumbnail ${index + 1}`}
                      />
                    </CardActionArea>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography >
              new
            </Typography>
            <Typography >
              IN STOCK
            </Typography>
            <Typography variant="h4" gutterBottom>
              Foundations Matte Flip Flop
            </Typography>
            <Typography>
              Featuring the original ripple design inspired by Japanese bullet trains, the Nike Air Max 97 lets you push your style full-speed ahead.
            </Typography>
            <Typography>
              color black
            </Typography>
            <Typography>
              size 10
            </Typography>
            <Typography>
              qty 1 + 1 -
            </Typography>
            <Typography variant="h6" gutterBottom>
              $99.99
            </Typography>
            <Grid container justifyContent="center" spacing={2}>
              <Grid item>
                <Button variant="contained" color="primary">
                  Add to Cart
                </Button>
              </Grid>
              <Grid item>
                <Button variant="contained" color="primary">
                  Buy Now
                </Button>
              </Grid>
            </Grid>
            <Typography>
              Add to Favorite
            </Typography>
          </Grid>
        </Grid>

        <Grid height={120} container spacing={2}>
          <Grid item xs={12} md={4}>
            <Card>
              <Typography variant="subtitle1">100% Original</Typography>
              <Typography variant="body2">Chocolate bar candy canes ice cream toffee cookie halvah.</Typography>
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card>
              <Typography variant="subtitle1">10 Day Replacement</Typography>
              <Typography variant="body2">Marshmallow biscuit donut dragée fruitcake wafer.</Typography>
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card>
              <Typography variant="subtitle1">Year Warranty</Typography>
              <Typography variant="body2">Cotton candy gingerbread cake I love sugar sweet.</Typography>
            </Card>
          </Grid>
        </Grid>


        {/* Description section */}

        <Grid container spacing={3}>
          <div aria-disabled={productDescriptionSection} onClick={()=> setProductDescriptionSection(true)}>Description</div>
          <div aria-disabled={!productDescriptionSection} onClick={()=> setProductDescriptionSection(false)} >Review</div>
        </Grid>
        <Grid>
          {
            productDescriptionSection ? <ProductDescription /> : <ProductReviewList />
          }
        </Grid>

      </Container>
    </div>
  )
}

export default Product