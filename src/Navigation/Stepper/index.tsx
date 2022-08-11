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
  stepCircleSize?: number;
  activeLineColor?: string;
  completedLineColor?: string;
  defaultLineColor?: string;
}>(
  ({
    theme,
    stepCircleSize,
    activeLineColor,
    completedLineColor,
    defaultLineColor,
  }) => ({
    [`&.${stepConnectorClasses.alternativeLabel}`]: {
      top: 10,
      left: `calc(-50% + ${stepCircleSize ? stepCircleSize / 2 : 10}px)`,
      right: `calc(50% + ${stepCircleSize ? stepCircleSize / 2 : 10}px)`,
    },
    [`&.${stepConnectorClasses.active}`]: {
      [`& .${stepConnectorClasses.line}`]: {
        borderColor: activeLineColor || theme.palette.primary.main,
      },
    },
    [`&.${stepConnectorClasses.completed}`]: {
      [`& .${stepConnectorClasses.line}`]: {
        borderColor: completedLineColor || theme.palette.primary.main,
      },
    },
    [`& .${stepConnectorClasses.line}`]: {
      borderColor: defaultLineColor || '#eaeaf0',
      borderTopWidth: 3,
      borderRadius: 1,
    },
  })
);

const StepIconRoot = styled('div')<{
  ownerState: { active?: boolean };
  stepCircleSize?: number;
}>(({ theme, ownerState, stepCircleSize }) => ({
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
    width: stepCircleSize,
    height: stepCircleSize,
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
  StepIconProps & { index: number; stepCircleSize?: number }
> = ({
  active,
  completed,
  className,
  index,
  stepCircleSize,
  ref,
  ...props
}) => {
  return (
    <StepIconRoot
      ownerState={{ active }}
      stepCircleSize={stepCircleSize}
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
  stepCircleSize?: number;
  activeLineColor?: string;
  completedLineColor?: string;
  defaultLineColor?: string;
}

export const Stepper = React.forwardRef<HTMLDivElement, StepperProps>(
  ({ steps, stepCircleSize, handleStep, ...props }, ref) => {
    const [stepUID] = React.useState(() => uuidv4());
    return (
      <MuiStepper
        ref={ref}
        alternativeLabel
        // orientation="vertical"
        connector={
          <StepConnector
            activeLineColor={props.activeLineColor}
            completedLineColor={props.completedLineColor}
            defaultLineColor={props.defaultLineColor}
            stepCircleSize={stepCircleSize}
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
                      stepCircleSize={stepCircleSize}
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
  stepCircleSize: 30,
};
