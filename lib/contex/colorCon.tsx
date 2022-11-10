import React,{useContext} from 'react'
import { colorContext } from '../../context/ColorContext'

export default function colorCon() {
    const {color, setColor} = useContext(colorContext)
 
    window.addEventListener("scroll", ()=>{
         console.log("hihihi");
            
    })
     
  return (
    <div>colorCon</div>
  )
}
