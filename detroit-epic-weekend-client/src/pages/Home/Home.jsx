import React from 'react';
import Banner from './Banner/Banner';
import AboutUs from './AboutUs/AboutUs';
import Gallery from './Gallery/Gallery';
import NewsLetter from './NewsLetter/NewsLetter';

const Home = () => {
  return (
    <div className='min-h-screen'>
     <Banner></Banner>
     <AboutUs></AboutUs>
     <Gallery></Gallery>
     <NewsLetter></NewsLetter>
    </div>
  );
};

export default Home;
