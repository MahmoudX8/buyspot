import React from 'react'
import styles from './Button.module.css'
interface ButtonProps{
    text: string,
    variant?: "primary" | "secondry" | "danger",
    disabled?: boolean,
    onClick?: ()=>void,
};
export const Button = ({text, onClick, variant = "primary", disabled = false}: ButtonProps) => {
  return (
    <>
        <div>
            <button
            onClick={onClick}
            className={`${styles.btn} ${styles[variant]}`} 
            disabled = {disabled}>
                {text}
            </button>
        </div>
    </>
  )
}
