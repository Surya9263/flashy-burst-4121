import React from 'react'
import Router from 'next/router'
import { useAppSelector } from '../../store/hook'
import { SingleProduct } from '../../components/client'
import { CIproduct } from '../../interface/client/product.interface'
import { GetServerSideProps } from 'next'
import axios, { AxiosResponse } from 'axios'
export default function ProductId({product}:{product:CIproduct}) {
    // const id = Router.query.id as string
    console.log(product);
    
  return (
    <div>
        <SingleProduct product={product}/>
    </div>
  )
}



export const getServerSideProps: GetServerSideProps = async (context) => {
    const url = process.env.BASEURL
    console.log(context.params);
    
    const res:AxiosResponse<CIproduct> = await axios.get(`${url}${context?.params?.id}`)
    const product = res.data  
    return {
      props: {
        product,
      },
    }
  }