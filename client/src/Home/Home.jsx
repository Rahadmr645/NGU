import React from 'react'
import styles from './Home.module.css';
import Header from '../Header/Header';
import Menu from '../Menu/Menu';
import FoodList from '../FoodList/FoodList';


const Home = () => {

  return (
    <div className={styles.homeContainer}>
      <Header />
      <Menu />
      <FoodList />
    </div>
  )
}

export default Home