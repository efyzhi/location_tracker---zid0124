import React from 'react'
import { useForm } from 'react-hook-form'
import { MdOutlineMail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import './Verification.css'
import { Link } from 'react-router-dom';



const Verification = () => {

  const { register } = useForm()
  return (
    <div className='verify-box'>
      <div className='verify-inner-box'>
      <div className='flex-4'>
        <div>
          <div><RiLockPasswordFill /></div>
        <h2>Verification code</h2>
        </div>
        <button className='btn-back'><Link to="/login">Back</Link></button>
      </div>        
        <p className='verify-text'>Kindly enter your registered email address to receive  verificstion code</p>
        <div className='lines'>            
        <div className='line'></div>
        <div className='line'></div>
        <div className='line'></div>
        <div className='line'></div>
        </div>
          <p>Didn't receive any code yet? <span>Resend</span></p>
       
        <button className="btn-verify" type='submit'> Verify </button>
      </div>
    </div>
  )
}

export default Verification