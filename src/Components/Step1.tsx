import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useStateMachine } from "little-state-machine";
import updateAction from "../updateAction";

export default () => {
  const { state, action } = useStateMachine(updateAction);
  const { handleSubmit, errors, register } = useForm({
    defaultValues: state.yourDetails
  });
  const navigate = useNavigate()
  interface Data{
    firstName: string,
lastName: string
  }
  const onSubmit = (data:Data) => {
    
    action(data);
    navigate('/step2')
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      

  <div className="form-group">
  <label>
        First Name:   </label>
        <input
          name="firstName"
          className='form-control'
          ref={register({ required:true })}
        />
        {errors.firstName && errors.firstName.type ==='required' && (
          <h6 className='mt-2 text-danger'> *This Field is Required</h6>
        )}
   
    
  </div>
  <div className="form-group">
  <label>
        Last Name:</label>
        <input
          name="lastName" 
          className='form-control'

          ref={register({ required:true })}
        />
        {errors.lastName && errors.lastName.type ==='required' && (
          <h6 className='mt-2 text-danger'> *This Field is Required</h6>
        )}
      
  </div>
  
  <button type="submit" className="btn btn-primary">Submit</button>
</form>


    
  );
};
