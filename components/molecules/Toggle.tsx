import React, { memo, useState, useEffect, MouseEvent } from 'react';
import Img from '../atoms/Img';
import * as TYPE from '../../interface/index';

interface ToggleDataProps {
  src1: string;
  src2: string;
  toggle?: boolean;
  id?: string;
  likeArr?: TYPE.likeArrProps;
  handleEnroll?: any;
  handleCancel?: any;
}

const Toggle = memo(
  ({
    src1,
    src2,
    handleEnroll,
    handleCancel,
    id,
    likeArr
  }: ToggleDataProps) => {
    const [toggle, setToggle] = useState<boolean>(false);
    const [deleteId, setDeleteId] = useState<number>();
    useEffect(() => {
      if (id) {
        if (toggle) {
          return handleEnroll(id).then((res: number) => setDeleteId(res));
        }
        if (deleteId) handleCancel(deleteId);
      }
    }, [id, toggle]);

    useEffect(() => {
      if (likeArr?.length > 0) setToggle(true);
    }, [likeArr]);

    const handleToggle = (e: MouseEvent) => {
      e.preventDefault();
      setToggle(!toggle);
    };

    return (
      <>
        <Img
          className="hoverImg"
          onClick={handleToggle}
          src={toggle ? src1 : src2}
          alt="test"
          width={15}
          height={15}
        />
      </>
    );
  }
);

export default Toggle;
