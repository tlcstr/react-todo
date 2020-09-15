import React, { Component } from 'react';
import Task from './Task';
import Modal from 'react-modal';
import Drag from './Drag';
import Drop from './Drop';

Modal.setAppElement('#root');

export class Column extends Component {
  keyUp = e => {
    if (e.keyCode === 13 && e.target.value) {
      this.props.createTask(e.target.value, this.props.columnIndex);
      e.target.value = '';
    }
  };

  moveTaskOrColumn = transferData => {
    if (transferData.type === 'task') {
      this.moveTask(transferData);
    } else {
      this.moveColumn(transferData);
    }
  };

  moveColumn = ({ fromColumnIndex }) => {
    this.props.moveColumn(fromColumnIndex, this.props.columnIndex);
  };

  // moveTask = ({ fromColumnIndex, fromTaskIndex }) => {
  //   const fromTasks = this.board.columns[fromColumnIndex].tasks;

  //   this.$store.commit('MOVE_TASK', {
  //     fromTasks,
  //     fromTaskIndex,
  //     toTasks: this.column.tasks,
  //     toTaskIndex: this.taskIndex,
  //   });
  // };

  render() {
    return (
      <Drop drop={this.moveTaskOrColumn}>
        <Drag
          transferData={{
            type: 'column',
            fromColumnIndex: this.props.columnIndex,
          }}
        >
          <div style={columnStyle}>
            <p style={titleStyle}>{this.props.column.name}</p>
            {this.props.column.tasks.map((task, index) => (
              <Task
                task={task}
                key={index}
                taskIndex={index}
                taskId={task.id}
              />
            ))}
            <input
              type="text"
              placeholder="+ enter new task"
              style={newTaskStyle}
              onKeyUp={this.keyUp}
            />
          </div>
        </Drag>
      </Drop>
    );
  }
}

const columnStyle = {
  display: 'block',
  padding: '0.5rem',
  marginRight: '1rem',
  backgroundColor: '#dae1e7',
  height: 'max-content',
  borderRadius: '0.5rem',
  width: '350px',
  minWidth: '350px',
  textAlign: 'left',
  boxShadow: '0 2px 4px 0 rgba(0, 0, 0, .1)',
  fontWeight: '600',
  boxSizing: 'inherit',
};

const titleStyle = {
  margin: '0 0 0.5rem 0',
  fontWeight: 'bold',
};

const newTaskStyle = {
  margin: '0',
  fontWeight: '400',
  outline: 'none',
  border: 'none',
  fontSize: '100%',
  backgroundColor: 'transparent',
  padding: '0.5rem',
};

export default Column;
