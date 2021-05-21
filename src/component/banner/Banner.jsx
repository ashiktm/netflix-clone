import React from 'react'
import './Banner.css'
function Banner() {
 return (
  <div className="banner">
   <div className="content">
    <h1 className="title">Movie Name</h1>
    <div className="banner-btns">
     <button className="button">Play</button>
     <button className="button">My List</button>
    </div>
    <h1 className="discription">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatibus minus illum similique recusandae beatae ratione quisquam veniam dolorum at error.</h1>
   </div>
   <div className="fade-bottom"></div>
  </div>
 )
}

export default Banner
