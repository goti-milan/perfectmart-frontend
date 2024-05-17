import { Box, Typography, Step, StepLabel, Button } from '@mui/material';
import React from 'react'
import Stepper from '@mui/material/Stepper';

const steps = ['Address','Delivery','Payment','Confirm Order'];

const StepperComp = ({activeStep ,setActiveStep}:any) => {
    const [skipped, setSkipped] = React.useState(new Set<number>());

    const isStepOptional = (step: number) => {
        return step === 1;
    };

    const isStepSkipped = (step: number) => {
        return skipped.has(step);
    };

    const handleStepClick = (index: React.SetStateAction<number>) => {
        setActiveStep(index);
      };


    return (
        <Box sx={{ width: '100%' }}>
            <Stepper activeStep={activeStep}>
                {steps.map((label, index) => {
                    const stepProps: { completed?: boolean } = {};
                    const labelProps: {
                        optional?: React.ReactNode;
                    } = {};
                    if (isStepOptional(index)) {
                        labelProps.optional = (
                            <Typography variant="caption">Optional</Typography>
                        );
                    }
                    if (isStepSkipped(index)) {
                        stepProps.completed = false;
                    }
                    return (
                        <Step key={label} {...stepProps} onClick={() => handleStepClick(index)}>
                            <StepLabel {...labelProps}>{label}</StepLabel>
                        </Step>
                    );
                })}
            </Stepper>
        </Box>
    )
}

export default StepperComp