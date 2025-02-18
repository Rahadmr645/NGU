import {useState,useContext } from 'react'
import styles from './Login.module.css'
import {Context} from '../Context/StoreContext'
const Login = () => {
  const {formData} = useContext(Context)
  const [currState,setCurrState] = useState("Login")
  return(
    <form>
      <h1>{currState}</h1>
      <div>
        <div className={styles.input}>
          <label htmlFor="name" >UserName</label>
        <input type="text" placeholder="enter yor name" name="name"
        value={formData.name} id="name" />
        </div>
         <div className={styles.input}>
          <label htmlFor="email" >Email</label>
        <input type="text" placeholder="enter your email" name="email"
        value={formData.email} id="email" />
        </div>
         <div className={styles.input}>
          <label htmlFor="pass" >password</label>
        <input type="text" placeholder="enter your password" name="password"
        value={formData.password} id="pass" />
        </div>
      </div>
    </form>
    )
}