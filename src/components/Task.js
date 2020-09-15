import React, { Component } from 'react';
import Modal from 'react-modal';

export class Task extends Component {
  constructor(props) {
    super(props);
    this.state = { showModal: false };
  }

  openModal = () => {
    this.setState({ showModal: true });
  };

  closeModal = () => {
    this.setState({ showModal: false });
  };

  render() {
    return (
      <React.Fragment>
        <div style={taskStyle} onClick={this.openModal}>
          <span style={{ margin: '0', width: '100%' }}>
            {this.props.task.title}
          </span>
          {this.props.task.description && (
            <p
              style={{
                margin: '.25rem 0 0 0',
                width: '100%',
                fontWeight: '400',
                fontSize: '.875rem',
              }}
            >
              {this.props.task.description}
            </p>
          )}
        </div>
        <Modal
          isOpen={this.state.showModal}
          onRequestClose={this.closeModal}
          shouldCloseOnOverlayClick={true}
          style={{
            overlay: {
              backgroundColor: 'rgba(0, 0, 0, 0.8)',
            },
            content: {
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translateY(-50%) translateX(-50%)',
              width: '60%',
              height: '60%',
            },
          }}
        >
          <div style={{ fontWeight: '700', marginBottom: '10px' }}>
            {this.props.task.title}
          </div>
          <div>{this.props.task.description}</div>
        </Modal>
      </React.Fragment>
    );
  }
}

const taskStyle = {
  display: 'flex',
  alignItems: 'center',
  flexWrap: 'wrap',
  margin: '0 0 0.5rem 0',
  backgroundColor: '#fff',
  borderRadius: '0.5rem',
  padding: '0.5rem',
  boxShadow: '0 2px 4px 0 rgba(0, 0, 0, .1)',
  height: 'min-content',
  boxSizing: 'inherit',
  textDecoration: 'none',
  color: 'inherit',
};

export default Task;
