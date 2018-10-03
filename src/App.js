import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import githubUsersAdapter from './githubUsersAdapter';
import SearchForm from './components/SearchForm';
import InfoCard from './components/InfoCard';

const usersAdapter = githubUsersAdapter();

class App extends Component {
  // state for app
  state = {
    userInfo: '',
  }

  // get user information from created github adapter
  fetchUser = (username) => {
    usersAdapter.getUserInfo(username).then(data => this.setState({
      userInfo: data
    }))
  }

  // based on what the state.userInfo returns, render a certain view below the search form
  renderView = () => {
    if(this.state.userInfo === '') return "No searches done, yet."
    if(this.state.userInfo.message === 'Not Found') return "* No user found with that username. Try again. *"
    return <InfoCard user={this.state.userInfo} />
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Github API Challenge</h1>
        </header>
        <SearchForm fetchUser={this.fetchUser} />
        <br />
        <hr />
        {this.renderView()}
      </div>
    );
  }
}

export default App;
