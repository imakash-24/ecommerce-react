import React from 'react'
import "./Popular.css"
import data_product from "../../assets/data"
import { Item } from '../Item/Item'

export const Popular = () => {
  return (
    <>
      <div className="popular">
        <h1>POPULAR IN WOMEN</h1>
        <hr />
        <div className="popular-item">
            {data_product.map((items,i)=>{
                return <Item key={i} id={items.id} name={items.name} image={items.image} new_price={items.new_price} old_price={items.old_price} />
            })}
        </div>
      </div>
    </>
  )
}
