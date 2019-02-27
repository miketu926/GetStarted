import React from 'react';
import { connect } from 'react-redux';

const msp = ({entities}) => {
  return({

  });
};

const mdp = (dispatch) => {
  return({

  });
};

class SearchBar extends React.Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit() {
    e.preventDefault();
    // handle's the input data and fetches/queries from backend
  }


  render() {
    return (
      <header className='nav-bar'>
        <form onSubmit={this.handleSubmit}>
          <input type="text" placeholder="Search.." name="search"></input>
          <button type="submit">Search</button>
        </form>
        <button id='search-exit' onClick={this.props.handleSearchExit}>X</button>
      </header>
    )
  }
  
}

export default connect(msp, mdp)(SearchBar);