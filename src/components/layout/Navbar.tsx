import React, { useState } from "react";
import styles from "./Navbar.module.css";
import { useNavigate } from "react-router-dom";
import { Input } from "@/components/ui/input"
import { Field } from "@/components/ui/field"
import { Button } from "@/components/ui/button"
import { Search } from "lucide-react";

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
            <li onClick={() => {}}>SHOP</li>
            <li onClick={() => {}}>COLLECTIONS</li>
            <li>CONTACT</li>
            <li>ABOUT</li>
          </ul>
        </div>
        <div>
            <Field orientation="horizontal">
            <div className="relative w-full">
              <Input
                type="search"
                placeholder="SEARCH"
                className="h-12 w-full rounded-xl border-gray-200 bg-white pr-12 pl-4 text-sm uppercase shadow-sm placeholder:text-gray-500 focus-visible:ring-primary/30 [&::-webkit-search-cancel-button]:hidden"
              />
              <Search className="pointer-events-none absolute top-1/2 right-4 size-5 -translate-y-1/2 text-gray-700" />
            </div>
          </Field>
        </div>
        {/* <div className={`${styles.searchbar}`}>
        </div> */}
        <div>
          <Button className="w-full px-8 py-6 cursor-pointer">View Cart</Button>
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
