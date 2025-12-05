import React, { useRef, useState } from 'react'
import { ToastContainer, toast } from "react-toastify";
import { IoMdSend } from "react-icons/io";
import { FaCheckCircle } from "react-icons/fa";
// EmailJS is a web service that allows you to send emails directly from your website or frontend (like React) without needing your own backend/server.
import emailjs from '@emailjs/browser'
const Contact = () => {
  const form=useRef()
  const [sent,setSent]=useState(false)

  const handlesubmit=(e)=>{
   e.preventDefault();
   emailjs
   .sendForm(
    'service_kt8sjce',   // emailjs key
    'template_rqobfat',  // template key
    form.current,
    '4UCr6SKSRPJR6CvSi'  //public key


  )
  .then(()=>{
    setSent(true)
    form.current.reset(); //to reset the form field after sending
    console.log("sucess")
     toast.success("Message sent successfully! ✅", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            theme: "dark",
          })
  },(err)=>{
    // console.log(err.message);
     toast.error("Failed to send message. Please try again.", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            theme: "dark",
          });


  }
)

  }
  return (
 <section
      id="contact"
      className="py-24 pb-24 px-[12vw] md:px-[7vw] lg:px-[16vw] font-sans bg-skills-gradient clip-path-custom-3"
    > 
    <ToastContainer/>
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white">CONTACT</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
         I'd love to hear from you-reach out for any queries or Possibilities
        </p>
      </div>
     {/* contact from  */}
     <div className='mt-8 w-full max--md bg-[#0d081f] p-6 rounded-lg shadow-lg border-gray-700'>
      <h3 className='text-xl font-semibold text-white text-center'>Connect with me</h3>
      <form onSubmit={handlesubmit} ref={form} action=""  className="mt-4 flex flex-col space-y-4">
        <input type="email" 
        required
        name='user_email' 
        placeholder='Enter your email'  className="w-full p-3 rounded-md bg-[#131025] text-white border border-gray-600 focus:outline-none focus:border-purple-500" />
          <input type="text" 
        required
        name='user_name' 
        placeholder='Enter your name'  className="w-full p-3 rounded-md bg-[#131025] text-white border border-gray-600 focus:outline-none focus:border-purple-500" />
         <input type="text" 
        required
        name='subject' 
        placeholder='Enter your subject'  className="w-full p-3 rounded-md bg-[#131025] text-white border border-gray-600 focus:outline-none focus:border-purple-500" />

        <textarea name="message" placeholder='enter your message'
        required
        rows='4'
         className="w-full p-3 rounded-md bg-[#131025] text-white border border-gray-600 focus:outline-none focus:border-purple-500"
        ></textarea>
       <button 
  type='submit' 
  className="w-full bg-gradient-to-r from-purple-600 to-pink-500 py-3 text-white font-semibold rounded-md hover:opacity-90 transition 
             
             flex items-center justify-center space-x-2" 
>
  Send 
  <IoMdSend/> 
  </button>

      </form>
     </div>
    </section>
    )
}

export default Contact
