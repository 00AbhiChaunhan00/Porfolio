import React, {  useEffect, useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { FaLinkedin, FaGithub } from "react-icons/fa";
const Navbar = () => {
    const [activeOption,setActiveOption]=useState()
    const[isOpen,setOpen]=useState(false);
    const[isScrolled,setScrolled]=useState();

  let menu = [
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "project", label: "Project" },
    { id: "education", label: "Education"},
    { id: "contact", label: "Contact" },
  ];
//   Change navbar color after scrolling
useEffect(()=>{
    const handleScroll=()=>{
        setScrolled(window.scrollY>50) // herer after down to 50px it became true If scroll > 50px → navbar background becomes visible
    }
    window.addEventListener('scroll',handleScroll);
    return ()=> window.removeEventListener('scroll',handleScroll)
})

  const handleClick=(Id)=>{
     setActiveOption(Id);
     setOpen(false)
    //  It finds the <section> tag with same ID as the clicked menu item
       const section = document.getElementById(Id);
  if (section) {
    // Scrolls the page to that section smoothly , not a sudden jump
    section.scrollIntoView({ behavior: "smooth" });
  }
  }
  return (
      <nav
      className={`fixed top-0 w-full z-50 transition duration-300 px-[7vw] md:px-[7vw] lg:px-[20vw] ${
        isScrolled ? "bg-[#050414] bg-opacity-50 backdrop-blur-md shadow-md" : "bg-transparent"
      }`}
    >

      <div className="text-white py-5 flex justify-between items-center">
        <div className="text-lg font-semibold cursor-pointer">
          <span className="text-[#8245ec]">&lt; </span>
           <span className="text-white">ABHSIHEK S. </span>
          <span className="text-white">CHAUHAN </span>
          <span className="text-[#8245ec]">&gt;</span>
        </div>

        {/*desktop menu   */}
        <ul className="hidden md:flex space-x-8 text-gray-300 ">
            {menu.map((items)=>{
                return <li className={`cursor-pointer hover:text-[#8245ec] ${activeOption==items.id ? ' text-[#8245ec]':""} `} key={items.id}>
                    <button onClick={()=>handleClick(items.id)}>{items.label}</button> 
                </li>
            })}
        </ul>
        <div className="hidden md:flex space-x-4">
            <a href="https://github.com/00AbhiChaunhan00" target="_blank" 
            className="text-gray-300 hover:text:-[#8245ec]"><FaGithub size={24}/></a>
             <a href="https://www.linkedin.com/in/00abhichauhan00/"
              target="_blank" 
            className="text-gray-300 hover:text:-[#8245ec]"><FaLinkedin size={24}/></a>

        </div>
        {/* mobile menu  */}
        <div className="md:hidden">
             {isOpen?(
                <FiX className="text-3xl text-[#8245ec] cursor-pointer" onClick={()=>setOpen(false)}/>
             ):<FiMenu className='text-3xl text-[#8245ec] cursor-pointer' onClick={()=>setOpen(true)} />}
        </div>
      </div>
      {/* Mobile menu items  */}
      {isOpen && (
        <div className="absolute top-16 left-1/2 transform -translate-x-1/2 w-4/5 bg-[#050414] bg-opacity-50 backdrop-filter backdrop-blur-lg z-50 rounded-lg shadow-lg md:hidden">
          <ul className="flex flex-col items-center space-y-4 py-4 text-gray-300">
            {menu.map((item) => (
              <li
                key={item.id}
                className={`cursor-pointer hover:text-white ${
                  activeOption === item.id ? "text-[#8245ec]" : ""
                }`}
              >
                <button onClick={() => handleClick(item.id)}>
                  {item.label}
                </button>
              </li>
            ))}
            <div className="flex space-x-4">
              <a
                href="https://github.com/codingmastr"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white"
              >
                <FaGithub size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/tarun-kaushik-553b441a4"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white"
              >
                <FaLinkedin size={24} />
              </a>
            </div>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
