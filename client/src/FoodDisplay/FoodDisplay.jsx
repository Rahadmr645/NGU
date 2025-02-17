import React from 'react'
import styles from './FoodDisplay.module.css'
import { assets } from '../assets/assets'
const FoodDisplay = ({ id, name, image, price, desc, catagory }) => {
  return (
    <div className={styles.displayContainer} >
      <img src={image} alt="" />
      <div className={styles.nameRatings}>
        <p>{name}</p>
        <img src={assets.rating_starts} alt="" />
      </div>
      <p>{desc}</p>
      <p>{price}</p>
    </div>
  )
}

export default FoodDisplay