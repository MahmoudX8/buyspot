import React from 'react'
import styles from "./Navbar.module.css"
export const Navbar = () => {
  return (
    <>
        <div className={`${styles.nav}`}>
            <div>
                <h1>BuySpot.</h1>
            </div>
            <div>
                <ul>
                    <li><a href="">features</a></li>
                    <li><a href="">about</a></li>
                    <li><a href="">Dashboard</a></li>
                </ul>
            </div>
        </div>
    </>
  )
}
