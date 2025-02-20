import {useState,useContext,useEffect  } from 'react'
import styles from './Login.module.css'
import {Context} from '../Context/StoreContext'
import {assets} from '../assets/assets'
const Login = () => {
  const {formData,setShowLogin,onChangeHandler,onSubmitHandler,currState,setCurrState} = useContext(Context)
  
  useEffect(() => {
    if(currState) {
      document.body.style.overflow = "hidden" ;
    } else {
      document.body.style.overflow = "auto" ;
    }
    
    return () => {
      document.body.style.overflow = "auto"
    }
  })
  return(
    <div className={styles.loginContainer}>
    <form className={styles.form
    } onSubmit={onSubmitHandler}>
      <div className={styles.header}> 
      <h1>{currState}</h1>
      <img onClick={() => setShowLogin(false)} src={assets.cross_icon} alt="" />
      </div>
      <div className={styles.inputContent}>
        {currState === "Sign Up"?  
        <div className={styles.input}>
          <label htmlFor="name" >UserName</label>
        <input onChange={onChangeHandler} type="text" placeholder="enter yor name" name="name"
        value={formData.name} id="name" />
        </div>
        : <></> }
         <div className={styles.input}>
          <label htmlFor="email" >Email</label>
        <input onChange={onChangeHandler} type="text" placeholder="enter your email" name="email"
        value={formData.email} id="email" />
        </div>
         <div className={styles.input}>
          <label htmlFor="pass" >password</label>
        <input onChange={onChangeHandler} type="text" placeholder="enter your password" name="password"
        value={formData.password} id="pass" />
        </div>
        <button type="submit" className={styles.subBtn}>{currState}</button>
        <div className={styles.extraOption}>
          {currState === "Sign Up"?
          <p>Already have account <span onClick={() => setCurrState("Login")} >click here</span></p>
          :  <p>Create a account <span onClick={() => setCurrState("Sign Up")}>click here</span></p>
          }
        </div>
      </div>
    </form>
    </div>
    )
} 

export default Login;