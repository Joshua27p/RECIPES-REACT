import React from 'react';
import BannerJPG from '../../assets/images/banner.jpeg'

const Banner = () => {
  return (
    <div >
      <img className="object-cover h-40 w-full ..." src={BannerJPG} alt="banner" />
      {/* <BannerJPG /> */}
    </div>
  );
}

export default Banner;
