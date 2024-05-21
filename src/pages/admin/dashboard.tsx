import { Card, CardContent, Typography, Box, ButtonGroup, Button, TextField, Container, Grid, Paper } from '@mui/material';
import { ResponsiveContainer, LineChart, Tooltip, CartesianGrid, XAxis, YAxis, Legend, Line } from 'recharts';

const Dashboard = () => {
  const todaySales = 1500;
  const todayProfit = 500;
  const totalProducts = 120;
  const totalReviews = 350;

  const data = [
    { name: 'Jan', sales: 4000, profit: 2400 },
    { name: 'Feb', sales: 3000, profit: 1398 },
    { name: 'Mar', sales: 2000, profit: 9800 },
    { name: 'Apr', sales: 2780, profit: 3908 },
    { name: 'May', sales: 1890, profit: 4800 },
    { name: 'Jun', sales: 2390, profit: 3800 },
    { name: 'Jul', sales: 3490, profit: 4300 },
  ];

  const handleDateChange = (event: { target: { value: any; }; }) => {
    console.log(event.target.value);
  };

  const SalesProfitCard = ({ title, value }: any) => (
    <Card>
      <CardContent>
        <Typography variant="h6" component="div">{title}</Typography>
        <Typography variant="h4">{value}</Typography>
      </CardContent>
    </Card>
  );

  const TotalInfoCard = ({ title, value }: any) => (
    <Card>
      <CardContent>
        <Typography variant="h6" component="div">{title}</Typography>
        <Typography variant="h4">{value}</Typography>
      </CardContent>
    </Card>
  );

  const SalesChart = () => (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="sales" stroke="#8884d8" activeDot={{ r: 8 }} />
      </LineChart>
    </ResponsiveContainer>
  );

  const ProfitChart = () => (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="profit" stroke="#82ca9d" />
      </LineChart>
    </ResponsiveContainer>
  );

  const DateFilter = () => (
    <Box p={2} display="flex" justifyContent="space-between">
      <ButtonGroup variant="outlined" aria-label="outlined primary button group">
        <Button>Daily</Button>
        <Button>Weekly</Button>
        <Button>Monthly</Button>
        <Button>Quarterly</Button>
      </ButtonGroup>
      <TextField
        id="date"
        label="Select Date"
        type="date"
        defaultValue="2023-01-01"
        onChange={handleDateChange}
        sx={{ width: 220 }}
        InputLabelProps={{
          shrink: true,
        }}
      />
    </Box>
  );


  return (
    <div>
        <Container>
          <Typography variant="h4" gutterBottom>Admin Dashboard</Typography>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6} md={3}>
              <SalesProfitCard title="Today's Sales" value={`$${todaySales}`} />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <SalesProfitCard title="Today's Profit" value={`$${todayProfit}`} />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <TotalInfoCard title="Total Products" value={totalProducts} />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <TotalInfoCard title="Total Reviews" value={totalReviews} />
            </Grid>
            <Grid item xs={12}>
              <Paper>
                <DateFilter />
              </Paper>
            </Grid>
            <Grid item xs={12} md={6}>
              <Paper>
                <SalesChart />
              </Paper>
            </Grid>
            <Grid item xs={12} md={6}>
              <Paper>
                <ProfitChart />
              </Paper>
            </Grid>
          </Grid>
        </Container>
    </div>
  )
}

export default Dashboard