import React, { Component } from 'react';

class SearchForm extends Component {
    // state for form
    state = {
        username: '',
    }

    // have a controlled input
    handleChange = (event) => {
        this.setState({
            username: event.target.value.toLowerCase(),
        });
    }

    // handle submit button once clicked
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
