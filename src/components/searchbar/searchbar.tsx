import React from 'react';

import './searchbar.css';

interface ComponentState {
  searchTerm: string;
}

class Searchbar extends React.Component<Record<string, unknown>, ComponentState> {
  constructor(props: never) {
    super(props);
    this.state = {
      searchTerm: this.getSearchTermFromLS(),
    };
  }

  getSearchTermFromLS = () => {
    return localStorage.getItem('searchTerm') || '';
  };

  componentWillUnmount = () => {
    localStorage.setItem('searchTerm', this.state.searchTerm || '');
  };

  handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ searchTerm: e.target.value });
  };

  render = () => {
    return (
      <div className="searchbar">
        <input
          type="text"
          className="searchbar-input"
          defaultValue={this.getSearchTermFromLS()}
          onChange={this.handleChange}
        />
        <button type="button" className="searchbar-button">
          Search
        </button>
      </div>
    );
  };
}

export default Searchbar;
