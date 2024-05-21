import { Typography, Link, Box, Grid } from '@mui/material';
import { Facebook, Twitter, Instagram } from '@mui/icons-material';

const Footer = () => {
  return (
    <Box sx={{ bgcolor: 'primary.main', color: 'white', p: 4 }}>
      <Grid container spacing={2}>
        {/* Logo Section */}
        <Grid item xs={12} md={4}>
          <Typography variant="h6">Your Logo</Typography>
        </Grid>

        {/* Important Links Section */}
        <Grid item xs={12} md={4}>
          <Typography variant="h6" gutterBottom>
            Important Links
          </Typography>
          <Link href="#" color="inherit" display="block" gutterBottom>
            Home
          </Link>
          <Link href="#" color="inherit" display="block" gutterBottom>
            About Us
          </Link>
          <Link href="#" color="inherit" display="block" gutterBottom>
            Services
          </Link>
          <Link href="#" color="inherit" display="block" gutterBottom>
            Contact
          </Link>
        </Grid>

        {/* Social Media Links Section */}
        <Grid item xs={12} md={4}>
          <Typography variant="h6" gutterBottom>
            Follow Us
          </Typography>
          <Box>
            <Link href="#" color="inherit" sx={{ mr: 2 }}>
              <Facebook />
            </Link>
            <Link href="#" color="inherit" sx={{ mr: 2 }}>
              <Twitter />
            </Link>
            <Link href="#" color="inherit">
              <Instagram />
            </Link>
          </Box>
        </Grid>
      </Grid>
    </Box>
  )
}

export default Footer