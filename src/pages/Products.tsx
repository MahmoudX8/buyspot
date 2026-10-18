import React, { useState } from "react";
import styles from "./Products.module.css";
import { Card, CardContent, CardDescription,CardTitle,CardHeader} from '../components/ui/card';
import { useGetPosts } from "@/hooks/useGetPosts";
import { useNavigate, useSearchParams } from "react-router-dom";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"
import { Button } from "@/components/ui/button"
import { Field } from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { useQuery } from "@tanstack/react-query"

export const Products = () => {
  const [input, setInput] = useState("");
  const [search, setSearch] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();
  const numOfProdsPerPage = 6; 
  const currPage = Number(searchParams.get('page')) || 1;
  const goTo = (p) => (e) => {e.preventDefault(); setSearchParams({ page: p })};
  const goBack = (e) => {e.preventDefault(); if(currPage > 1) setSearchParams({page: currPage - 1})};
  const goUp = (e) => {e.preventDefault(); if(currPage < totalNumOfPages) setSearchParams({page: currPage + 1})};
  const postData = useGetPosts(numOfProdsPerPage , currPage, search);
  const onSearch = (e) => {
  e.preventDefault();
  setSearch(input);
  setSearchParams({ page: 1 });
  };
  const navigate = useNavigate();

  if(postData.isLoading){
    return(
      <>
      <div><p>Loading...</p></div>
      </>
    )
  }
  if(postData.isError){
    return(
      <>
      <div><p>Error: {postData.error.message}</p></div>
      </>
    )
  }
  const totalNumOfPages = Math.ceil(postData.data.total / numOfProdsPerPage);
  return (
    <>
      <div className={`${styles.products}`}>
        <section>
          <h1>Products</h1>
          <form onSubmit={onSearch}>
            <Field orientation="horizontal">
              <Input type="search" placeholder="Search..." value={input} onChange={(e)=>setInput(e.target.value)}/>
              <Button>Search</Button>
            </Field>
          </form>
        </section>
        <section className={`${styles.productssec}`}>
          {postData.data.products.map((p)=>(
            <div key={p.id} onClick={()=>{navigate(`/product/${p.id}`)}}>
            <Card>
               <img
                src={p.images[0]}
                alt="Event cover"
                className="relative z-20 aspect-video w-full object-cover brightness-60  dark:brightness-40"/>
              <CardHeader>
                <CardTitle>{p.title}</CardTitle>
                <CardDescription>{p.description.slice(0,50)}...</CardDescription>
              </CardHeader>
              <CardContent>
              <p>{p.price}$</p>
              <p>{p.rating}</p>
            </CardContent>
            </Card>
          </div>
        ))}
        </section>
        <section>
          <Pagination>
            <PaginationContent>
              {currPage > 1 && <PaginationItem>
                <PaginationPrevious href="#" onClick={goBack}/>
              </PaginationItem>}
              {Array.from({ length: totalNumOfPages }, (_, i) => i + 1).slice(currPage-1,currPage+2).map((i) => (
                <PaginationItem key={i}>
                  <PaginationLink href="#" onClick={goTo(i)} isActive={currPage === i}>
                    {i}
                  </PaginationLink>
                </PaginationItem>
              ))}
              <PaginationItem>
                <PaginationEllipsis />
              </PaginationItem>
              {currPage < totalNumOfPages && <PaginationItem>
                <PaginationNext href="#" onClick={goUp}/>
              </PaginationItem>}
            </PaginationContent>
          </Pagination>
        </section>
      </div>
    </>
  );
};
