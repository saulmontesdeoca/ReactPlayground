import React from 'react';
 class BadgeForm extends React.Component{
     handleChange = (event) =>{
        console.log({
            name: event.target.name,
            value: event.target.value
        });
     }
     handleClick = (event) =>{
        console.log('Button clicked');
     }
     handleSubmit = (event) =>{
         event.preventDefault();
         console.log('Button submitted');
     }
     render(){
         return(
             <div>
                <h1>New Attendant</h1>
               <form onSubmit={this.handleSubmit}>
                  <div className="form-group">
                     <label>First Name</label>
                     <input onChange={this.handleChange}
                     name='firstName' className='form-control'
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