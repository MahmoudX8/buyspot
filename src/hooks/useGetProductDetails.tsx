import { useQuery } from '@tanstack/react-query';
import axios from 'axios'
import React from 'react'

export interface Review {
  rating: number;
  comment: string;
  date: string;
  reviewerName: string;
  reviewerEmail: string;
}

export interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  brand?: string;
  images: string[];
  reviews: Review[];
}
const fetchPostDetails = async (id: string): Promise<Product> =>{
    const result = await axios.get<Product>(`https://dummyjson.com/products/${id}`);
    return result;
}
export const useGetProductDetails = (id : string) => {
    const query = useQuery({queryKey:["product details"], queryFn: ()=> fetchPostDetails(id)});
  return query;
}
