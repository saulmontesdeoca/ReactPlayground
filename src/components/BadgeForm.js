import React from 'react';
 class BadgeForm extends React.Component{
     render(){
         return(
            //<h1>New Attendant</h1>
               <form>
                  <div className="form-group">
                     <label>First Name</label>
                     <input name='firstName' className='form-control' type="text"/>
                 </div>
               </form>
         );
     }
 }
 export default BadgeForm;