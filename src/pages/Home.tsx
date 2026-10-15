import React from 'react'
import {Button} from '../components/ui/Button'
import {Input} from '../components/ui/Input'
import styles from './Home.module.css'
import { useNavigate } from 'react-router-dom'
export const Home = () => {
    const navigate = useNavigate();
  return (
    <>
        <div className={`${styles.homepage}`}>
            <div>
                <p className={`${styles.subtitles}`}>SMALL SHOP. GOOD FINDS.</p>
                <h1 className={`${styles.title}`}>Discover quality products at prices that make sense, delivered to your door.</h1>
                <div style={{display:'flex', gap: 12}}>
                    <Button text="Find your good thing" variant="primary" onClick={()=>{navigate('/products')}}/>
                    <Button text="Your Profile" variant="danger" onClick={()=>{navigate('/profile')}}/>

                </div>
                <p className={`${styles.greywords}`}>Made for living with. Not just looking at.</p>
            </div>
            <div className={`${styles.btnsection}`}>
            </div>
        </div>
    </>
  )
}
