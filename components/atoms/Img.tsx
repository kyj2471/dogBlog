import React, { memo } from 'react';
import * as S from '../../styles/globalStyles';

interface ImgProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  onClick?: React.MouseEventHandler<HTMLImageElement> | undefined;
  className?: string;
  type?: string;
}

const Img = memo(
  ({ src, alt, width, height, onClick, className, type }: ImgProps) => (
    <S.ImgStyle
      type={type}
      className={className}
      src={src}
      alt={alt}
      onClick={onClick}
      width={width}
      height={height}
    />
  )
);

export default Img;
