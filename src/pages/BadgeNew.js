import React from 'react';
import header from '../images/badge-header.svg';
import Navbar from '../components/Navbar';
import Badge from '../components/Badge';
import BadgeForm from '../components/BadgeForm';

class BadgeNew extends React.Component {
    render(){
        return(
            <div>
                <Navbar />
                <div className='BadgeNew__hero'>
                    <img className='img-fluid' src={header} alt='Logo'></img>
                </div>
                <div className='container'>
                    <div className='row'>
                        <div className='col-6'>
                            <Badge 
                            firstName='Saul'
                            lastName='Montes De Oca'
                            info='Computer Science Major'
                            twitter='saul_mdo'
                            hashtag='ReactRocks'
                            avatarUrl='http://bothsides.jimihendrix.com/wp-content/uploads/2017/12/COVER_BothSidesOfTheSky.jpg'
                            />
                        </div>
                        <div className='col-6'>
                            <BadgeForm />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default BadgeNew;