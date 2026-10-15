import React from "react";
import styles from "./Card.module.css";
import { Button } from "./Button";
interface cardProps {
  title: string;
  description: string;
  image?: string;
  children?: React.ReactNode;
}
export const Card = ({ image, title, description, children }: cardProps) => {
  console.log(image);
  return (
    <>
      <div className={`${styles.card}`}>
        {image && <img src={image} alt="image" className={`${styles.img}`} />}
        <h1 className={`${styles.title}`}>{title}</h1>
        <p className={`${styles.desc}`}>{description}</p>
        {children && (<div className={styles.children}>{children}</div>)}
        <div className={`${styles.btndiv}`}>
          <Button text="+" variant="secondry" />
        </div>
      </div>
    </>
  );
};
