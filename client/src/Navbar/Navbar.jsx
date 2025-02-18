import React, {useState,useContext } from 'react'
import styles from './Navbar.module.css';
import { assets } from '../assets/assets'
import {Context } from '../Context/StoreContext' ;
const Navbar = () => {
    const [select, setSelect] = useState('home');
    const {setShowLogin} = useContext(Context) ;
    return (
        <div className={styles.navItemContainer}>
            <div className={styles.leftSection}>
                <img src={assets.logo} alt="" />
            </div>
            <div className={styles.middleSection}>
                <ul>
                    <li className={select ==='home'? styles.bBorder : ''} onClick={() => setSelect('home')} >home</li>
                    <li className={select === 'menu' ? styles.bBorder : ''} onClick={() => setSelect('menu')} >menu</li>
                    <li className={select === 'mobile' ? styles.bBorder : ''} onClick={() => setSelect('mobile')} >mobile app</li>
                    <li className={select === 'contact' ? styles.bBorder : ''} onClick={() => setSelect('contact')} >contect us</li>
                </ul>
            </div>
            <div className={styles.rightSection}>
                <img src={assets.search_icon} alt="" />
                <div className={styles.basket}>
                    <img src={assets.basket_icon} alt="" />
                    <div></div>
                </div>
                <button onClick={() => setShowLogin(true)}>SignUp</button>
            </div>
        </div>
    )
}

export default Navbar