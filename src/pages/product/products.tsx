import { Autocomplete, Button, Card, CardActionArea, CardMedia, Grid, Rating, Slider, TextField, Typography, createFilterOptions } from '@mui/material'
import React from 'react'
import { FilmOptionType } from '../../utils/interface';
import { Link } from 'react-router-dom';
import { CheckBox } from '@mui/icons-material';
import OrienattionButtons from '../../components/orientationbuttons';


const filterOptions = createFilterOptions({
    matchFrom: 'start',
    stringify: (option: FilmOptionType) => option.title,
});

const SortbyOptions = [
    { title: 'Best Selling', id: 0 },
    { title: 'Ascending(A-Z)', id: 1 },
    { title: 'Descending(Z-A)', id: 2 },
    { title: 'Price:Low-High', id: 3 },
    { title: 'Price:High-Low', id: 4 },
    { title: 'Date:Old-New', id: 5 },
    { title: 'Date:New-Old', id: 6 },
]

function valuetext(value: number) {
    return `${value}°C`;
  }

const Products = () => {
    const [value, setValue] = React.useState<number[]>([20, 37]);
    const [Avalue, setAValue] = React.useState<number | null>(2);

    const handleChange = (event: Event, newValue: number | number[]) => {
        setValue(newValue as number[]);
    };

    return (
        <Grid container>
            <Grid container justifyContent="space-between" xs={12} height={55} >
                <Typography variant='h4'>
                    Product
                </Typography>
                <OrienattionButtons />
            </Grid>
            <Grid container spacing={2}>
                <Grid border={1} item xs={3}>
                    <Grid>
                        <Typography>
                            Filter
                        </Typography>
                        <Grid>
                            <Typography>
                                Price
                            </Typography>
                            <Grid container spacing={2}>
                                <Grid item>
                                    <Typography>{value[0]}</Typography>
                                </Grid>
                                <Grid item xs>
                                    <Slider
                                        getAriaLabel={() => 'Temperature range'}
                                        value={value}
                                        onChange={handleChange}
                                        valueLabelDisplay="auto"
                                        getAriaValueText={valuetext}
                                        max={10000}
                                        min={50}
                                    />
                                </Grid>
                                <Grid item>
                                    <Typography>{value[1]}</Typography>
                                </Grid>
                            </Grid>
                        </Grid>

                    </Grid>

                    <Grid>
                        <Typography>
                            Sort by
                        </Typography>
                        <Autocomplete
                            id="filter-demo"
                            options={SortbyOptions}
                            getOptionLabel={(option) => option.title}
                            filterOptions={filterOptions}
                            sx={{ width: 300 }}
                            renderInput={(params) => <TextField {...params} />}
                        />
                    </Grid>

                    <Grid>
                        <Typography>
                            Availability
                        </Typography>
                        <Grid container>
                        <CheckBox  />
                        <Typography>Include out of stock</Typography>
                        </Grid>
                    </Grid>

                    <Grid>
                        <Typography>
                           Customer Reviews
                        </Typography>
                        <Grid container>
                        <Rating name="read-only" value={Avalue} readOnly />
                        </Grid>
                    </Grid>

                </Grid>
                <Grid item xs={9}>
                    <Grid container spacing={2}>
                        {Array.from({ length: 10 }).map((_, index) => {
                            return (
                                <Grid item component={Link} to={`/Products/${index}`} md={4}>
                                    
                                    <Card >
                                        <CardActionArea>
                                            <CardMedia
                                                component="img"
                                                height="auto"
                                                image="https://hips.hearstapps.com/hmg-prod/images/run-affordable-running-shoes-1676481206.jpg?resize=2048:*"
                                                alt="Product Image"

                                            />
                                            <Typography variant='h6'>
                                                product name
                                            </Typography>
                                            <Typography >
                                                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                                            </Typography>
                                            <Typography>
                                                1500
                                            </Typography>
                                            <Grid container justifyContent="space-between">
                                            <Button variant='contained' color='primary' >Add to Cart</Button>
                                            <Button variant='contained' color='success' >Buy Now</Button>
                                            </Grid>
                                        </CardActionArea>
                                    </Card>
                                </Grid>
                            )
                        })}
                    </Grid>
                </Grid>
            </Grid>

        </Grid>
    )
}

export default Products