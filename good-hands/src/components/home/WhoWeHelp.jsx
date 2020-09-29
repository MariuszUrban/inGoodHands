import React, { Component } from 'react';

import { fetchStats, foundations, local, ngo } from '../../services/statsService'

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
        <button onClick={() => this.changeCategory(NGOS)}>CHANGE CATEGORY</button>
        <button onClick={() => this.changePage(1)}>CHANGE PAGE</button>
        {
          currentItems.map(item => <div>{item.id + item.desc}</div>)
        }
      </>

      //   <div name='who-we-help' className='who-we-help-container col-lg-12'>
      //   <div>
      //     <h1>Komu pomagamy?</h1>
      //     <img src={Decoration} alt="decoration" />
      //   </div>
      //   <div>
      //     <button>
      //       <span>Fundacjom</span>
      //     </button>
      //     <button>
      //       <span>Organizacjom pozarządowym</span>
      //     </button>
      //     <button>
      //       <span>Lokalnym zbiórkom</span>
      //     </button>
      //   </div>
      //   <div>
      //     <p>
      //       opisy rodzajów działalności
      //     </p>
      //   </div>
      //   <div className='helpers-list'>
      //           conditional rendering
      //   </div>
      // </div>
    )
  }
}

