import React from 'react';
 class BadgeForm extends React.Component{
     state={
         jobTitle: 'Web Developer'
     }
     handleChange = (event) =>{
        // console.log({
        //     name: event.target.name,
        //     value: event.target.value
        // });
        this.setState({
            [event.target.name]: event.target.value
        });
     }
     handleClick = (event) =>{
        console.log('Button clicked');
     }
     handleSubmit = (event) =>{
         event.preventDefault();
         console.log('Button submitted');
         console.log(this.state)
     }
     render(){
         return(
             <div>
                <h1>New Attendant</h1>
               <form onSubmit={this.handleSubmit}>
                  <div className="form-group">
                     <label>First Name</label>
                     <input onChange={this.handleChange}
                     name='firstName' 
                     className='form-control'
                     type="text"/>
                 </div>
                 <div className="form-group">
                     <label>Last Name</label>
                     <input onChange={this.handleChange}
                     name='lastName' 
                     className='form-control'
                     type="text"/>
                 </div>
                 <div className="form-group">
                     <label>Email Name</label>
                     <input onChange={this.handleChange}
                     name='email' 
                     className='form-control'
                     type="email"/>
                 </div>
                 <div className="form-group">
                     <label>Job Title</label>
                     <input onChange={this.handleChange}
                     name='jobTitle' 
                     className='form-control'
                     type="text"
                     value={this.state.jobTitle}
                     />
                 </div>
                 <div className="form-group">
                     <label>Twitter</label>
                     <input onChange='@{this.handleChange}'
                     name='twitter' 
                     className='form-control'
                     type="text"/>
                 </div>
                 <button 
                 onClick={this.handleClick} 
                 className="btn btn-primary"
                 >Save</button>
               </form>
             </div>
         );
     }
 }
 export default BadgeForm;