import React, { useState } from "react";
import SideBar from "../components/Sidebar/SideBar";
import NavBar from "../components/Navbar/NavBar";
import Hero from "../components/Hero/Hero";
import AboutSection from "../components/About/About";
import Experience from "../components/Experience/Experience";
import Work from "../components/Work/Work";
import Contact from "../components/Contact/Contact";

const Home = () => {
  const [SideBarIsOpen, setSideBarIsOpen] = useState(false);

  const toggle = () => {
    setSideBarIsOpen(!SideBarIsOpen);
  };

  return (
    <>
      <SideBar isOpen={SideBarIsOpen} toggle={toggle}></SideBar>
      <NavBar toggle={toggle}></NavBar>

      <div className="home">
        <Hero />
        <AboutSection />
        <Experience />
        <Work />
        <Contact />
      </div>
    </>
  );
};

export default Home;
