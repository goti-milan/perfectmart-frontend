import React, { useState } from 'react';
import { Container, Typography, Box, Button, TextField } from '@mui/material';

const ForgotPassword = () => {
    const [recoveryOption, setRecoveryOption] = useState('');
    const [inputValue, setInputValue] = useState('');
    const [showOTPForm, setShowOTPForm] = useState(false);

    const handleOptionChange = (option: React.SetStateAction<string>) => {
        setRecoveryOption(option);
        setInputValue('');
    };

    const handleInputChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
        setInputValue(event.target.value);
    };

    const handleSubmit = (event: { preventDefault: () => void; }) => {
        event.preventDefault();
        setShowOTPForm(!showOTPForm);
        // Handle form submission logic, such as sending data to the backend
        console.log(`Recovery via ${recoveryOption}:`, inputValue);
    };

    return (
        <Container component="main" maxWidth="xs">
            <Box
                sx={{
                    marginTop: 8,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                <Typography component="h1" variant="h5">
                    Forgot Password
                </Typography>
                {<Box sx={{ mt: 3, mb: 2 }}>
                    <Button
                        disabled={recoveryOption === 'email'}
                        variant={recoveryOption === 'mobile' ? 'contained' : 'outlined'}
                        color="primary"
                        onClick={() => handleOptionChange('mobile')}
                        sx={{ mr: 1 }}
                    >
                        Mobile Number
                    </Button>
                    <Button
                        disabled={recoveryOption === 'mobile'}
                        variant={recoveryOption === 'email' ? 'contained' : 'outlined'}
                        color="primary"
                        onClick={() => handleOptionChange('email')}
                    >
                        Email
                    </Button>
                </Box>}
                {!showOTPForm ? <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
                    {recoveryOption && <TextField
                        name={recoveryOption}
                        label={recoveryOption === 'mobile' ? 'Mobile Number' : 'Email'}
                        value={inputValue}
                        onChange={handleInputChange}
                        fullWidth
                        margin="normal"
                        required
                    />}
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        sx={{ mt: 3, mb: 2 }}
                        disabled={!inputValue}
                    >
                        Submit
                    </Button>
                </Box>
                    :
                    <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
                        {recoveryOption && (
                            <TextField
                                name={'Enter one time password'}
                                label={'enter a OTP'}
                                value={inputValue}
                                onChange={handleInputChange}
                                fullWidth
                                margin="normal"
                                required
                            />
                        )}
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            sx={{ mt: 3, mb: 2 }}
                            disabled={!inputValue}
                        >
                            Submit
                        </Button>
                    </Box>
                }
            </Box>
        </Container>
    );
};

export default ForgotPassword;
