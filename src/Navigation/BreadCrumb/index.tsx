import * as React from 'react';
import { v4 as uuidv4 } from 'uuid';
import MuiBreadcrumbs, {
  BreadcrumbsProps as MuiBreadcrumbsProps,
} from '@mui/material/Breadcrumbs';
import { styled, alpha } from '@mui/material/styles';

const BreadCrumbContainer = styled(
  ({
    active,
    ...props
  }: React.HTMLProps<HTMLDivElement> & { active: boolean }) => {
    return <div {...props} />;
  }
)(({ theme, active = false }) =>
  active
    ? {
        background: alpha(theme.palette.primary.main, 0.05),
        padding: '5px 8px',
        borderRadius: '15px',
      }
    : {}
);

export interface BreadcrumbsProps extends MuiBreadcrumbsProps {
  breadcrumbs: React.ReactNode[];
  activeStyles?: React.CSSProperties;
}

export const Breadcrumbs = React.forwardRef<HTMLElement, BreadcrumbsProps>(
  ({ breadcrumbs, activeStyles, ...props }, ref) => {
    const [itemUID] = React.useState(() => uuidv4());

    return (
      <MuiBreadcrumbs ref={ref} separator=">" {...props}>
        {breadcrumbs.map((item, index) => {
          let activeSty: React.CSSProperties = {};
          let active: boolean = index === breadcrumbs.length - 1;
          if (index == breadcrumbs.length - 1) {
            activeSty = { ...activeStyles };
          }
          return (
            <BreadCrumbContainer
              active={active}
              key={itemUID + index}
              style={{ ...activeSty }}
            >
              {item}
            </BreadCrumbContainer>
          );
        })}
      </MuiBreadcrumbs>
    );
  }
);

export default Breadcrumbs;
