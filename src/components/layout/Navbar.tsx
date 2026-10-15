import React from 'react'
import styles from "./Navbar.module.css"
import { Input } from '../ui/Input'
import { useNavigate } from 'react-router-dom'

export const Navbar = () => {
    const navigate = useNavigate();
  return (
    <>
        <div className={`${styles.uppernav}`}>
            <p>A little good, delivered. Free US shipping on orders $75+</p>
        </div>
        <div className={`${styles.nav}`}>
            <div className={`${styles.textlogo}`}>
                <h1 style={{cursor:"pointer"}} onClick={()=>{navigate('/')}}>BuySpot.</h1>
            </div>
            <div className={`${styles.searchbar}`}>
                <Input type='search' placeholder='Find what you want'/>
            </div>
            <div className={`${styles.uls}`}>
                <ul>
                    <li onClick={()=>{}}>cart</li>
                    <li onClick={()=>{}}>about</li>
                    <li onClick={()=>{navigate('/profile')}}>profile</li>
                </ul>
            </div>
        </div>
        <hr className={`${styles.hr}`}/>
        <div className={`${styles.lowernav}`}>
            <div className={`${styles.categories}`}>
                <ul>
                    <li><p>Shop all</p></li>
                    <li><p>New arrivals</p></li>
                    <li><p>Everyday cary</p></li>
                    <li><p>Gifts</p></li>
                </ul>
            </div>
            <div className={`${styles.linkarea}`}>
                <a href="">Good things. Thoughtfully chosen.</a>
            </div>
        </div>
        <hr className={`${styles.hr}`}/>
    </>
  )
}
