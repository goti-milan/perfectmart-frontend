import { Box, Typography, Container, Grid, Button } from '@mui/material';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Home = () => {
    const banners = [
        'https://mir-s3-cdn-cf.behance.net/project_modules/fs/3ce709113389695.60269c221352f.jpg',
        'https://mir-s3-cdn-cf.behance.net/project_modules/fs/3ce709113389695.60269c221352f.jpg',
        'https://mir-s3-cdn-cf.behance.net/project_modules/fs/3ce709113389695.60269c221352f.jpg'
    ];

    const bestSellingProducts = [
        { img: '	https://mir-s3-cdn-cf.behance.net/project_modules/fs/3ce709113389695.60269c221352f.jpg', title: 'Product 1' },
        { img: '	https://mir-s3-cdn-cf.behance.net/project_modules/fs/3ce709113389695.60269c221352f.jpg', title: 'Product 2' },
        { img: '	https://mir-s3-cdn-cf.behance.net/project_modules/fs/3ce709113389695.60269c221352f.jpg', title: 'Product 3' }
    ];
    const newProducts = [
        { img: 'https://pandafoods.co.in/wp-content/uploads/2015/04/pineapple-jam.jpg', title: 'New Product 1' },
        { img: 'https://pandafoods.co.in/wp-content/uploads/2015/04/pineapple-jam.jpg', title: 'New Product 2' },
        { img: 'https://pandafoods.co.in/wp-content/uploads/2015/04/pineapple-jam.jpg', title: 'New Product 3' }
    ];

    const newReviews = [
        { img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6yuzZ16hQnR2LrE4rPjX2X8Nm0n8qs5duJQ&usqp=CAU', title: 'New Product 1' },
        { img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6yuzZ16hQnR2LrE4rPjX2X8Nm0n8qs5duJQ&usqp=CAU', title: 'New Product 2' },
        { img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6yuzZ16hQnR2LrE4rPjX2X8Nm0n8qs5duJQ&usqp=CAU', title: 'New Product 3' }
    ];

    const bannerSliderSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
    };

    const productSliderSettings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
    };

    return (
        <Container>
            {/* Banner Slider */}
            <Box sx={{ mb: 4 }}>

            <Grid container justifyContent={'center'} height={'auto'} >
                    <Grid item display={'flex'} alignItems={'center'} >
                        <Button>{'<'}</Button>
                    </Grid>
                    <Grid item width={'85%'} >
                        <Slider {...bannerSliderSettings}>
                            {banners.map((banner, index) => (
                                <Box key={index} sx={{ px: 3 }}>
                                    <img src={banner} alt={`Banner ${index}`} style={{ width: '65%', height: 'auto' }} />
                                </Box>
                            ))}
                        </Slider>
                    </Grid>
                    <Grid item display={'flex'} alignItems={'center'} >
                        <Button>{'>'}</Button>
                    </Grid>
                </Grid>
            </Box>

            {/* Best Selling Products */}
            <Box sx={{ mb: 4 }}>
                <Typography variant="h4" gutterBottom>Best Selling Products</Typography>

                <Grid container justifyContent={'center'} height={'auto'} >
                    <Grid item display={'flex'} alignItems={'center'} >
                        <Button>{'<'}</Button>
                    </Grid>
                    <Grid item width={'85%'} >
                        <Slider {...productSliderSettings}>
                            {bestSellingProducts.map((product, index) => (
                                <Box key={index} sx={{ px: 3 }}>
                                    <img src={product.img} alt={product.title} style={{ width: '100%', height: 'auto' }} />
                                </Box>
                            ))}
                        </Slider>
                    </Grid>
                    <Grid item display={'flex'} alignItems={'center'} >
                        <Button>{'>'}</Button>
                    </Grid>
                </Grid>
            </Box>

            {/* New Products */}
            <Box sx={{ mb: 4 }}>
                <Typography variant="h4" gutterBottom>New Products</Typography>

                <Grid container justifyContent={'center'} height={'auto'} >
                    <Grid item display={'flex'} alignItems={'center'} >
                        <Button>{'<'}</Button>
                    </Grid>
                    <Grid item width={'85%'} >
                        <Slider {...productSliderSettings}>
                            {newProducts.map((product, index) => (
                                <Box key={index} sx={{ px: 3 }}>
                                    <img src={product.img} alt={product.title} style={{ width: '100%', height: 'auto' }} />
                                </Box>
                            ))}
                        </Slider>
                    </Grid>
                    <Grid item display={'flex'} alignItems={'center'} >
                        <Button>{'>'}</Button>
                    </Grid>
                </Grid>
            </Box>

            {/* Advertisement Block */}
            <Box sx={{ mb: 4 }}>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS46Jb4wjndGLbFLeO8vIHaYBqWu-ViekxaUA&usqp=CAU" alt="Advertisement" style={{ width: '65%', height: 'auto' }} />
            </Box>

            {/* Why Choose Us */}
            <Box sx={{ mb: 4 }}>
                <Typography variant="h4" gutterBottom>Why Choose Us</Typography>
                <Grid container justifyContent={'center'} height={'auto'} >
                    <Grid item display={'flex'} alignItems={'center'} >
                        <Button>{'<'}</Button>
                    </Grid>
                    <Grid item width={'85%'} >
                        <Slider {...productSliderSettings}>
                            {newReviews.map((product, index) => (
                                <Box key={index} sx={{ px: 3 }}>
                                    <img src={product.img} alt={product.title} style={{ width: '100%', height: 'auto' }} />
                                </Box>
                            ))}
                        </Slider>
                    </Grid>
                    <Grid item display={'flex'} alignItems={'center'} >
                        <Button>{'>'}</Button>
                    </Grid>
                </Grid>
            </Box>
        </Container>
    );
};

export default Home;
