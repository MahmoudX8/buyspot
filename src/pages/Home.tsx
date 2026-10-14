import React from 'react'
import {Button} from '../components/ui/Button'
import {Input} from '../components/ui/Input'
import styles from './Home.module.css'
export const Home = () => {
  return (
    <>
        <div className={`${styles.homepage}`}>
            <h1 className={`${styles.title}`}>Discover quality products at prices that make sense, delivered to your door.</h1>
            <Button text="Browse"/>
        </div>
    </>
  )
}
