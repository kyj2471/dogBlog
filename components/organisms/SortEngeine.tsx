import React, { memo } from 'react';
import Button from '../atoms/Button';
import Input from '../atoms/Input';

interface sortProps {
  handleChange: React.ChangeEventHandler<HTMLInputElement>;
  searchById: React.MouseEventHandler<HTMLButtonElement>;
  handleOrderAsc: React.MouseEventHandler<HTMLButtonElement>;
  handleOrderDesc: React.MouseEventHandler<HTMLButtonElement>;
}

const SortEngeine = memo(
  ({
    handleChange,
    searchById,
    handleOrderAsc,
    handleOrderDesc
  }: sortProps) => (
    <>
      <Input handleChange={handleChange} type="text" placeholder="search" />
      <Button type="searchBtn" onClick={searchById} name="search" />
      <Button type="filterBtn" onClick={handleOrderAsc} name="asc" />
      <Button type="filterBtn" onClick={handleOrderDesc} name="desc" />
    </>
  )
);
export default SortEngeine;
