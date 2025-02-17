import React, { useContext, useState } from 'react'
import { Context } from '../Context/StoreContext';
import styles from './Menu.module.css';
import { menu_list } from '../assets/assets';
const Menu = () => {
    const {catagory,setCatagory} = useContext(Context)
    return (
        <div className={styles.menuContainer}>
            <h3>Explore our menu here</h3>
            <div className={styles.menuItems}>
                {menu_list.map((item, index) => {
                    return <div key={index} className={styles.menuItem} >
                     <img className={catagory === item.menu_name ? styles.border:''} onClick={() => setCatagory(item.menu_name)} src={item.menu_image} alt="" />
                        <p>{item.menu_name}</p>
                    </div>
                })}
            </div>
        </div>
    )
}

export default Menu