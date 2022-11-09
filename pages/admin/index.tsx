import React, { useEffect } from 'react'
import {AdminNav} from '../../components/'
import { useAppDispatch, useAppSelector } from '../../store/hook'
import {  getallCategory } from '../../store/category/categorySlice'

export default function Home() {
  const dispatch =  useAppDispatch()

  useEffect(()=>{
    dispatch(getallCategory("jeet"))
  },[])
  
  return (
    <div>
        <AdminNav />
    </div>
  )
}
