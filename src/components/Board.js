import React, { Component } from 'react';
import Column from './Column';

export class Board extends Component {
  keyUp = e => {
    if (e.keyCode === 13 && e.target.value) {
      this.props.createColumn.bind(this, e.target.value)();
      e.target.value = '';
    }
  };

  render() {
    return (
      <div style={boardStyle}>
        {this.props.board.map((column, index) => (
          <Column
            column={column}
            createTask={this.props.createTask}
            moveColumn={this.props.moveColumn}
            key={index}
            columnIndex={index}
          />
        ))}

        <input
          type="text"
          style={newСolumnStyle}
          placeholder="New column name"
          onKeyUp={this.keyUp}
        />
      </div>
    );
  }
}

const boardStyle = {
  display: 'flex',
  flexDirection: 'row',
  justifyСontent: 'flex-start',
  alignItems: 'flex-start',
  backgroundColor: '#282c34',
  height: '100vh',
  padding: '1rem',
  boxSizing: 'border-box',
  width: '100%',
  overflow: 'auto',
};

const newСolumnStyle = {
  display: 'block',
  padding: '1rem',
  marginRight: '1rem',
  backgroundColor: '#dae1e7',
  height: 'max-content',
  borderRadius: '0.5rem',
  width: '350px',
  textAlign: 'left',
  boxShadow: '0 2px 4px 0 rgba(0, 0, 0, .1)',
  fontWeight: '600',
  outline: 'none',
  border: 'none',
  fontSize: '100%',
  boxSizing: 'inherit',
  minWidth: '350px',
};

export default Board;
