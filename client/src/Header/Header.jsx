import React from 'react'
import styles from './Header.module.css';

const Header = () => {
  return (
    <div className={styles.headerContainer}>
        <div className={styles.hederContent}>
            <h1>WELLCOME OUR FOOD WORLD</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet dignissimos eligendi sed ea deserunt minus nostrum ex fugiat culpa. Eaque atque illo</p>
            <button>Explore us</button>
        </div>
    </div>
  )
}

export default Header