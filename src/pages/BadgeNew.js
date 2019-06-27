import React from 'react';
import header from '../images/badge-header.svg';
import Navbar from '../components/Navbar';
import Badge from '../components/Badge';
import BadgeForm from '../components/BadgeForm';
import './styles/BadgeNew.css'

class BadgeNew extends React.Component {
    state={
        form:{
            firstName:'',
            lastName:'',
            email:'',
            jobTitle:'',
            twitter:''
        }
    }
    handleChange = e=>{
        this.setState({
            form:{
                ... this.state.form,
                [e.target.name]: e.target.value,
            }
        })
    }
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
                            firstName={this.state.form.firstName}
                            lastName={this.state.form.lastName}
                            info={this.state.form.jobTitle}
                            twitter={this.state.form.twitter}
                            email={this.state.form.email}
                            hashtag='ReactRocks'
                            avatarUrl='http://bothsides.jimihendrix.com/wp-content/uploads/2017/12/COVER_BothSidesOfTheSky.jpg'
                            />
                        </div>
                        <div className='col-6'>
                            <BadgeForm 
                            onChange={this.handleChange}
                            formValues={this.state.form}
                            />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default BadgeNew;