import React from 'react';

import "../Style/Promotional.css"


const Promotional = () => {
  return (
    
      <div className="promoContainer mt-5">
        <div className="promotional-content text-center ">
        <p className='title-all'><span className='color-item'> Check Our Best</span><span className='color-item2'> Promotional Tour</span></p>
        <p className='promo-p'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
      </div>



      <div className="row row-cols-1 row-cols-md-3 g-4 mt-5">
  <div className="col border-0">
    <div className="card h-100  border-0">
      <img src="https://mdbcdn.b-cdn.net/img/new/standard/city/041.webp" className="card-img-top"
        alt="Hollywood Sign on The Hill" />
      <div className="card-body">
        <h5 className=" text-center">Beijing</h5>
      </div>
    </div>
  </div>
  <div className="col border-0">
    <div className="card h-100  border-0">
      <img src="https://mdbcdn.b-cdn.net/img/new/standard/city/042.webp" className="card-img-top"
        alt="Palm Springs Road" />
      <div className="card-body">
        <h5 className=" text-center">Turkey</h5>
      </div>
    </div>
  </div>
  <div className="col border-0">
    <div className="card h-100  border-0">
      <img src="https://mdbcdn.b-cdn.net/img/new/standard/city/043.webp" className="card-img-top"
        alt="Los Angeles Skyscrapers" />
      <div className="card-body">
        <h5 className=" text-center">Pakistan</h5>
        
      </div>
    </div>
  </div>
  <div className="col border-0">
    <div className="card h-100 border-0">
      <img src="https://mdbcdn.b-cdn.net/img/new/standard/city/044.webp" className="card-img-top"
        alt="Skyscrapers" />
      <div className="card-body">
        <h5 className=" text-center">Bangladesh</h5>
       
      </div>
    </div>
  </div>
</div>
    

</div>
  );
};

export default Promotional;