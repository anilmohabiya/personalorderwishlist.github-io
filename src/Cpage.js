import React from 'react';
import {  Link } from 'react-router-dom/cjs/react-router-dom.min';
import foot from './images/foot.jpg';
import Oder2 from './Order2page';
const Cpage =()=>{
    return(
    <>
    
    <div className ="col-md-8 col-10 mx-auto">
  <nav class="nav nav-pills flex-column flex-sm-row mt-3 text-center">
  <Link class="flex-sm-fill text-sm-center nav-link" to="#">New Arrival</Link>
  <Link class="flex-sm-fill text-sm-center nav-link" to="#">Offers & sales</Link>
  <Link class="flex-sm-fill text-sm-center nav-link" to="#">Trending Products</Link>
  
  <Link class="flex-sm-fill text-sm-center nav-link" to="#">Just Sold</Link>
</nav>


  <div class="card text-white  bg-secondary  mb-3 mt-5" >
  
  <div class="card-body">
  <h5 class="card-title mt-4 text-center"> My Order</h5>
  <p className="text-center mt-3"><i class="fas fa-pencil-alt "></i></p>
  <nav class="nav justify-content-center">
  
  <Link class="nav-link activeClassName='menu_active' text-light " href="#">Live</Link>
  <Link class="nav-link activeClassName='menu_active' text-light " href="#">Deliverd</Link>
  <Link class="nav-link activeClassName='menu_active' text-light " href="#">Cancelled</Link>
</nav>

  </div>
</div>
</div>
<div className="col-md-10 col-10 mx-auto shadow">
<div class="card">
  <div class="card-body">
  <p className=" font-weight-bold">3 ordereds palced <span className="v1 p-1 font-weight-bold">
  <Link to=""> <span> <i class="fa fa-search" aria-hidden="true">search order</i></span></Link> </span></p>
  <p align="right">
  <p className=" font-weight-bold">view more <span><i class="fas fa-angle-right"></i></span></p>

</p>
  </div>

</div>
<div className="col-md-8 col-10 mx-auto shadow">
<nav class="nav nav-fill bg-secondary">
  <p class="nav-item nav-link active" >ORDEREDPLACED<br/>
  1st january 2021</p>
  <p class="nav-item nav-link" >TOTAL<br/>BDH29</p>
  <p class="nav-item nav-link" >SHIP TO<br/>JHON DEO</p>
</nav>
</div>
<div className="col-md-8 col-10 mx-auto shadow">
<div className="row">
  <div className="col-md-2 col-2 mx-auto ">
  
  <img class="mr-3" src={foot} alt={foot}/>
  </div>
  <div className="col-md-2 col-6 mx-auto ">
  <p className=" font-weight-bold ">Runnig Shoes <br/>Footwear<br/>
<span class="fa fa-star checked"></span>
<span class="fa fa-star checked"></span>
<span class="fa fa-star checked"></span>
<span class="fa fa-star"></span>
<span class="fa fa-star"></span></p>
<p align="right">
<i class="fas fa-angle-right"></i>
</p>
  </div>
</div>

</div>
<div className="col-md-8 col-10 mx-auto shadow mt-5">
<div className="row">
  <div className="col-md-2 col-2 mx-auto ">
  
  <img class="mr-3" src={foot} alt={foot}/>
  </div>
  <div className="col-md-2 col-6 mx-auto ">
  <p className=" font-weight-bold ">Runnig Shoes <br/>Footwear<br/>
<span class="fa fa-star checked"></span>
<span class="fa fa-star checked"></span>
<span class="fa fa-star checked"></span>
<span class="fa fa-star"></span>
<span class="fa fa-star"></span></p>
<p align="right">
<i class="fas fa-angle-right"></i>
</p>
  </div>
</div>

</div>
<div className="col-md-8 col-10 mx-auto shadow mt-5 mb-3">
<div className="row">
  <div className="col-md-2 col-2 mx-auto ">
  
  <img class="mr-3" src={foot} alt={foot}/>
  </div>
  <div className="col-md-2 col-6 mx-auto ">
  <p className=" font-weight-bold ">Runnig Shoes <br/>Footwear<br/>
<span class="fa fa-star checked"></span>
<span class="fa fa-star checked"></span>
<span class="fa fa-star checked"></span>
<span class="fa fa-star"></span>
<span class="fa fa-star"></span></p>
<p align="right">
<i class="fas fa-angle-right"></i>
</p>
  </div>
</div>

</div>
</div>
< Oder2 />



    </>       
    )
}
export default Cpage;