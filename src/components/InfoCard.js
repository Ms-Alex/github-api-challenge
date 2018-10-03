import React, { Component } from 'react';
import UUID from 'uuid';

class InfoCard extends Component {

    checkInfo = (info) => {
        if (info) return info
        return "Not Set or Invisible."
    }

    userInfo = () => {
        let infoView = []
        for (let dataKey in this.props.user) {
            infoView.push([dataKey, this.checkInfo(this.props.user[dataKey])])
        }
        return infoView;
    }

    upCaseElement = (element) => {
        return element.charAt(0).toUpperCase() + element.slice(1)
    }

    userInfoMapper = () => {
        return this.userInfo().map(info => <div key={UUID()}>
            <h4>{this.upCaseElement(info[0]).split('_').join(' ')}</h4>
            {info[1]}
        </div>)
    }

    render() {
        return (
            <div>
                <h2>Searched For: {this.props.user.login}</h2>

                {this.userInfoMapper()}

                <a href={this.props.user.html_url} target="_blank">
                    <h3>- Visit {this.props.user.login}'s Login Page -</h3>
                </a>

            </div>
        );
    }
}

export default InfoCard;
