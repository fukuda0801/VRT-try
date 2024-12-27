import { styled } from '@mui/material/styles';
import { ReactNode } from 'react';
import MuiButton from '@mui/material/Button';

type Props = {
  children: ReactNode;
  variant: 'text' | 'outlined' | 'contained';
  disabled?: boolean;
};

const Button: React.FC<Props> = ({ children, variant, disabled }) => {
  return (
    <StyledButton variant={variant} disabled={disabled}>
      {children}
    </StyledButton>
  );
};
export default Button;

const StyledButton = styled(MuiButton)(({ theme }) => ({
  borderRadius: 12,
  borderColor: theme.palette.primary.main,
  borderWidth: 1,
  fontSize: theme.typography.size.lg,
  fontWeight: theme.typography.fontWeightBold,
  height: 48,
  padding: 14,
  '&:hover': {
    borderWidth: 2,
  },
}));
