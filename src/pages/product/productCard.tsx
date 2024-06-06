import { Card, CardActionArea, CardMedia, Typography, Grid, Button, Box } from '@mui/material'
import React, { useCallback } from 'react'
import Slider from 'react-slick'
import { percentageCalc } from '../../utils/extraFunctions';


const productSliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 3000,
};

const ProductCard = ({ product, handleRemoveItem, item, mode }: any) => {

    console.log('product', product);





    return (
        <Card style={{ padding: "8px" }} >
            <CardActionArea>

                <Slider {...productSliderSettings}>
                    {product?.images.map((image: any) => (
                        <CardMedia
                            key={image?.id}
                            component="img"
                            height="auto"
                            image={image.img}
                            alt="Product Image"
                            style={{ aspectRatio: 1 }}

                        />
                    ))}
                </Slider>

                <Typography variant='h6' mt={2} >
                    product userName
                </Typography>
                <Typography maxWidth={280} maxHeight={50} overflow={'hidden'}>
                    {product.description}
                </Typography>
                <Grid display={'flex'} gap={1}  >
                    <Typography fontWeight={700}>
                        Rs.{product.price}
                    </Typography>
                    <Typography>
                        Rs.{product.mrp}
                    </Typography>
                    <Typography>
                        {product?.discount} % OFF
                    </Typography>
                </Grid>
                <Grid container justifyContent="space-between">
                    <Button variant='contained' color='primary' >Add to Cart</Button>
                    {mode === 'whishlist' ?
                        <Button onClick={() => handleRemoveItem(item.id)} variant='contained' color="warning">Remove</Button> :
                        <Button variant='contained' color='success' >Buy Now</Button>}
                </Grid>
            </CardActionArea>
        </Card>
    )
}

export default ProductCard