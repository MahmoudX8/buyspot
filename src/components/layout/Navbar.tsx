import React, { useState } from "react";
import styles from "./Navbar.module.css";
import { useNavigate } from "react-router-dom";
import { Input } from "@/components/ui/input"
import { Field } from "@/components/ui/field"
import { Button } from "@/components/ui/button"

export const Navbar = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className={`${styles.uppernav}`}>
        <p>A little good, delivered. Free US shipping on orders $75+</p>
      </div>
      <div className={`${styles.nav}`}>
        <div className={`${styles.textlogo}`}>
          <h1
            style={{ cursor: "pointer" }}
            onClick={() => {
              navigate("/");
            }}
          >
            BuySpot.
          </h1>
        </div>
        <div className={`${styles.uls}`}>
          <ul>
            <li onClick={() => {}}>cart</li>
            <li onClick={() => {}}>about</li>
            <li
              onClick={() => {
                navigate("/profile");
              }}
            >
              profile
            </li>
          </ul>
        </div>
        <div>
            <Field orientation="horizontal">
              <Input type="search" placeholder = "Find what you want" />
            </Field>
        </div>
        {/* <div className={`${styles.searchbar}`}>
        </div> */}
        <div>
          <Button>View Cart</Button>
        </div>

      </div>
      {/* <hr className={`${styles.hr}`} />
      <div className={`${styles.lowernav}`}>
        <div className={`${styles.categories}`}>
          <ul>
            <li>
              <p>Shop all</p>
            </li>
            <li>
              <p>New arrivals</p>
            </li>
            <li>
              <p>Everyday cary</p>
            </li>
            <li>
              <p>Gifts</p>
            </li>
          </ul>
        </div>
        <div className={`${styles.linkarea}`}>
          <a href="">Good things. Thoughtfully chosen.</a>
        </div>
      </div>
      <hr className={`${styles.hr}`} /> */}
    </>
  );
};
