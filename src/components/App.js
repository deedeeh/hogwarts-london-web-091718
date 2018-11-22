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
      filteredHogs: [], 
      filterByGreased: false,
      sortByWeight: false,
      sortByName: false
    }
  }

  componentDidMount = () => {
    this.setState({
      hogs: hogs
    })
  }

  // filterHogs = () => {
  //   this.setState({
  //     filteredHogs: this.state.hogs.filter(hog => hog.greased === true),
  //     filterByGreased: !this.state.filterByGreased
  //   })
  // }

  // sortWeight = () => {
  //   const hogsCopy = [...this.state.hogs]
  //   this.setState({
  //     filteredHogs: this.state.hogs.sort((a, b) => a.weight - b.weight),
  //     sortByWeight: !this.state.sortByWeight
  //   })
  // }

  // sortName = () => {
  //   this.setState({
  //     filteredHogs: this.state.hogs.sort('name'),
  //     sortByName: !this.state.sortByName
  //   })
  // }

  filterHogs = () => {
    let arr = this.state.filteredHogs.length > 0 ? [...this.state.filteredHogs] : [...this.state.hogs];
    this.setState({
      filteredHogs: arr.filter(hogs => hogs.greased === true),
      filterByGreased: !this.state.filterByGreased
    })
  }

  sortWeight = () => {
    let arr = this.state.filteredHogs.length > 0 ? [...this.state.filteredHogs] : [...this.state.hogs];
    this.setState({
      filteredHogs: arr.sort((a,b) => (a.weight > b.weight) ? 1 : ((b.weight > a.weight) ? -1 : 0)),
      sortByWeight: !this.state.sortByWeight
    })
  }

  sortName = () => {
    let arr = this.state.filteredHogs.length > 0 ? [...this.state.filteredHogs] : [...this.state.hogs];
    this.setState({
      filteredHogs: arr.sort((a,b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0)),
      sortByName: !this.state.sortByName
    })
  }

  getArrayHogs = () => {
    return (this.state.filterByGreased || this.state.sortByName || this.state.sortByWeight)
    ? this.state.filteredHogs
    : this.state.hogs
  }

  // handleChange = event => {
  //   this.setState({
  //     [event.target.name]: event.target.value
  //   })
  // }


  render() {
    return (
      <div className="App">
          < Nav />
          <Menu>
            <Menu.Item>
              <Checkbox label='Greased?' name='filterByGreased' toggle onClick={() => this.filterHogs()}></Checkbox>
            </Menu.Item>
            <Menu.Item>
              <Checkbox label='Sort By Weight?' name='sortByWeight' toggle onClick={() => this.sortWeight()}></Checkbox>
            </Menu.Item>
            <Menu.Item>
              <Checkbox label='Sort By Name?' name='sortByName' toggle onClick={() => this.sortName()}></Checkbox>
            </Menu.Item>
          </Menu>
          <HogList hogs={ this.getArrayHogs() }/>
      </div>
    )
  }
}

export default App;
