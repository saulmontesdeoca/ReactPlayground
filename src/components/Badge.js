import React from 'react';
import confLogo from '../images/badge-header.svg';
import '../pages/styles/Badge.css';

class Badge extends React.Component {
    render(){
        return (
            <div className="Badge">
                <div className="Badge__header">
                    <img src={confLogo} alt="imagen de portada"/>
                </div>
                <div className="Badge__section-name">
                    <img className="Badge__avatar" src={this.props.avatarUrl} alt="Foto de perfil"/>
                    <h1>{this.props.firstName} <br/>{this.props.lastName}</h1>
                </div>
                <div className="Badge__section-info">
                    <p>{this.props.info}</p>
                    <p>@{this.props.twitter}</p>
                </div>
                <div className="Badge__footer">
                    <p>#{this.props.hashtag}</p>
                </div>
            </div>
        )
    }
}

export default Badge;