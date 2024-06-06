import { Grid, Typography, Autocomplete, TextField, Checkbox, Rating, createFilterOptions, Slider } from '@mui/material'
import { FilmOptionType } from '../../utils/interface';
import { useEffect } from 'react';

const styles = {
    filterSection: { border: '1px solid', padding: '16px' },
    filterTitle: { marginBottom: '16px' },
    slider: { width: '95%' },
    autocomplete: { width: 'autos' },
    checkboxLabel: { display: 'flex', alignItems: 'center' },
};

const SortbyOptions = [
    { title: 'Recommended', id: -1 },
    { title: 'Best Selling', id: 0 },
    { title: 'Ascending(A-Z)', id: 1 },
    { title: 'Descending(Z-A)', id: 2 },
    { title: 'Price:Low-High', id: 3 },
    { title: 'Price:High-Low', id: 4 },
    { title: 'Date:Old-New', id: 5 },
    { title: 'Date:New-Old', id: 6 },
]


const filterOptions = createFilterOptions({
    matchFrom: 'start',
    stringify: (option: FilmOptionType) => option.title,
});


const ProductFilter = ({ productFilter, setProductFilter }: any) => {
    const { priceRange, rating, availability, sortBy } = productFilter

    const handleChange = (newValue: any, name: string) => {
        setProductFilter({ ...productFilter, [name]: newValue });
    };

    return (
        <Grid item xs={2} style={styles.filterSection}>
            <Typography style={styles.filterTitle}>Filter</Typography>

            {/* Price Filter */}
            <Typography>Price range</Typography>
            <Grid container spacing={2} alignItems="center">
                <Grid item>
                    <Typography>{priceRange[0]}</Typography>
                </Grid>
                <Grid item xs>
                    <Slider
                        style={styles.slider}
                        getAriaLabel={() => 'Price range'}
                        value={priceRange}
                        onChange={(e, value) => handleChange(value, 'priceRange')}
                        valueLabelDisplay="auto"
                        max={10000}
                        min={50}
                    />
                </Grid>
                <Grid item>
                    <Typography>{priceRange[1]}</Typography>
                </Grid>
            </Grid>

            {/* Sort By */}
            <Typography style={styles.filterTitle}>Sort by</Typography>
            <Autocomplete
                className='sortBy'
                id="filter-demo"
                options={SortbyOptions}
                getOptionLabel={(option) => option.title}
                style={{ width: "auto" }} // Example width
                renderInput={(params) => <TextField {...params} label="Sort By" variant="outlined" />}
                onChange={(e, value) => handleChange(value, 'sortBy')}
                value={SortbyOptions.find((ind) => ind.id === sortBy)}
            />

            {/* Availability */}
            <Typography style={styles.filterTitle}>Availability</Typography>
            <Grid container style={styles.checkboxLabel}>
                <Checkbox
                    checked={availability}
                    onChange={() => handleChange(!availability, 'availability')}
                />
                <Typography>Exclude out of stock</Typography>
            </Grid>

            {/* Customer Reviews */}
            <Typography style={styles.filterTitle}>Customer Reviews</Typography>
            <Grid container>
                <Rating
                    name="read-only"
                    value={rating}
                    onChange={(e, value) => handleChange(value, 'rating')}
                />
            </Grid>
        </Grid>
    )
}

export default ProductFilter