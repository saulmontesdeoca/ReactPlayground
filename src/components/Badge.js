import React from 'react';
import confLogo from '../images/badge-header.svg'

class Badge extends React.Component {
    render(){
        return (
            <div>
                <div>
                    <img src={confLogo} alt="imagen de portada"/>
                </div>
                <div>
                    <img src="https://www.gravatar.com/avatar?d=identicon" alt="Foto de perfil"/>
                    <h1>Saul <br/>Montes De Oca</h1>
                </div>
                <div>
                    <p>Software Engineer</p>
                    <p>@saul_mdo</p>
                </div>
                <div>
                    <p>#CampusParty</p>
                </div>
            </div>
        )
    }
}

export default Badge;