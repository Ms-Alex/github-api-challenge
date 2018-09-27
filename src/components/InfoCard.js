import React, { Component } from 'react';

class InfoCard extends Component {

    checkInfo = (info) => {
        if (info) return info
        return "Not Set or Invisible."
    }

    render() {
        return (
            <div>
                <h2>Searched For: {this.props.user.login}</h2>

                <h4>Name: </h4> 
                {this.checkInfo(this.props.user.name)}

                <h4>Email: </h4>
                {this.checkInfo(this.props.user.email)}

                <h4>Company: </h4>
                {this.checkInfo(this.props.user.company)}

                <h4>Number of Public Repos: </h4>
                {this.checkInfo(this.props.user.public_repos)}

                <a href={this.props.user.html_url} target="_blank">
                    <h3>- Visit {this.props.user.login}'s Login Page -</h3>
                </a>

            </div>
        );
    }
}

export default InfoCard;
