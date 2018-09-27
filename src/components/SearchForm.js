import React, { Component } from 'react';

class SearchForm extends Component {
    
    state = {
        username: '',
    }

    handleChange = (event) => {
        this.setState({
            username: event.target.value.toLowerCase(),
        });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.fetchUser(this.state.username);
        this.setState({
            username: '',
        });
    }

    render() {
        return (
            <div>
                <h2>Search by Github Username:</h2>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" placeholder="username" required value={this.state.username} onChange={this.handleChange} />
                    <br />
                    <br />
                    <input type="submit" value="Search" />
                </form>
            </div>
        );
    }

}

export default SearchForm;
