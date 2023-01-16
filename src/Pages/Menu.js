import  MenuItem  from "../components/MenuItem"
import React, { useEffect, useState } from "react";
import MenuList from "../data/MenuList";
import "../styles/Menu.css"
import { Img_URL } from "../data/ImageLink";
import Shimmer from "./Shimmer";


function Menu() {

  const [restaurantData, setRestaurantData]=useState([])

  useEffect(()=>{
    getRestaurantData();
  },[])

  async function getRestaurantData(){
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
    );
     const jsonData= await data.json()
     console.log(jsonData)
     setRestaurantData(jsonData?.data.cards[2]?.data?.data?.cards)
  }
 
  return restaurantData.length===0?(<Shimmer/>):(
    <div className="menu">
      <div className="menuTitle">Our Menu</div>
        <div className="menuList">
          {restaurantData.map((menuItem) => {
            return (
              <MenuItem key={menuItem.data.id}
                image={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/"+menuItem.data.cloudinaryImageId}
                name={menuItem.data.name}
                price={menuItem.data.costForTwo
                }
              />
            );
          })}
        </div>
     
    </div>
  );
}

export default Menu;
