import * as S from './styles';

interface ButtonProps {
  text: string;
  handleClick: () => void;
}

export const Button: React.FC<ButtonProps> = ({ text, handleClick }) => {
  return <S.ButtonWrapper onClick={handleClick}>{text}</S.ButtonWrapper>;
};
