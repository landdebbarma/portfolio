'use client'
import Services from "./components/Services"
import Contacts from "./components/Contacts"
import Work from "./components/Work"
import About from "./components/About"
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default function Home() {
  
  return (
    <>
      <Navbar />
      <Header />
      <About />
      <Services />
      <Work />
      <Contacts />
      <Footer />
    </>
  );
}