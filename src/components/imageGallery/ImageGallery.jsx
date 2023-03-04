import PropTypes from 'prop-types';
import { Component } from 'react';
import ImageGalleryItem from '../imageGalleryItem';
import { Gallery } from './ImageGallery.styled';
import Button from '../button';
import fetchSearchImages from '../../actions/action';
import Loader from '../loader';

class ImageGallery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      photos: [],
      page: 1,
      totalHits: 0,
      isLoading: false,
    };
  }

  componentDidUpdate(prevProps, prevState) {
    const { searchText } = this.props;
    const { page } = this.state;
    if (
      prevProps.searchText !== searchText ||
      (prevState.page !== page && page !== 1)
    ) {
      if (searchText) {
        this.setState({
          isLoading: true,
        });
        fetchSearchImages({
          imageName: searchText,
          page: prevProps.searchText !== searchText ? 1 : page,
        })
          .then(response => {
            const totalHits = response?.data?.totalHits;
            const hits = response?.data?.hits;
            const myHits = (hits || []).map(hit => ({
              id: hit.id,
              tags: hit.tags,
              url: hit.largeImageURL,
              webUrl: hit.webformatURL,
            }));
            let prevHits = prevState.photos;
            let newPage = page;
            if (prevProps.searchText !== searchText) {
              prevHits = [];
              newPage = 1;
            }
            this.setState({
              page: newPage,
              photos: [...prevHits, ...myHits],
              totalHits,
            });
          })
          .finally(() =>
            this.setState({
              isLoading: false,
            })
          );
      }
    }
  }

  render() {
    const { photos, totalHits, isLoading } = this.state;
    return (
      <>
        {isLoading && <Loader />}
        <Gallery>
          {photos.map(photo => (
            <ImageGalleryItem
              id={photo.id}
              key={photo.id}
              url={photo.url}
              webUrl={photo.webUrl}
              tags={photo.tags}
            />
          ))}
        </Gallery>
        {!!photos?.length && photos?.length < +totalHits && (
          <Button
            handleLoadMore={() => {
              console.log('hi');
              this.setState(prevState => ({
                ...prevState,
                page: prevState.page + 1,
              }));
            }}
          />
        )}
      </>
    );
  }
}

ImageGallery.propTypes = {
  searchText: PropTypes.string.isRequired,
};

export default ImageGallery;
