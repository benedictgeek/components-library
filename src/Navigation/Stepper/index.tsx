import * as React from 'react';
import { v4 as uuidv4 } from 'uuid';
import { styled } from '@mui/material/styles';
import MuiStepper, {
  StepperProps as MuiStepperProps,
} from '@mui/material/Stepper';
import Step, { StepProps } from '@mui/material/Step';
import StepLabel, { StepLabelProps } from '@mui/material/StepLabel';
import StepContent, { StepContentProps } from '@mui/material/StepContent';
import StepButton, { StepButtonProps } from '@mui/material/StepButton';

import Check from '@mui/icons-material/Check';
import MuiStepConnector, {
  stepConnectorClasses,
} from '@mui/material/StepConnector';
import { StepIconProps } from '@mui/material/StepIcon';

const StepConnector = styled(MuiStepConnector)<{
  stepcirclesize?: number;
  activelinecolor?: string;
  completedlinecolor?: string;
  defaultlinecolor?: string;
}>(
  ({
    theme,
    stepcirclesize,
    activelinecolor,
    completedlinecolor,
    defaultlinecolor,
  }) => ({
    [`&.${stepConnectorClasses.alternativeLabel}`]: {
      top: 10,
      left: `calc(-50% + ${stepcirclesize ? stepcirclesize / 2 : 10}px)`,
      right: `calc(50% + ${stepcirclesize ? stepcirclesize / 2 : 10}px)`,
    },
    [`&.${stepConnectorClasses.active}`]: {
      [`& .${stepConnectorClasses.line}`]: {
        borderColor: activelinecolor || theme.palette.primary.main,
      },
    },
    [`&.${stepConnectorClasses.completed}`]: {
      [`& .${stepConnectorClasses.line}`]: {
        borderColor: completedlinecolor || theme.palette.primary.main,
      },
    },
    [`& .${stepConnectorClasses.line}`]: {
      borderColor: defaultlinecolor || '#eaeaf0',
      borderTopWidth: 3,
      borderRadius: 1,
    },
  })
);

const StepIconRoot = styled('div')<{
  ownerState: { active?: boolean };
  stepcirclesize?: number;
}>(({ theme, ownerState, stepcirclesize }) => ({
  color: theme.palette.mode === 'dark' ? theme.palette.grey[700] : '#eaeaf0',
  display: 'flex',
  height: 22,
  alignItems: 'center',
  ...(ownerState.active && {
    color: '#fff',
  }),
  '& .StepIcon-completedIcon': {
    color: '#fff',
    zIndex: 1,
    fontSize: 14,
  },
  '& .StepIcon-circle': {
    fontSize: 13,
    width: stepcirclesize,
    height: stepcirclesize,
    borderRadius: '50%',
    background: 'red',
    color: 'white',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    '&.default': {
      backgroundColor: 'transparent',
      border: '1px solid grey',
      color: 'grey',
    },
  },
}));

const StepIcon: React.FC<
  StepIconProps & { index: number; stepcirclesize?: number }
> = ({
  active,
  completed,
  className,
  index,
  stepcirclesize,
  ref,
  error,
  ...props
}) => {
  return (
    <StepIconRoot
      ownerState={{ active }}
      stepcirclesize={stepcirclesize}
      className={className}
    >
      {completed ? (
        <div className="StepIcon-circle" {...props}>
          <Check
            className="StepIcon-completedIcon"
            sx={props.sx}
            style={props.style}
          />
        </div>
      ) : (
        ''
      )}
      {active ? (
        <div className="StepIcon-circle" {...props}>
          {index}
        </div>
      ) : (
        ''
      )}
      {!(completed || active) && (
        <div className="StepIcon-circle default" {...props}>
          {index}
        </div>
      )}
    </StepIconRoot>
  );
};

export interface StepDataProps {
  label: React.ReactNode;
  description?: React.ReactNode;
  StepContentProps?: StepContentProps;
  StepProps?: StepProps;
  StepIconProps?: React.HTMLProps<HTMLDivElement>;
  StepLabelProps?: StepLabelProps;
}

export interface StepperProps extends MuiStepperProps {
  steps: StepDataProps[];
  handleStep?: (index: number) => any;
  stepcirclesize?: number;
  activelinecolor?: string;
  completedlinecolor?: string;
  defaultlinecolor?: string;
}

export const Stepper = React.forwardRef<HTMLDivElement, StepperProps>(
  (
    {
      steps,
      stepcirclesize,
      handleStep,
      activelinecolor,
      completedlinecolor,
      defaultlinecolor,
      ...props
    },
    ref
  ) => {
    const [stepUID] = React.useState(() => uuidv4());
    return (
      <MuiStepper
        ref={ref}
        alternativeLabel
        // orientation="vertical"
        connector={
          <StepConnector
            activelinecolor={activelinecolor}
            completedlinecolor={completedlinecolor}
            defaultlinecolor={defaultlinecolor}
            stepcirclesize={stepcirclesize}
          />
        }
        {...props}
      >
        {steps.map(
          (
            {
              label,
              description,
              StepContentProps,
              StepProps,
              StepIconProps,
              StepLabelProps,
            },
            index
          ) => (
            <Step key={stepUID + index} {...StepProps}>
              <StepButton
                onClick={() => {
                  handleStep != null ? handleStep(index) : null;
                }}
              >
                <StepLabel
                  StepIconComponent={(props) => (
                    <StepIcon
                      icon={null}
                      index={index + 1}
                      stepcirclesize={stepcirclesize}
                      {...props}
                      {...StepIconProps}
                    />
                  )}
                  {...StepLabelProps}
                >
                  {label}
                </StepLabel>
              </StepButton>
              {props.orientation == 'vertical' && (
                <StepContent {...StepContentProps}>{description}</StepContent>
              )}
            </Step>
          )
        )}
      </MuiStepper>
    );
  }
);

Stepper.defaultProps = {
  stepcirclesize: 30,
};
