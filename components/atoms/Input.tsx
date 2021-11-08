import React, { memo } from 'react';
import styled from 'styled-components';

interface InputProps {
  type: string;
  placeholder?: string;
  handleChange: React.ChangeEventHandler<HTMLInputElement> | undefined;
  accept?: string;
}

const Input = memo(
  ({ type, placeholder, handleChange, accept }: InputProps) => (
    <MainPageSearchInput
      onChange={handleChange}
      type={type}
      placeholder={placeholder}
      accept={accept}></MainPageSearchInput>
  )
);

export default Input;

const MainPageSearchInput = styled.input`
  margin-right: 50px;
  margin-top: 30px;
  width: 300px;
  height: 40px;
  padding: 8px 9px 10px 15px;
  border: 1px solid #dbdbdb;
  border-radius: 4px;
`;
