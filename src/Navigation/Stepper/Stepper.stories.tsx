import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Box } from '@mui/material';
import { StepperProps, StepDataProps, Stepper } from '.';
import { Button } from '../../Inputs/Button';

import { ThemeProvider } from '../../ThemeProvider';

const meta: Meta = {
  title: 'Navigation/Stepper',
  component: Stepper,
  //   argTypes: {},
};

export default meta;

const Template: Story = (args) => {
  const [activeStep, setActiveStep] = React.useState(0);

  const isLastStep = () => {
    return activeStep === steps.length - 1;
  };

  const handleNext = () => {
    const newActiveStep = isLastStep() ? 0 : activeStep + 1;
    setActiveStep(newActiveStep);
  };

  const steps: StepDataProps[] = [
    {
      label: 'Provide your details',
    },
    {
      label: 'Verifiy your info',
      //use this to override the icon properties
      //   StepIconProps: {
      //     style: { fontSize: '14px', backgroundColor: 'green', color: 'white' },
      //   },
    },
    {
      label: 'Confirm interest',
    },
  ];

  return (
    <ThemeProvider>
      <Box sx={{ width: '100%' }}>
        <Stepper
          activeStep={activeStep}
          aria-label="stepper component"
          steps={steps}
          {...args}
          handleStep={(index) => setActiveStep(index)}
        ></Stepper>
      </Box>
      <Box sx={{ width: '100%', padding: '40px 50px' }}>
        <Button variant="outlined" onClick={handleNext}>
          Next
        </Button>
      </Box>
    </ThemeProvider>
  );
};

export const Default = Template.bind({});
