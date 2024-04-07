import React from 'react'
const Nav = () => {
  return (
    <>
    <nav>
        <div className="nav">
           <div className="nav-header">
           <div className="nav-title">
           <img src="/Component/media-img/PngItem_1610207.png" alt=""  />
           </div>
           </div>
            <input type="checkbox" id='nav-check'/>
            <div className="line nav-links">
            <span>Home</span>
            <span>About</span>
            <span>Service</span>
            <span>Store</span>
            <span>Cartegories</span>
            <div className="style">
            </div>
            </div>
            <div className="nav-btn">
              <label htmlFor="nav-check">
              <span></span>
              <span></span>
              <span></span>
              </label>
            </div>
           <div className="circle">
           <img src="/Component/media-img/cart.png" alt="" srcset="" id='cart'/>
           </div>
        </div>
    </nav>
    </>
  )
}

export default Nav