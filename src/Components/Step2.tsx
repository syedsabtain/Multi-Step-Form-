import React from "react";
import { useForm,  } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useStateMachine } from "little-state-machine";
import updateAction from "../updateAction";


const Step2 = () => {
  const { state, action } = useStateMachine(updateAction);
  const { handleSubmit, register, errors } = useForm<any>({
    defaultValues: state.yourDetails
  });
  const navigate = useNavigate()

  const onSubmit = (data:any) => {
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
          ref={register({required:true,min:{value:18,}})}
        />
        {errors.age && errors.age.type ==='required' && (
          <h6 className='mt-2 text-danger'> *This Field is Required</h6>
        )}
         {errors.age && errors.age.type ==='min' && (
          <h6 className='mt-2 text-danger'> *You are Required to be Above 18</h6>
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
          ref={register({requiredt:true,min:{value:3,}})}
        />
        {errors.yearsOfExp && errors.yearsOfExp.type ==='required' && (
          <h6 className='mt-2 text-danger'> *This Field is Required</h6>
        )}
        {errors.yearsOfExp && errors.yearsOfExp.type ==='min' && (
          <h6 className='mt-2 text-danger'> *you need 3 year of exp.</h6>
        )}
  </div>

  <button type="submit" className="btn btn-primary">Submit</button>
</form>

  );
};

export default Step2;
