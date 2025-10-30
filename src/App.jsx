import React, { useState, useEffect } from "react";
import Button from "./components/Button";
import IconInfo from "./components/IconInfo";
import Section from "./components/Section";

const App = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="relative overflow-x-hidden">
      {/* HEADER */}
      <header className="flex justify-between bg-gray-300 items-center px-6 md:px-24 py-4 relative z-50">
        {/* Mobile Menu Button */}
        {isMobile && (
          <button 
            onClick={toggleMenu}
            className="text-[#37447E] p-2"
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        )}

        {/* Desktop Navigation */}
        {!isMobile && (
          <div className="flex space-x-8">
            <h1 className="text-[#505F98] text-sm font-normal cursor-pointer hover:text-[#37447E] transition-colors">Home</h1>
            <h1 className="text-[#505F98] text-sm font-normal cursor-pointer hover:text-[#37447E] transition-colors">About</h1>
            <h1 className="text-[#505F98] text-sm font-normal cursor-pointer hover:text-[#37447E] transition-colors">Contact</h1>
          </div>
        )}

        <h1 className="text-[#37447E] text-xl md:text-2xl font-bold absolute left-1/2 transform -translate-x-1/2 md:static md:transform-none">
          Landing
        </h1>

        {!isMobile && (
          <button className='bg-[#111B47] text-white px-6 md:px-10 py-2 rounded-md font-medium hover:bg-[#0e1639] transition-colors'>
            Buy now
          </button>
        )}
      </header>

      {/* Mobile Navigation Menu */}
      {isMobile && isMenuOpen && (
        <div className="bg-gray-300 absolute top-16 left-0 right-0 z-40 shadow-lg">
          <div className="flex flex-col space-y-4 p-6">
            <h1 className="text-[#505F98] text-sm font-normal cursor-pointer hover:text-[#37447E] transition-colors py-2 border-b border-gray-400">Home</h1>
            <h1 className="text-[#505F98] text-sm font-normal cursor-pointer hover:text-[#37447E] transition-colors py-2 border-b border-gray-400">About</h1>
            <h1 className="text-[#505F98] text-sm font-normal cursor-pointer hover:text-[#37447E] transition-colors py-2 border-b border-gray-400">Contact</h1>
            <button className='bg-[#111B47] text-white py-3 rounded-md font-medium hover:bg-[#0e1639] transition-colors mt-4'>
              Buy now
            </button>
          </div>
        </div>
      )}

      {/* BACKGROUND IMAGE */}
      <img
        src="/herobackground.svg"
        className="w-full md:w-[50%] object-cover absolute right-0 top-0 -z-10"
        alt="backgroundimage"
      />

      {/* HERO SECTION */}
      <div className="flex flex-col md:flex-row gap-8 min-h-screen items-center justify-center px-6 md:px-24 py-12 md:py-0">
        {/* INFO */}
        <div className="w-full md:w-[40%] flex flex-col items-start justify-center space-y-4 md:space-y-6 order-2 md:order-1">
          <h2 className="text-2xl md:text-3xl text-[#091133] font-semibold text-center md:text-left">
            Introduce Your Product Quickly & Effectively
          </h2>
          <p className="text-sm text-[#091133] text-center md:text-left">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa. Cum sociis natoque
            penatibus et magnis dis parturient montes, nascetur ridiculus mus.
          </p>
          <p className="text-sm text-[#091133] text-center md:text-left">
            Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
            Nulla consequat massa quis enim.
          </p>
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 items-center w-full md:w-auto">
            <Button title="Purchase Ui Kit" />
            <Button title="Learn more" white />
          </div>
        </div>
        
        {/* HERO IMAGE */}
        <div className="w-full md:w-[60%] flex items-center justify-center relative order-1 md:order-2 mb-8 md:mb-0">
          <img
            src="/heroimage.svg"
            className="w-full md:w-[60%] object-cover md:absolute md:-right-24"
            alt="heroimage"
          />
        </div>
      </div>

      {/* SECTION ONE */}
      <div className="flex flex-col md:flex-row gap-8 min-h-screen items-center justify-center px-6 md:px-24 py-12 md:py-0">
        {/* INFO */}
        <div className="w-full md:w-[50%] flex flex-col items-start space-y-4 md:space-y-6 order-2 md:order-1">
          <h2 className="text-2xl md:text-3xl text-[#091133] font-medium text-center md:text-left">
            Light, Fast & Powerful
          </h2>
          <p className="text-[#6F7CB2] text-[14px] md:text-[16px] font-normal text-center md:text-left">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa. Cum sociis natoque
            penatibus et magnis dis parturient montes, nascetur ridiculus
          </p>
          <p className="text-[#6F7CB2] text-[14px] md:text-[16px] font-normal text-center md:text-left pb-8 md:pb-20">
            mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis,
            sem. Nulla consequat massa quis enim.
          </p>
          <div className="flex flex-col md:flex-row space-y-8 md:space-y-0 md:space-x-4 mt-4 md:mt-10 w-full">
            <IconInfo />
            <IconInfo />
          </div>
        </div>
        
        {/* IMAGE */}
        <div className="w-full md:w-[50%] flex items-center justify-center relative order-1 md:order-2 mb-8 md:mb-0">
          <img
            src="/section1image.svg"
            className="w-full md:w-[90%] object-cover md:absolute md:right-0"
            alt="section1image"
          />
        </div>
      </div>

      {/* SECTION TWO */}
      <Section
        img={"/section2image.svg"}
        title={"Light, Fast & Powerful"}
        descr1={`Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa. Cum sociis natoque
            penatibus et magnis dis parturient montes, nascetur ridiculus`}
        descr2={` mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis,
            sem. Nulla consequat massa quis enim.`}
      />

      <Section
        img={"/section3image.svg"}
        title={"Light, Fast & Powerful"}
        descr1={`Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa. Cum sociis natoque
            penatibus et magnis dis parturient montes, nascetur ridiculus`}
        descr2={` mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis,
            sem. Nulla consequat massa quis enim.`}
      />

      <Section
        img={"/section4image.svg"}
        title={"Light, Fast & Powerful"}
        descr1={`Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa. Cum sociis natoque
            penatibus et magnis dis parturient montes, nascetur ridiculus`}
        descr2={` mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis,
            sem. Nulla consequat massa quis enim.`}
        havebutton={true}
      />

      {/* PRICING SECTION */}
      <div className="relative py-20 md:py-40">
        <img 
          src="pricebackground.svg" 
          alt="pricebackgroundimage" 
          className="w-full object-cover absolute inset-0 -z-10" 
        />
        <div className="text-center px-6 md:px-0 relative z-10">
          <h2 className="text-2xl md:text-3xl text-[#091133] font-medium mt-10 md:mt-40 p-5">
            A Price To Suit Everyone
          </h2>
          <p className="text-[#6F7CB2] text-[14px] md:text-[16px] font-normal mx-auto max-w-2xl">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus
          </p>
          <p className="text-[#222F65] text-2xl md:text-3xl font-semibold pt-5">$40</p>
          <p className="text-[#37447E] text-[14px] md:text-[16px] font-normal">UI Design Kit</p>
          <p className="text-[#5D6970] text-[14px] md:text-[16px] font-normal pb-2 pt-6 md:pt-10">
            See, One price. Simple.
          </p>
          <div className="flex justify-center">
            <Button title="Purchase Now" />
          </div>
        </div>
      </div>

      {/* FOOTER */}
      <footer className="px-6 md:px-24 py-12 bg-gray-100 mt-20 md:mt-60">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          <p className="text-sm text-[#939EA4] order-3 md:order-1">
            Copyright &copy; 2025 Michael
          </p>
          <h1 className="text-[#37447E] text-xl md:text-2xl font-bold order-1 md:order-2">
            Landing
          </h1>
          <button className='bg-[#111B47] text-white px-6 md:px-10 py-2 rounded-md font-medium hover:bg-[#0e1639] transition-colors order-2 md:order-3'>
            Buy now
          </button>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center mt-8 md:mt-10 space-y-6 md:space-y-0">
          <div className="flex space-x-5 order-2 md:order-1">
            <h1 className="text-[#505F98] text-sm font-normal cursor-pointer hover:text-[#37447E] transition-colors">Home</h1>
            <h1 className="text-[#505F98] text-sm font-normal cursor-pointer hover:text-[#37447E] transition-colors">About</h1>
            <h1 className="text-[#505F98] text-sm font-normal cursor-pointer hover:text-[#37447E] transition-colors">Contact</h1>
          </div>
          
          <div className="flex space-x-3 order-1 md:order-2">
            <img src="/facebook.svg" alt="Facebook Logo" className="cursor-pointer hover:opacity-80 transition-opacity" />
            <img src="/Instagram.svg" alt="Instagram logo" className="cursor-pointer hover:opacity-80 transition-opacity" />
            <img src="/linklin.svg" alt="LinkedIn logo" className="cursor-pointer hover:opacity-80 transition-opacity" />
            <img src="/youtube.svg" alt="YouTube logo" className="cursor-pointer hover:opacity-80 transition-opacity" />
            <img src="/twitter.svg" alt="Twitter logo" className="cursor-pointer hover:opacity-80 transition-opacity" />
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;