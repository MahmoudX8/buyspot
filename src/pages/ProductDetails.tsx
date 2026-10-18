import { useGetProductDetails } from '@/hooks/useGetProductDetails';
import React from 'react'
import { useParams } from 'react-router-dom';
import styles from './ProductDetails.module.css';

export const ProductDetails = () => {
    const {id} = useParams<{ id: string }>();
    const productData = useGetProductDetails(id);
    if(productData.isLoading){return <p>Loading...</p>}
    if(productData.isError){return <p>Error: {productData.error}</p>}
  return (
    <>
    <div className={styles.productpage}>
        <h3 style={{fontWeight:"var(--bold)", color:'var(--primary)'}}>-{productData.data.data.discountPercentage}% OFF</h3>
        <div className={styles.productcomponents}>
            <img src={productData.data.data.images[0]} alt="image" style={{maxWidth:600, alignSelf:'center', justifySelf:'center'}}/>
            {<h2>{productData.data.data.title}</h2>}
            <p>{productData.data.data.brand}</p>
            <p style={{color:'black'}}>{productData.data.data.description}</p>
            <p style={{color:'black'}}>${productData.data.data.price}</p>
            <p>avr rate {productData.data.data.rating}</p>
        </div>
        <div className={styles.productreviewssec}>
            <h3 style={{fontSize:35, marginBottom:15}}>Reviews</h3>
            <div className={styles.reviewscontainer}>
                {productData.data.data.reviews.map((r,id)=>(
                    <div key={id}>
                        <h3 style={{color:'grey'}}>{r.reviewerName}</h3>  
                        {/* <p>{r.rating}</p> */}
                        <p>{r.comment}</p>
                    </div>
                ))}
            </div>
        </div>
    </div>
    </>
  )
}
