import React from 'react';

export const handleDrag = (e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
};
export const handleDragIn = (e: React.DragEvent) => {};
export const handleDragOut = (e: React.DragEvent) => {};
export const handleDrop = (e: React.DragEvent) => {};
