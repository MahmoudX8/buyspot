import React from 'react'
import styles from './Input.module.css'

interface InputProps{
    type: string,
    placeholder: string,
};
export const Input = ({type, placeholder}:InputProps) => {
    // let placeHolder = "";
    // switch(type){
    //     case "search":
    //         placeHolder = "Search...";
    //         break;
    //     case "image":
    //         placeHolder = "Upload image";
    //         break;
    //     case "file":
    //         placeHolder = "Upload file";
    //         break;
    //     case "text":
    //         placeHolder = "Fill the spaces";
    //         break;
    //     case "email":
    //         placeHolder = "Enter Email";
    //         break;
    //     case "password":
    //         placeHolder = "Enter Password";
    //         break;
    // }
  return (
    <div className={`${styles.input}`}>
        <input type={type} placeholder={placeholder}/>
    </div>
  )
}
