import React from 'react'
import styles from './Button.module.css'
interface ButtonProps{
    text: string,
};
export const Button = ({text}: ButtonProps) => {
  return (
    <>
        <div>
            <button className={`${styles.btn}`}>{text}</button>
        </div>
    </>
  )
}
