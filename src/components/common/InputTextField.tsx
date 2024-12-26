import { styled } from '@mui/material';
import { ChangeEventHandler } from 'react';

type Props = {
  placeholder?: string;
  value?: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
};

const InputTextField: React.FC<Props> = ({ placeholder, value, onChange }) => {
  return (
    <StyledInput
      type="text"
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
};
export default InputTextField;

const StyledInput = styled('input')(({ theme }) => ({
  backgroundColor: theme.palette.primary.light,
  border: '1px solid',
  borderColor: theme.palette.primary.light,
  borderRadius: 12,
  fontSize: theme.typography.size.md,
  height: 56,
  lineHeight: 1,
  outline: 'none',
  padding: '20px 18px',
  width: '100%',
  '&::placeholder': {
    color: theme.palette.custom.gray,
    fontSize: theme.typography.size.md,
  },
  '&:focus': {
    borderColor: theme.palette.primary.main,
  },
  [theme.breakpoints.down('sm')]: {},
}));
