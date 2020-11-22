import React from "react";
import { useForm, ErrorMessage } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useStateMachine } from "little-state-machine";
import updateAction from "../updateAction";


const Step2 = props => {
  const { state, action } = useStateMachine(updateAction);
  const { handleSubmit, register, errors } = useForm({
    defaultValues: state.yourDetails
  });
  const navigate = useNavigate()

  const onSubmit = data => {
    action(data);
    navigate('/result')

  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
   
  <div className="form-group">
  <label>
        Age:
      </label>

        <input
          name="age"
          type="number"
          className='form-control'
          ref={register({
            required: true,
            min:{
              value:18,
            }
          })}
        />
        {errors.age && errors.age.type ==='required' && (
          <h6> *This Field is Required</h6>
        )}
         {errors.age && errors.age.type ==='min' && (
          <h6> *You are Required to be Above 18</h6>
        )}
  </div>
  <div className="form-group">
   
  <label>
        Years of experience:
      </label>
        
        <input
          name="yearsOfExp"
          type="number"
          className='form-control'
          ref={register({
            requiredt:true,
            min:{
              value:3,
            }
          })}
        />
        {errors.yearsOfExp && errors.yearsOfExp.type ==='required' && (
          <h6> *This Field is Required</h6>
        )}
        {errors.yearsOfExp && errors.yearsOfExp.type ==='min' && (
          <h6> *you need 3 year of exp.</h6>
        )}
  </div>

  <button type="submit" className="btn btn-primary">Submit</button>
</form>

  );
};

export default Step2;
