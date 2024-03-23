import React from 'react'
import { useForm } from 'react-hook-form'
import { MdOutlineMail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import './forgetPassword.css'
import { Link } from 'react-router-dom';
import Verification from '../Verification/Verification';



const ForgetPassword = () => {

  const { register } = useForm()
  return (
    <div className='forget-box'>
      <div className='forget-inner-box'>
      <div className='flex-1'>
        <div className='flex-2'>
        <div className='icon-box'><RiLockPasswordFill className='icon-forget'/></div>  
        <h2>Forget Password?</h2>
        </div>              
        <button className='btn-back'><Link to="/login">Back</Link></button>
      </div>
      <p className='forget-text'>Kindly enter your registered email address to receive  verificstion code</p>
      <form>
        <div className='forget-input-box'>
          <input 
          name='email'
          {...register("email")}
          id='email'
          placeholder='Email Address'
          className='forget-input'
          />
           <MdOutlineMail className="forget-icon"/>

        </div>
        {/* <button className="btn-ter" type='submit'> Submit</button> */}
        <button className='btn-ter'><Link to='/verify'>verify </Link> </button>
      </form>
      </div>
    </div>
  )
}

export default ForgetPassword