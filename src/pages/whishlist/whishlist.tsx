import React, { useState } from 'react';
import { Container, Typography, Grid, Button, List, ListItem } from '@mui/material';
import ProductCard from '../product/productCard';

const Wishlist = () => {
    // Sample wishlist data
    const [wishlist, setWishlist] = useState([
        { id: 1, name: 'Product 1' },
        { id: 2, name: 'Product 2' },
        { id: 3, name: 'Product 3' },
        { id: 4, name: 'Product 4' },
        { id: 5, name: 'Product 5' },
        { id: 6, name: 'Product 6' },
        { id: 7, name: 'Product 7' },
        { id: 8, name: 'Product 8' },
    ]);

    const handleRemoveItem = (itemId: number) => {
        setWishlist((prevWishlist) => prevWishlist.filter((item) => item.id !== itemId));
    };

    return (
        <Container component="main" >
            <Typography component="h1" variant="h5" sx={{ textAlign: 'center', mb: 2 }}>
                Wishlist
            </Typography>
            <Grid container spacing={2}>
                {wishlist.map((item) => (
                    <Grid key={item.id} item xs={12} sm={6} md={3}>
                        <ListItem>
                            <ProductCard mode={'whishlist'} item={item} handleRemoveItem={handleRemoveItem} />
                        </ListItem>
                            {/* <Button onClick={() => handleRemoveItem(item.id)} color="secondary">
                                Remove
                            </Button> */}
                    </Grid>
                ))}
            </Grid>
            {wishlist.length === 0 && (
                <Typography variant="body2" color="textSecondary" sx={{ textAlign: 'center', mt: 2 }}>
                    Your wishlist is empty.
                </Typography>
            )}
        </Container>
    );
};

export default Wishlist;
