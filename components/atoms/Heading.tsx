import React, { memo } from 'react';

interface HeadingProps {
  text: string;
}

const Heading = memo(({ text }: HeadingProps) => <h1>{text}</h1>);

export default Heading;
