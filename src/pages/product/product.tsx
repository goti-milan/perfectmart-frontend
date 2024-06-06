import React, { useState } from 'react'
import { Container, Grid, Typography, Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Tabs, Tab, Divider, Rating } from '@mui/material';
import ProductDescription from '../../components/product-description/productDescription';
import ProductReviewList from '../../components/productReview/productReviewList';
import Slider from 'react-slick';
import { singleProduct } from '../../utils/static';
import SizeChart from '../../components/sizeChart';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';


const productSliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: false,
  autoplaySpeed: 3000,
};

const products = [
  { id: 1, brand: 'KETCH', fit: 'Men Skinny Fit Jeans', price: 599, originalPrice: 1699, discount: 1100, rating: 3.8, imgSrc: '/path/to/image1.jpg' },
  { id: 2, brand: 'Roadster', fit: 'Men Slim Fit Jeans', price: 699, originalPrice: 1999, discount: 65, rating: 3.7, imgSrc: '/path/to/image2.jpg' },
  // Add more products as necessary
];

const newProducts = [
  { img: 'https://pandafoods.co.in/wp-content/uploads/2015/04/pineapple-jam.jpg', title: 'New Product 1' },
  { img: 'https://pandafoods.co.in/wp-content/uploads/2015/04/pineapple-jam.jpg', title: 'New Product 2' },
  { img: 'https://pandafoods.co.in/wp-content/uploads/2015/04/pineapple-jam.jpg', title: 'New Product 3' }
];

const Product = () => {
  const [productDescriptionSection, setProductDescriptionSection] = useState(0);

  const handleChange = (event: any, newValue: React.SetStateAction<number>) => {
    setProductDescriptionSection(newValue);
  };


  const [product, setProduct] = useState(singleProduct)


  console.log('product', product);


  return (
    <div>
      <Container maxWidth="lg" style={{ marginTop: '20px' }}>
        <Typography>
          <span>Home</span>
          <span>{product?.mainCategory}</span>
          <span>{product?.subCategory}</span>
          <span>{product?.subCategory}</span>
          <span>{product?.title}</span>
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <Grid container >
              <Card>
                <CardActionArea>
                  <Slider {...productSliderSettings}>
                    {product?.images?.map((image, index) => (
                      <CardMedia
                        key={index}
                        component="img"
                        height="auto"
                        image={image.img}
                        alt="Product Image"
                        style={{ aspectRatio: 1 }}

                      />
                    ))}
                  </Slider>
                </CardActionArea>
              </Card>
            </Grid>

            <Grid container spacing={1} >

              <Grid item display={'flex'} alignItems={'center'} height={'auto'} >
                <Button>{'<'}</Button>
              </Grid>
              <Grid container xs={10} spacing={1}>
                {Array.from({ length: 5 }).map((_, index) => (
                  <Grid item xs={2} key={index}>
                    <Card>
                      <CardActionArea>
                        <CardMedia
                          component="img"
                          height="auto"
                          image={`https://pandafoods.co.in/wp-content/uploads/2015/04/pineapple-jam.jpg`}
                          alt={`Thumbnail ${index + 1}`}
                        />
                      </CardActionArea>
                    </Card>
                  </Grid>
                ))}
              </Grid>
              <Grid item display={'flex'} alignItems={'center'} >
                <Button>{'>'}</Button>
              </Grid>

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
              {product?.title}
            </Typography>
            <Typography>
              {product?.description}
            </Typography>
            <Typography>
              color black
            </Typography>
            <Grid container gap={2}>
              {product?.sizes?.map((size) => <SizeChart size={size} />)}
            </Grid>
            <Typography>
              qty 1 + 1 -
            </Typography>
            <Grid container gap={1} >
              <Grid item>
                {product.price}RS
              </Grid>
              <Grid item>
                {product.mrp}Rs
              </Grid>
              <Grid item>
                {product?.discount}% OFF
              </Grid>
            </Grid>
            <Grid container justifyContent="center" spacing={2} height={80}>
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
            <Grid display={'flex'} alignContent={'flex-start'} gap={2}>
              <Typography>
                Add to Favorite
              </Typography>
              {product?.isWishList ? <FavoriteIcon style={{ color: "red" }} /> : <FavoriteBorderOutlinedIcon />}
            </Grid>
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

        <Tabs value={productDescriptionSection} onChange={handleChange} aria-label="product description and review tabs">
          <Tab label="Description" value={0} />
          <Tab label="Review" value={1} />
        </Tabs>
        <Divider />
        <Grid>
          {
            !productDescriptionSection ? <ProductDescription /> : <ProductReviewList ratings={product?.rating} />
          }
        </Grid>

      </Container>
      <Grid container spacing={3}>
        {products.map(product => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={product.id}>
            <Card>
              <CardMedia
                component="img"
                height="140"
                image={product.imgSrc}
                alt={product.brand}
              />
              <CardContent>
                <Typography variant="h6">{product.brand}</Typography>
                <Typography variant="body2" color="textSecondary">{product.fit}</Typography>
                <Typography variant="h6">Rs. {product.price}</Typography>
                <Typography variant="body2" color="textSecondary" sx={{ textDecoration: 'line-through' }}>Rs. {product.originalPrice}</Typography>
                <Typography variant="body2" color="error">({product.discount}% OFF)</Typography>
                <Rating value={product.rating} precision={0.1} readOnly />
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  )
}

export default Product