import React from 'react'
import { Typography, Link, Container } from '@mui/material';

const Footer = () => {
  return (
    <footer style={{ marginTop: 'auto', backgroundColor: '#f5f5f5', padding: '20px 0' }}>
      <Container maxWidth="md">
        <Typography variant="body2" color="textSecondary" align="center">
          {'Made with ❤️ by '}
          <Link color="inherit" href="https://yourwebsite.com">
            Your Name
          </Link>{' '}
          {new Date().getFullYear()}
        </Typography>
      </Container>
    </footer>
  )
}

export default Footer