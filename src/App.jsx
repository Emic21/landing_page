//import React from "react";
import Button from "./components/Button";
import IconInfo from "./components/IconInfo";
import Section from "./components/Section";

const App = () => {
  return (
    <div className="relative">
      <header className="flex justify-between items-center px-24 py-4">
        <div className="flex space-x-8">
          <h1 className="text-[#505F98] text-sm font-normal">Home</h1>
          <h1 className="text-[#505F98] text-sm font-normal">About</h1>
          <h1 className="text-[#505F98] text-sm font-normal">Contact</h1>
        </div>
        <h1 className="text-[#37447E] text-2xl font-bold">Landing</h1>
        <button className='bg-[#111B47] text-white px-10 py-2 rounded-md font-medium'>Buy now</button>
      </header> 
      
      {/* BACKGROUND IMAGE */}
      <img
        src="/herobackground.svg"
        className="w-[50%] object-cover absolute right-0 top-0"
        alt="backgroundimage"
      />
      {/* HERO */}
      <div className="flex gap-8 h-screen items-center justify-center px-24  ">
        {/* INFO */}
        <div className="w-[40%] flex flex-col items-start justify-center space-y-4">
          <h2 className="text-3xl text-[#091133] font-semibold">
            Introduce Your Product Quickly & Effectively
          </h2>
          <p className="text-sm text-[#091133]">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa. Cum sociis natoque
            penatibus et magnis dis parturient montes, nascetur ridiculus mus.
          </p>
          <p className="text-sm text-[#091133]">
            Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
            Nulla consequat massa quis enim.
          </p>
          <div className="space-x-4 flex items-center">
            <Button title="Purchase Ui Kit" />
            <Button title="Learn more" white />
          </div>
        </div>
        <div className="w-[60%] flex items-center justify-center relative bg-red-300">
          <img
            src="/heroimage.svg"
            className="w-[60%]   object-cover absolute -right-24"
            alt="heroimage"
          />
        </div>
      </div>
      {/* SECTION ONE */}
      <div className="flex gap-8 h-screen items-center justify-center px-24 ">
        {/* info */}
        <div className="w-[50%] flex flex-col items-start  space-y-4">
          <h2 className="text-[#091133] text-3xl font-medium">
            Light, Fast & Powerful
          </h2>
          <p className="text-[#6F7CB2] text-[16px] font-normal">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa. Cum sociis natoque
            penatibus et magnis dis parturient montes, nascetur ridiculus{" "}
          </p>
          <p className="text-[#6F7CB2] text-[16px] font-normal pb-20">
            mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis,
            sem. Nulla consequat massa quis enim.
          </p>
          <div className="flex space-x-4 mt-10">
            <IconInfo />
            <IconInfo />
          </div>
        </div>
        {/* IMAGE */}
        <div className="w-[50%] flex items-center justify-center relative bg-red-300">
          <img
            src="/section1image.svg"
            className="w-[90%]   object-cover absolute right-0"
            alt="heroimage"
          />
        </div>
      </div>
      {/* SECTION TWO */}
      <Section
        img={"/section2image.svg"}
        title={" Light, Fast & Powerful"}
        descr1={`Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa. Cum sociis natoque
            penatibus et magnis dis parturient montes, nascetur ridiculus`}
        descr2={` mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis,
            sem. Nulla consequat massa quis enim.`}
      />
      <Section
        img={"/section3image.svg"}
        title={" Light, Fast & Powerful"}
        descr1={`Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa. Cum sociis natoque
            penatibus et magnis dis parturient montes, nascetur ridiculus`}
        descr2={` mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis,
            sem. Nulla consequat massa quis enim.`}
      />
      <Section
        img={"/section4image.svg"}
        title={" Light, Fast & Powerful"}
        descr1={`Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa. Cum sociis natoque
            penatibus et magnis dis parturient montes, nascetur ridiculus`}
        descr2={` mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis,
            sem. Nulla consequat massa quis enim.`}
        havebutton={true}
      />
       <img src="pricebackground.svg" alt="pricebackgroundimage" className="w-[100%] object-cover absolute" />
      <div className="text-center ">
        <h2 className="text-[#091133] text-3xl font-medium mt-40 p-5">A Price To Suit Everyone</h2>
       <p className="text-[#6F7CB2] text-[16px] font-normal text-wrap items-center ml-80 mr-80 ">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus </p>
        <p className="text-[#222F65] text-3xl font-semibold pt-5">$40</p>
        <p className="text-[#37447E] text-[16px] font-normal ">UI Design Kit</p>
        <p className="text-[#5D6970] text-[16px] font-normal pb-2 pt-10">See, One price. Simple.</p>
        <div className="space-x-4 flex items-center justify-center">
            <Button title="Purchase Now"/>         
         </div>
      </div>
      <footer className="items-center mt-60 px-24">
        <div className="flex justify-between">
          <p className="text-sm text-[#939EA4]">Copyright &copy; 2025 Michael </p>
          <h1 className="text-[#37447E] text-2xl font-bold">Landing</h1>
          <button className='bg-[#111B47] text-white px-10 py-2 rounded-md font-medium'>Buy now</button>
        </div>
        <div className="flex justify-between mt-10 mb-5">
        <div className="flex space-x-5">
        <h1 className="text-[#505F98] text-sm font-normal">Home</h1>
          <h1 className="text-[#505F98] text-sm font-normal">About</h1>
          <h1 className="text-[#505F98] text-sm font-normal">Contact</h1>
          </div>
          <div className="flex space-x-3 " >
          <img src="/facebook.svg" alt="Facebook Logo" />
          <img src="/Instagram.svg" alt="instagram logo" />
          <img src="linklin.svg" alt="linklin logo" />
          <img src="youtube.svg" alt="youtube logo" />
          <img src="twitter.svg" alt="twitter logo" />

          </div>
          
          </div>
      </footer>
    </div>
  );
};

export default App;
