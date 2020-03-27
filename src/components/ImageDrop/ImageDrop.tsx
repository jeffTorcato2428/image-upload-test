import React, {
  createRef,
  ReactNode,
  useEffect,
  StyleHTMLAttributes
} from 'react';
import styled from '@emotion/styled';
import {
  handleDragIn,
  handleDragOut,
  handleDrag,
  handleDrop
} from '../../utils/DragUtils/DragUtils';

const DropWrapper = styled('div')({});

interface Props {
  children: ReactNode;
}

const ImageDrop = (props: Props) => {
  const { children } = props;
  const dropRef = createRef<HTMLDivElement>();

  useEffect(() => {
    const div = dropRef.current;
    if (div == null) {
      throw new Error('');
    }
  });

  return (
    <DropWrapper
      ref={dropRef}
      onDragEnter={handleDragIn}
      onDragLeave={handleDragOut}
      onDragOver={handleDrag}
      onDrop={handleDrop}
    >
      {children}
    </DropWrapper>
  );
};

export default ImageDrop;
