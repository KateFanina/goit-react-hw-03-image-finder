import PropTypes from 'prop-types';
import { MdSearch } from 'react-icons/md';

import {
  SearchForm,
  Input,
  Label,
  SearchButton,
  SearchHeader,
} from './Searchbar.styled';

function Searchbar(props) {
  const { handleSubmit } = props;
  return (
    <SearchHeader>
      <SearchForm onSubmit={handleSubmit}>
        <SearchButton type="submit">
          <>
            <MdSearch style={{ width: 40, height: 40 }} />
            <Label>Search</Label>
          </>
        </SearchButton>

        <Input
          type="text"
          autocomplete="off"
          autoFocus
          name="search"
          placeholder="Search images and photos"
        />
      </SearchForm>
    </SearchHeader>
  );
}

Searchbar.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};

export default Searchbar;
