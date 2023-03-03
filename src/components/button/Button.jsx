import PropTypes from 'prop-types';
import { LoadButton } from './Button.styled';

function Button(props) {
  const { handleLoadMore } = props;
  return (
    <LoadButton type="button" onClick={handleLoadMore}>
      Load more
    </LoadButton>
  );
}

Button.propTypes = {
  handleLoadMore: PropTypes.func,
};

export default Button;
