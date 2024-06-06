import { Grid, Typography } from '@mui/material'
import { useCallback, useState } from 'react'
import { Link } from 'react-router-dom';
import OrienattionButtons from '../../components/orientationbuttons';
import ProductCard from './productCard';
import ProductFilter from './productFilter';
import { allProducts } from '../../utils/static';


const Products = () => {
    const [productFilter, setProductFilter] = useState({
        priceRange: [20, 37],
        rating: 2,
        availability: false,
        sortBy: -1
    })
    const [productViewType, setProductViewType] = useState('module');

    const productList = useCallback((product: any) => {
        switch (productViewType) {
            case 'list':
                return (
                    <Grid key={product?.id} item component={Link} to={`/Products/${product?.id}`} md={12}>
                        <ProductCard product={product} />
                    </Grid>
                );

            default:
                return (
                    <Grid key={product?.id} item component={Link} to={`/Products/${product?.id}`} md={3}>
                        <ProductCard product={product} />
                    </Grid>
                );
        }
    }, [productViewType]);


    return (
        <Grid container style={{ padding: "0 20px" }}>
            <Grid container justifyContent="space-between" xs={12} height={55} mb={2} >
                <Grid item>
                    <Typography>
                        Home/ Clothing / Men Tshirts
                    </Typography>
                    <Typography variant='h6'>
                        <span>
                            Product -
                        </span>
                        <span style={{ marginLeft: "4px" }}>
                            15000 items
                        </span>
                    </Typography>
                </Grid>
                <OrienattionButtons productViewType={productViewType} setProductViewType={setProductViewType} />
            </Grid>
            <Grid container spacing={2}>
                <ProductFilter productFilter={productFilter} setProductFilter={setProductFilter} />
                <Grid item xs={10}>
                    <Grid container spacing={2}>
                        {(allProducts || []).map((product: any) => productList(product))}
                    </Grid>
                </Grid>
            </Grid>

        </Grid>
    )
}

export default Products