import React from "react";

import Banner from "./Banner";
import CardsItems from "./CardsItems";
import Exceptional from "./Exceptional";
import Doctor from "./Doctor";
import Services from "./Services";
import Testimonoal from "./Testimonoal";
import doctorSmall from "../../assets/images/doctor-small.png";
import Contact from "./Contact";
import Footer from "./Footer";
const Home = () => {
  return (
    <div className=" ">
      <Banner></Banner>
      <CardsItems></CardsItems>
      <Services></Services>
      <Exceptional></Exceptional>
      <Doctor style={{ background: ` url(${doctorSmall})` }}></Doctor>
      <Testimonoal></Testimonoal>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
};

export default Home;
