import React from 'react';
import Searchbar from '../../components/searchbar/searchbar';
import Cards from '../../components/cards/cards';
import response from '../../mock/response';

class Main extends React.Component {
  render() {
    return (
      <>
        <h2>Main page</h2>
        <Searchbar />
        <Cards {...response} />
      </>
    );
  }
}
export default Main;
