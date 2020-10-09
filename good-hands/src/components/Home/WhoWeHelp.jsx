import React, { Component } from 'react';

import { fetchStats } from '../../services/statsService'

const FOUNDATIONS = 'foundations';
const NGOS = 'ngo';
const LOCAL = 'local';

const PAGE_LENGTH = 3;

export default class WhoWeHelp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentCategory: FOUNDATIONS,
      currentSubPage: 0,
      stats: {
        [FOUNDATIONS]: [],
        [NGOS]: [],
        [LOCAL]: []
      },
    };
  }

  changeCategory = (categoryName) => {
    this.setState({ currentCategory: categoryName, currentSubPage: 0 });
  };

  changePage = (pageNo) => {
    this.setState({ currentSubPage: pageNo });
  };

  componentDidMount() {
    fetchStats().then((stats) => {
      this.setState({ stats });
    });
  }

  render() {
    const categoryItems = this.state.stats[this.state.currentCategory];

    const startIndex = this.state.currentSubPage * PAGE_LENGTH;
    const endIndex = this.state.currentSubPage * PAGE_LENGTH + PAGE_LENGTH;

    const currentItems = categoryItems.slice(startIndex, endIndex);

    console.log(currentItems);

    return (
      <>
        <button onClick={() => this.changeCategory(FOUNDATIONS)}>Fundacje</button>
        <button onClick={() => this.changeCategory(NGOS)}>Organizacje pozarządowe</button>
        <button onClick={() => this.changeCategory(LOCAL)}>Lokalne zbiórki</button>
        <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, repudiandae! </p>
        <button onClick={() => this.changePage(1)}>CHANGE PAGE</button>
        {
          currentItems.map(item => <div>{item.id + item.desc}</div>)
        }
      </>
    )
  }
}

