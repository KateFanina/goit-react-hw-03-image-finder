import { ThreeDots } from 'react-loader-spinner';
import { DotsLoader } from './Loader.styled';

function Loader(props) {
  return (
    <DotsLoader>
      <ThreeDots
        ariaLabel="three-dots-loading"
        color="#3f51b5"
        height="40rem"
        radius="9"
        visible={true}
        width="40rem"
      />
    </DotsLoader>
  );
}

export default Loader;
