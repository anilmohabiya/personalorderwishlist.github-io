import React from 'react';
import anil8 from './images/foot.jpg';
import {  Link } from 'react-router-dom/cjs/react-router-dom.min';

const Wishlist =()=>{
    return(
        <>
       <div className="container-fluid">
           <div className="row">
               <div className=" col-md-11 col-11 mx-auto">
               <nav class="nav nav-pills flex-column flex-sm-row mt-3 text-center">
               
  <Link class="flex-sm-fill text-sm-center nav-link" to="#">Brand</Link>
               
  <Link class="flex-sm-fill text-sm-center nav-link" to="#">My following</Link>
  <Link class="flex-sm-fill text-sm-center nav-link" to="#">New Arrival</Link>
  <Link class="flex-sm-fill text-sm-center nav-link" to="#">Offers & sales</Link>
  <Link class="flex-sm-fill text-sm-center nav-link" to="#">Trending Products</Link>
  
  <Link class="flex-sm-fill text-sm-center nav-link" to="#">Just Sold</Link>
</nav>
               </div>

           </div>
           <div className=" col-md-10 col-10 mt-2 mx-auto">
           <div class="card shadow">
  
  <div class="card-body">
   <p className=" px-3 text-danger mt-2"> MY CART <span className="vl  p-2"> MY WISHLIST</span></p>
 
   
  <div class="pos-f-t justify-content-end">
 
  <nav class="navbar navbar-dark bg-light justify-content-end">
  
  <p className=" font-weight-bold ml-5">view more <span><i class="fas fa-angle-right"></i></span></p>
    <button class="navbar-toggler justify-content-end bg-dark" type="button" data-toggle="collapse" 
    data-target="#navbarToggleExternalContent"
     aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
  </nav>
</div>

   
  </div>
</div>

<div className="row mt-2 shadow">
          
          <div className="col-md-3 col-8 mx-auto">
          <img src={anil8} alt={anil8}class="img-thumbnail w-75  border-light"/>
          <p className=" font-weight-bold text-center">casual runnig shoe<br/>Footwear<br/>
          
            <span class="fa fa-star checked"></span>  
            <span class="fa fa-star checked"></span>        
           <span class="fa fa-star checked"></span>
           <span class="fa fa-star checked"></span>
            <span class="fa fa-star-half"></span>
             </p>
             {/* horizontal line using down in footwear */}
             <div class="form-group col-12">
            <hr/>
            </div>
             <div className=" text-center justify-content-lg-center">
               
            <Link to="#" class="btn btn-success  button-transparent "><i class="fa fa-shopping-cart" aria-hidden="true">
              </i> ADD TO CART <span className=" p-2"></span>
                 </Link>
                <i class="far fa-trash-alt p-4 fa-2x mt-1"></i>

             </div>
          
          </div> 

          <div className="col-md-3 col-8 mx-auto">
          <img src={anil8} alt={anil8}class="img-thumbnail w-75 border-light"/>
          <p className=" font-weight-bold text-center">casual runnig shoe<br/>Footwear<br/>
          
          <span class="fa fa-star checked"></span>  
          <span class="fa fa-star checked"></span>        
         <span class="fa fa-star checked"></span>
         <span class="fa fa-star checked"></span>
          <span class="fa fa-star-half"></span>
           </p>
           {/* horizontal line using down in footwear */}
           <div class="form-group col-12">
          <hr/>
          </div>
           <div className=" text-center justify-content-lg-center">
             
          <Link to="#" class="btn btn-success  button-transparent "><i class="fa fa-shopping-cart" aria-hidden="true">
            </i> ADD TO CART <span className=" p-2"></span>
               </Link>
              <i class="far fa-trash-alt p-4 fa-2x mt-1"></i>

           </div>
        
          </div> 

          <div className="col-md-3 col-8 mx-auto">
          <img src={anil8} alt={anil8}class="img-thumbnail  w-75  border-light"/>
          <p className=" font-weight-bold text-center">casual runnig shoe<br/>Footwear<br/>
          
          <span class="fa fa-star checked"></span>  
          <span class="fa fa-star checked"></span>        
         <span class="fa fa-star checked"></span>
         <span class="fa fa-star checked"></span>
          <span class="fa fa-star-half"></span>
           </p>
           {/* horizontal line using down in footwear */}
           <div class="form-group col-12">
          <hr/>
          </div>
           <div className=" text-center justify-content-lg-center">
             
          <Link to="#" class="btn btn-success  button-transparent "><i class="fa fa-shopping-cart" aria-hidden="true">
            </i> ADD TO CART <span className=" p-2"></span>
               </Link>
              <i class="far fa-trash-alt p-4 fa-2x mt-1"></i>

           </div>
        
          </div> 

          <div className="col-md-3 col-8 mx-auto">
          <img src={anil8} alt={anil8}class="img-thumbnail  w-75 border-light"/>
          <p className=" font-weight-bold text-center">casual runnig shoe<br/>Footwear<br/>
          
          <span class="fa fa-star checked"></span>  
          <span class="fa fa-star checked"></span>        
         <span class="fa fa-star checked"></span>
         <span class="fa fa-star checked"></span>
          <span class="fa fa-star-half"></span>
           </p>
           {/* horizontal line using down in footwear */}
           <div class="form-group col-12">
          <hr/>
          </div>
           <div className=" text-center justify-content-lg-center">
             
          <Link to="#" class="btn btn-success  button-transparent "><i class="fa fa-shopping-cart" aria-hidden="true">
            </i> ADD TO CART <span className=" p-2"></span>
               </Link>
              <i class="far fa-trash-alt p-4 fa-2x mt-1"></i>

           </div>
        
          </div> 
      </div>
           </div>

        
       </div>
        </>
    )
}
export default Wishlist;