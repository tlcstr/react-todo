import React from 'react';

export default function Drag(props) {
  const onDrop = e => {
    const transferData = JSON.parse(e.dataTransfer.getData('payload'));
    props.drop(transferData);
  };

  return (
    <div
      onDrop={onDrop}
      onDragOver={e => e.preventDefault()}
      onDragEnter={e => e.preventDefault()}
    >
      {props.children}
    </div>
  );
}
