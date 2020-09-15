import React from 'react';

export default function Drag(props) {
  const onDrag = e => {
    // e.target.style.opacity = 0.8;
    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.dropEffect = 'move';
    e.dataTransfer.setData('payload', JSON.stringify(props.transferData));
  };

  return (
    <div
      draggable
      onDragStart={onDrag}
      onDragOver={e => e.preventDefault()}
      onDragEnter={e => e.preventDefault()}
    >
      {props.children}
    </div>
  );
}
