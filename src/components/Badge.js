import React from 'react';
import confLogo from '../images/badge-header.svg';
import '../pages/styles/Badges.css';

class Badge extends React.Component {
    render(){
        return (
            <div className="Badge">
                <div className="Badge__header">
                    <img src={confLogo} alt="imagen de portada"/>
                </div>
                <div className="Badge__section-name">
                    <img className="Badge__avatar" src="https://www.gravatar.com/avatar?d=identicon" alt="Foto de perfil"/>
                    <h1>Saul <br/>Montes De Oca</h1>
                </div>
                <div className="Badge__section-info">
                    <p>Software Engineer</p>
                    <p>@saul_mdo</p>
                </div>
                <div className="Badge__footer">
                    <p>#CampusParty</p>
                </div>
            </div>
        )
    }
}

export default Badge;