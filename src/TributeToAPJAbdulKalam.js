// TributeToAPJAbdulKalam.js
import React from 'react';
import './Tribute.css';
import Header from './components/Header';
import EarlyLife from './components/EarlyLife';
import Achievements from './components/Achievements';
import AwardsHonors from './components/AwardsHonors';
import BooksPublications from './components/BooksPublications';
import Quotes from './components/Quotes';
import Footer from './components/Footer';
import VideoComponent from './components/VideoComponent';

const TributeToAPJAbdulKalam = () => {
  return (
    <div className="TributeToAPJAbdulKalam">
      <div className="container">
        <div className="content">
          <Header />
          <EarlyLife />
           <Achievements />
          <AwardsHonors />
         <BooksPublications />
         <VideoComponent/>
         <Quotes />
         <Footer />
       


        </div>
      </div>
    </div>
  );
};

export default TributeToAPJAbdulKalam;