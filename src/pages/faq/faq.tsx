import React from 'react';
import { Container, Typography, Box, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const FAQPage = () => {
  return (
    <Container component="main" maxWidth="md">
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Typography component="h1" variant="h5">
          Frequently Asked Questions
        </Typography>
        <Accordion sx={{ width: '100%', mt: 2 }}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography variant="subtitle1">Question 1: What is Lorem Ipsum?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="body1">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
              industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion sx={{ width: '100%', mt: 2 }}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography variant="subtitle1">Question 2: Where does it come from?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="body1">
              Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical
              Latin literature from 45 BC, making it over 2000 years old.
            </Typography>
          </AccordionDetails>
        </Accordion>
        {/* Add more Accordion components for additional questions */}
      </Box>
    </Container>
  );
};

export default FAQPage;
