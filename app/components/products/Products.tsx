import React, { useEffect } from 'react'
import { carList } from '../../../utils/data'
import { PageProps } from '@/app/page';
import ProductCard from './ProductCard';
import Pagination from '../pagination/Pagination';
import { revalidatePath } from 'next/cache';
import SideBar from '../sidebar/SideBar';

async function getData() {
    const query = await fetch('https://api.staging.myautochek.com/v1/inventory/car/search?page=2');
    const response = query.json();
    return response;
}

export type fetchDataType = typeof fetchData;
const PAGE_SIZE = 9;
const fetchData = (take = PAGE_SIZE, skip: number) => {

    const results = carList.slice(skip, skip + PAGE_SIZE);
    const total = carList.length;

    revalidatePath('/')
    return {
        data: results,
        metadata: {
            hasNextPage: skip + take < total,
            totalPages: Math.ceil(total/take)
        }
    }

}

const Products = (props: PageProps) => {

    const pageNumber = Number(props?.searchParams?.page || 1)

    const take = PAGE_SIZE;
    const skip = (pageNumber - 1) * take;

    const { data, metadata } = fetchData(take, skip);
    // console.log({data, metadata});
    // console.log({props: props.searchParams});

    return (
        <div className='flex align-items-start justify-between px-20 py-12'>
            <div className="carList">
                <div className="header">Popular Car Listings</div>
                <div className="list">
                    {data.map((item, i) => (
                        <ProductCard {...item} key={i}/>
                    ))}
                    <Pagination page={''} {...props.searchParams} {...metadata}/>
                </div>
                
            </div>
            
            <SideBar />
        </div>
    )
}

export default Products