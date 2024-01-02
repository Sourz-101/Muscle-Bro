import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import Logo from '../assets/images/hero-logo-blue.png';
// import Logo from '../assets/images/hero-logo.png';

const Footer = () => (
  <Box mt="80px" bgcolor="#ebf0fa">
    <Stack gap="40px" sx={{ alignItems: 'center' }} flexWrap="wrap" px="40px" pt="24px">
      <img src={Logo} alt="logo" style={{ width: '300px', height: '61px' }} />
    </Stack>
    <Typography variant="h5" sx={{ fontSize: { lg: '18px', xs: '12px' } }} mt="61px" textAlign="center" pb="10px">Made with 💪🏻 by Sourabh</Typography>
  </Box>
);

export default Footer;
