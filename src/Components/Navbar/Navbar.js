import React from 'react'

export const Navbar = () => { 
   return (
     <div>
        <nav className="absolute top-[0px] left-[0px] bg-gainsboro-200 w-[1499px] h-[89px]" />
        <div className=" px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8 absolute top-[28.25px] left-[143px] flex flex-row items-center justify-start gap-[11.09px]">
        
        <img
          className="relative w-[26.26px] h-[33.26px] shrink-0"
          alt=""
          src="../Logo.svg"
        />
        <img
          className="relative w-[152.65px] h-[29px] shrink-0"
          alt=""
          src="../patientgrid.svg"
        />
      </div>
      <div className="absolute top-[31px] left-[582px] w-[275px] h-7 text-sm">
         <div className="absolute top-[2px] left-[0px] w-[72px] h-6">
           <div className=" absolute top-[0px] left-[0px] capitalize font-medium">
             products
          </div>
         </div>
         <div className="absolute top-[2px] left-[117px] capitalize font-medium">
            plans
         </div>
         <button className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[0px] left-[206px] flex flex-row items-center justify-center">
           <div className="relative text-sm capitalize font-medium font-poppins text-gray-200 text-left">
             more
           </div>
           <img 
             className="relative w-7 h-7 shrink-0"
             alt=""
             src="../drop.svg"
           />
         </button>
       </div>
       <div className="absolute top-[31px] left-[1024px] text-sm font-medium text-black">
         Login
       </div>
      <div className="absolute top-[21px] left-[1160px] rounded-xxl bg-darkblue-200 w-[196px] h-[50px]" />
       <div className="absolute top-[33px] left-[1210px] text-sm font-medium text-white">
        Request a demo
       </div>
       
      
    </div>
  )
 }

