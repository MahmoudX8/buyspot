import React from 'react'
import styles from './Products.module.css'
import { Card } from '../components/ui/Card'
import image1 from "../assets/images/image1.jpg";
export const Products = () => {
  return (
    <>
    <div className={`${styles.products}`}>
        <section className={`${styles.productssec}`}>
            <Card title="modern chair" description="modern, portable and colourful chair that fits your mood" image={image1}>
                <span>$120</span>
            </Card>
            <Card title="modern chair" description="modern, portable and colourful chair that fits your mood" image={image1}/>
            <Card title="modern chair" description="modern, portable and colourful chair that fits your mood" image={image1}/>
            <Card title="modern chair" description="modern, portable and colourful chair that fits your mood" image={image1}/>
            <Card title="modern chair" description="modern, portable and colourful chair that fits your mood" image={image1}/>
            <Card title="modern chair" description="modern, portable and colourful chair that fits your mood" image={image1}/>
        </section>
    </div>
    </>
  )
}
