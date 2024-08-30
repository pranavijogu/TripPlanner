import React from 'react';
import Featured from '../../components/featured/Featured';
import Footer from '../../components/footer/Footer';
import Header from '../../components/header/Header';
import MailList from '../../components/mailList/MailList';
import PopularCities from '../../components/PopularCities/PopularCities';
import "./Home.css";

export default function Home() {
  return (
    <div>
      <Header />
      <div className='homeContainer'>
        <Featured />
        <PopularCities />
        <MailList />
        <Footer />
      </div>
    </div>
  );
}
