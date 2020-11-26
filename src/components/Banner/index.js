import React from 'react';
import BannerJPG from '../../assets/images/wallpaper.jpeg'
// el componente banner solo almacena un background que se mostrara en el home
const Banner = () => {
  return (
    <div >
      <img className="object-cover h-40 w-full ..." src={BannerJPG} alt="banner" />
      {/* <BannerJPG /> */}
    </div>
  );
}

export default Banner;
