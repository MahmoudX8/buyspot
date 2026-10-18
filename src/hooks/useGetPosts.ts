import { keepPreviousData, useQuery } from '@tanstack/react-query';
import axios from 'axios'


const fetchPosts = async (limit , page, q)=>{
    const url = q ? 'https://dummyjson.com/products/search' : 'https://dummyjson.com/products';
    const result = await axios.get(url,{
        params:{ q, limit , skip: (page - 1) * limit }
    });
    return result.data;
}
export const useGetPosts = (limit , shift, q = '') => {
    const query = useQuery({queryKey:["posts", limit, shift, q], queryFn : () => fetchPosts(limit , shift, q), placeholderData: keepPreviousData});
    return query;
}