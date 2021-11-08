import React, { memo } from 'react';
import Img from '../atoms/Img';
import Paragraph from '../atoms/Paragraph';

interface CardProps {
  url: string;
  breedGroup?: string;
  name?: string;
  width: number;
  height: number;
}
const Card = memo(({ url, breedGroup, name, width, height }: CardProps) => (
  <>
    <Img src={url} type="cardImg" alt="test" width={width} height={height} />
    {breedGroup && <Paragraph text={`breed:${breedGroup}`} />}
    {name && <Paragraph text={`name:${name}`} />}
  </>
));
export default Card;
