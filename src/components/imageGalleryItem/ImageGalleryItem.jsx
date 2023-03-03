import PropTypes from 'prop-types';
import { Component } from 'react';
import Modal from '../modal/Modal';
import { 
  GalleryItem, 
  ImgGallery 
} from './ImageGalleryItem.styled';

class ImageGalleryItem extends Component {
  constructor() {
    super();
    this.state = {
      showModal: false,
    };
  }

  toggleModal = () => {
    this.setState(prevState => ({
      showModal: !prevState.showModal,
    }));
  };

  render() {
    const { id, tags, url, webUrl } = this.props;
    const { showModal } = this.state;
    return (
      <>
        <GalleryItem key={id}>
          <ImgGallery src={webUrl} alt={tags} onClick={this.toggleModal} />
        </GalleryItem>
        {showModal && (
          <Modal onClose={this.toggleModal} tags={tags} url={url} />
        )}
      </>
    );
  }
}
ImageGalleryItem.propTypes = {
  id: PropTypes.number.isRequired,
  tags: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  webUrl: PropTypes.string.isRequired,
};

export default ImageGalleryItem;
