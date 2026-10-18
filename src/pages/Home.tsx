import React from "react";
import { Button } from "../components/common/Button";
import styles from "./Home.module.css";
import { useNavigate } from "react-router-dom";
import { Products } from "./Products";
export const Home = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className={`${styles.homepage}`}>
        <div className={styles.homecomp1}>
          <h2 className={`${styles.title}`}>
            Explore Our Shop.
          </h2>
          <p className={`${styles.subtitles}`}>From skincare to makeup, our platform features a wide range of products that cater to all your beauty needs. We strive to provide our customers with a luxury shopping experience, from browsing through our carefully selected products to receiving them in our signature packaging. Shop with us for the ultimate in beauty luxury.</p>
          </div>
          <div style={{ display: "flex", gap: 12 }}>
          </div>
          <div className={styles.homecomp2}>
            <Products/>
          </div>
        <div className={`${styles.btnsection}`}></div>
      </div>
    </>
  )
};
