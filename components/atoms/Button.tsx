import React, { memo } from 'react';
import * as S from '../../styles/globalStyles';

interface ButtonProps {
  name: string;
  onClick: React.MouseEventHandler<HTMLButtonElement> | undefined;
  type?: string;
  style?: any;
}

const Button = memo(({ name, onClick, type }: ButtonProps) => (
  <S.MainEngineButton type={type} onClick={onClick}>
    {name}
  </S.MainEngineButton>
));

export default Button;
