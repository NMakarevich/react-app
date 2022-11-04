import React from 'react';
import Searchbar from '../../components/searchbar/searchbar';
import Cards from '../../components/cards/cards';
import data from '../../mock/data';

class Main extends React.Component {
  render() {
    return (
      <>
        <h2>Main page</h2>
        <Searchbar />
        <Cards data={data} />
      </>
    );
  }
}
export default Main;
