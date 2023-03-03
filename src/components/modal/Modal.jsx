import { Component } from 'react';
import { createPortal } from 'react-dom';
import { Overlay, DivModal } from './Modal.styled';

const modalRoot = document.querySelector('#modal-root');

class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = e => {
    if (e.code === 'Escape') {
      this.props.onClose();
    }
  };

  handleBackdropClick = event => {
    if (event.currentTarget === event.target) {
      this.props.onClose();
    }
  };

  render() {
    const { url, tags } = this.props;
    return createPortal(
      <Overlay onClick={this.handleBackdropClick}>
        <DivModal>
          <img src={url} alt={tags} />
        </DivModal>
      </Overlay>,
      modalRoot
    );
  }
}

export default Modal;
