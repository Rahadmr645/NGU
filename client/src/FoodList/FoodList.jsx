import React from 'react'
import styles from './FoodList.module.css'
import { food_list } from '../assets/assets'
import FoodDisplay from '../FoodDisplay/FoodDisplay'
const FoodList = () => {
    return (
        <div className={styles.foodListContainer}>
            <h1>Food Item is here</h1>
            <hr/>
            <div className={styles.foodList}>
            {food_list.map((item, index) => {
                return <FoodDisplay key={index} id={item._id} name={item.name} image={item.image} price={item.price} desc={item.description} catagory={item.category} />
            })}
           </div>
        </div>
    )
}

export default FoodList