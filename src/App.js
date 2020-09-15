import React, { Component } from 'react';
import Board from './components/Board';
import { v4 } from 'uuid';

export class App extends Component {
  state = {
    isTaskOpen: false,
    board: [
      {
        name: 'Work',
        tasks: [
          {
            id: v4(),
            title: 'buy wine',
            description: 'preferable new zealand',
          },
          {
            id: v4(),
            title: 'meeting with boss',
            description: 'do not be late!',
          },
        ],
      },
      {
        name: 'Music',
        tasks: [
          {
            id: v4(),
            title: 'cleaning house',
            description: '',
          },
          {
            id: v4(),
            title: 'learning new song',
            description: '',
          },
        ],
      },
    ],
  };

  createTask = (taskName, columnIndex) => {
    this.setState({
      board: this.state.board.map((column, index) => {
        if (index === columnIndex) {
          column.tasks.push({ id: v4(), title: taskName, description: '' });
        }
        return column;
      }),
    });
  };

  createColumn = columnName => {
    this.setState({
      board: [...this.state.board, { name: columnName, tasks: [] }],
    });
  };

  moveColumn = (fromColumnIndex, toColumnIndex) => {
    const columnList = this.state.board;
    const columnToMove = columnList.splice(fromColumnIndex, 1)[0];
    columnList.splice(toColumnIndex, 0, columnToMove);
    this.setState({ board: columnList });
  };

  render() {
    return (
      <Board
        board={this.state.board}
        createTask={this.createTask}
        createColumn={this.createColumn}
        isTaskOpen={this.state.isTaskOpen}
        moveColumn={this.moveColumn}
      />
    );
  }
}

export default App;
