import React, { memo } from 'react';

interface ParagraphProps {
  text: string;
}

const Paragraph = memo(({ text }: ParagraphProps) => <p>{text}</p>);

export default Paragraph;
