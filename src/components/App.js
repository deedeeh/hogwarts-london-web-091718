import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import hogs from '../porkers_data';
import HogList from './HogList';
import { Menu, Checkbox } from 'semantic-ui-react'

class App extends Component {
  constructor() {
    super();
    this.state = {
      hogs: [],
      filterByGreased: false,
      sortByWeight: false,
      sortByName: false
    }
  }

  componentDidMount = () => {
    this.setState({
      hogs
    })
  }

  getFilteredAndSortedHogs = () => {
    const filteredHogs = this.state.filterByGreased ?
    this.state.hogs.filter(hog => hog.greased) :
    this.state.hogs.slice()

    if(this.state.sortByWeight) {
      filteredHogs.sort((a, b) => a.weight - b.weight)
    }

    if(this.state.sortByName) {
      filteredHogs.sort((a, b) => a.name.localeCompare(b.name))
    }

    return filteredHogs
  }

  filterHogs = () => {
    this.setState({
      filterByGreased: !this.state.filterByGreased
    })
  }

  sortWeight = () => {
    this.setState({
      sortByWeight: !this.state.sortByWeight
    })
  }

  sortName = () => {
    this.setState({
      sortByName: !this.state.sortByName
    })
  }

  render() {
    return (
      <div className="App">
          < Nav />
          <Menu>
            <Menu.Item>
              <Checkbox toggle label='Greased?' id='filterByGreased' onClick={() => this.filterHogs()}></Checkbox>
            </Menu.Item>
            <Menu.Item>
              <Checkbox toggle label='Sort By Weight?' id='sortByWeight' onClick={() => this.sortWeight()}></Checkbox>
            </Menu.Item>
            <Menu.Item>
              <Checkbox toggle label='Sort By Name?' id='sortByName' onClick={() => this.sortName()}></Checkbox>
            </Menu.Item>
          </Menu>
          < HogList hogs={this.getFilteredAndSortedHogs()} />
      </div>
    )
  }
}

export default App;
