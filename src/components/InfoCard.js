import React, { Component } from 'react';
import UUID from 'uuid';

class InfoCard extends Component {

    // check to see if the value of the userInfo key is null
    checkInfo = (info) => {
        if (info) return info
        return "Not Set or Invisible."
    }

    // grab the key value pairs from the user props object
    userInfo = () => {
        let infoView = []
        for (let dataKey in this.props.user) {
            infoView.push([dataKey, this.checkInfo(this.props.user[dataKey])])
        }
        return infoView;
    }

    // map through the collected key value pairs, and render an html view format for info
    userInfoMapper = () => {
        return this.userInfo().map(info => <div key={UUID()}>
            <h4>{this.upCaseElement(info[0]).split('_').join(' ')}</h4>
            {info[1]}
        </div>)
    }

    // make the first letter of the key uppercase, for some decent formatting when rendered
    upCaseElement = (element) => {
        return element.charAt(0).toUpperCase() + element.slice(1)
    }

    render() {
        return (
            <div>
                <h2>Searched For: {this.props.user.login}</h2>
                
                <a href={this.props.user.html_url} target="_blank">
                    <h3>- Visit {this.props.user.login}'s Login Page -</h3>
                </a>

                {this.userInfoMapper()}

            </div>
        );
    }
}

export default InfoCard;
