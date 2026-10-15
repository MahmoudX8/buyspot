import React from 'react'
import styles from './Profile.module.css'
import { Table } from '../components/ui/Table'

interface DataConfig{
    name: string,
    age: number,
    city: string,
    [key: string]: string | number,
}
export const Profile = () => {
    const colms = ["name", "age", "city"];
    const data : DataConfig[] = [
        {name: "Mahmoud", age: 20, city: "Cairo"},
        {name: "Alice", age: 25, city: "New York"},
    ];
  return (
    <>
    <div className={styles.profilepage}>
        <h1>Profile</h1>
        <Table columns={colms} data={data} striped/>
        <Table columns={colms} data={data} striped/>
    </div>
    </>
  )
}
