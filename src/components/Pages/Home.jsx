import React from 'react';
import TopBar from '../TopBar';
import Header from '../Header';
import Hero from '../Hero';
import Services from '../Services';
import Stats from '../Stats';
import Portfolio from '../Portfolio';
import Team from '../Team';
import Booking from '../Booking';
import Testimonials from '../Testimonials';
import Blog from '../Blog';
import Footer from '../Footer';

const Home = () => {
  return (
    <>
      <TopBar />
      <Header />
      <Hero />
      <Services />
      <Stats />
      <Portfolio />
      <Team />
      <Booking />
      <Testimonials />
      <Blog />
      <Footer />
    </>
  );
};

export default Home;