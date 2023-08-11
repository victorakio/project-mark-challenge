import { Typography } from '@components/Typography';
import * as S from './styles';
import { InputHTMLAttributes } from 'react';

interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
  id: string;
  checked: boolean;
  onChange: () => void;
  label: string;
}

export const Checkbox: React.FC<CheckboxProps> = ({
  id,
  checked,
  label,
  onChange,
  ...rest
}) => {
  return (
    <S.CheckboxWrapper $isActive={checked}>
      <S.Checkbox id={id} checked={checked} onChange={onChange} {...rest} />

      <Typography>{label}</Typography>
    </S.CheckboxWrapper>
  );
};
