import  MenuItem  from "../components/MenuItem"
import React from "react";
import MenuList from "../data/MenuList";
import "../styles/Menu.css"


function Menu() {
  console.log(MenuList);
  return (
    <div className="menu">
      <div className="menuTitle">Our Menu</div>
        <div className="menuList">
          {MenuList.map((menuItem) => {
            return (
              <MenuItem key={menuItem.id}
                image={menuItem.image}
                name={menuItem.name}
                price={menuItem.price}
              />
            );
          })}
        </div>
     
    </div>
  );
}

export default Menu;
