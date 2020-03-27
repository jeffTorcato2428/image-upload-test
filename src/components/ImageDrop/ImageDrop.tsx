import React, {
  createRef,
  ReactNode,
  useEffect,
  StyleHTMLAttributes,
  useState
} from 'react';
import styled from '@emotion/styled';

const DropWrapper = styled('div')({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  position: 'relative',
  width: '50%',
  height: '200px',
  borderStyle: 'dashed'
});

interface Props {
  children: ReactNode;
}

const ImageDrop = (props: Props) => {
  const { children } = props;
  const dropRef = createRef<HTMLDivElement>();
  const [dragging, setDragging] = useState(false);
  let dragCounter: number = 0;

  useEffect(() => {
    const div = dropRef.current;
    if (div == null) {
      throw new Error('');
    }
  });

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
  };
  const handleDragIn = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    dragCounter++;
    if (e.dataTransfer.items && e.dataTransfer.items.length > 0) {
      setDragging(true);
    }
  };
  const handleDragOut = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    dragCounter--;
    if (dragCounter === 0) {
      setDragging(false);
    }
  };
  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragging(false);
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      e.dataTransfer.clearData();
      dragCounter = 0;
    }
  };

  return (
    <DropWrapper
      ref={dropRef}
      onDragEnter={handleDragIn}
      onDragLeave={handleDragOut}
      onDragOver={handleDrag}
      onDrop={handleDrop}
    >
      {dragging && <div>Drop here to upload!</div>}
      {!dragging && <div>Drag and drop to upload!</div>}
      {children}
    </DropWrapper>
  );
};

export default ImageDrop;
