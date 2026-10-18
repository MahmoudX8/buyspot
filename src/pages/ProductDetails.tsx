import { useGetProductDetails } from '@/hooks/useGetProductDetails';
import React from 'react'
import { useParams } from 'react-router-dom';


export const ProductDetails = () => {
    const {id} = useParams<{ id: string }>();
    const productData = useGetProductDetails(id);
    if(productData.isLoading){return <p>Loading...</p>}
    if(productData.isError){return <p>Error: {productData.error}</p>}
  return (
    <>
    <div>
        <h3>Up To -{productData.data.data.discountPercentage}% OFF</h3>
        <img src={productData.data.data.images[0]} alt="image" />
        {<h2>{productData.data.data.title}</h2>}
        <p>{productData.data.data.brand}</p>
        <p>{productData.data.data.description}</p>
        <p>{productData.data.data.price}$</p>
        <p>rate {productData.data.data.rating}</p>
        <div>
            <h3>Reviews</h3>
        {productData.data.data.reviews.map((r)=>(
            <div key={r.date}>
                <span> <h3>{r.reviewerName}</h3>  <p>{r.rating}</p></span>
                <p>{r.comment}</p>
            </div>
        ))}
        </div>
    </div>
    </>
  )
}
