import { Component } from 'react';
import Searchbar from './searchbar';
import ImageGallery from './imageGallery';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
    };
  }

  handleSubmit = event => {
    event.preventDefault();
    const name = event.target.search.value;
    this.setState({
      searchText: name,
    });
  };

  render() {
    const { searchText } = this.state;
    return (
      <div
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101',
        }}
      >
        <Searchbar handleSubmit={event => this.handleSubmit(event)} />
        <ImageGallery searchText={searchText} />
      </div>
    );
  }
}

export default App;
