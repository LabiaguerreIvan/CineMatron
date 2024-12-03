import React from 'react';
import { Typography } from '@mui/material';

const Footer: React.FC = () => {
    return (
        <footer style={{ backgroundColor: '#3f51b5', color: 'white', textAlign: 'center', padding: '1rem', marginTop: 'auto' }}>
            <Typography variant="body2">© 2024 CineMatron</Typography>
        </footer>
    );
};

export default Footer;
