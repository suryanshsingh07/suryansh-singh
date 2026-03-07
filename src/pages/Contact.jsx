import React from 'react';
import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";
import contactImg from '../assets/ui/contact.png';


const Contact = ({darkMode}) => {

    const form = useRef();
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState("");
    const startTime = useRef(Date.now());
 
    const sendEmail = async(e) => {
        e.preventDefault();
        const timeTaken = Date.now() - startTime.current;
        if (timeTaken < 3000) {
            alert("Form submitted too quickly");
            return;
        }
        const honeypot = e.target.company.value;
        if (honeypot !== "") {
            alert("Some error occured");
            return; 
        }
        const email = e.target.email.value;
        if (!email.endsWith("@gmail.com")) {
            alert("Please use a valid Gmail address");
            return;
        }
        try{
            setLoading(true);
            await emailjs.sendForm(
                "service_9u37xis",
                "template_enxhf7c",
                form.current,
                "-sd8W3QdmHlhO_M3n"
            );
            alert("Message sent successfully!");
            form.current.reset();
            setMessage("");
        } catch (error) {
            alert("Failed to send message");
        } finally {
            setLoading(false);
            }
        };
           
    return (
        <section id='contact'
        style={{background: darkMode ? '#111827' : '#f9fafb'}}
        className='overflow-hidden'>
            <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
                <div className='text-center mt-5 mb-8 sm:mb-10 md:mb-12'
                data-aos='fade-up'>
                    <h2 className='text-2xl sm:text-3xl md:text-4xl font-bold mb-2 sm:mb-3'
                    style={{color: darkMode ? 'white' : '#1f2937'}}>
                        Get In
                        <span style={{background: 'linear-gradient(to right, #f97316, #f59e0b)', WebkitBackgroundClip: 'text', backgroundClip: 'text', color: 'transparent'}}> Touch
                        </span>
                    </h2>
                    <p className='text-base sm:text-lg md:text-xl'
                    style={{color: darkMode ? '#d1d5db' : '#6b7280'}}>
                        Let's discuss about new project
                    </p>
                </div>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-8 md:gap-10 items-center'>
                    <div className='flex justify-center order-2 lg:order-1 -mt-16'
                    data-aos='fade-right'>
                        <img src={contactImg} alt='Contact'
                        className='w-full max-w-xs sm:max-w-sm lg:max-w-md h-auto object-contain'/>
                    </div>
                    <form style={{background: darkMode ? 'linear-gradient(to right, #1f2937, #111827)' : 'linear-gradient(to right, #ffffff, #f9fafb)', borderColor: darkMode ? '#374151' : '#e5e7eb'}}
                    className='rounded-xl p-4 sm:p-5 md:p-6 lg:p-8 border shadow-lg order-1 lg:order-2'
                    data-aos='fade-left' ref={form} onSubmit={sendEmail}>
                        <div className='grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-3 sm:mb-4'>
                            <input type="text" name="company" tabIndex="-1" autoComplete="off" style={{position:"absolute", left:"-9999px"}}/>
                            <input type='text' name='firstName' placeholder='First Name'
                            style={{background: darkMode ? '#374151' : '#faede3', borderColor: darkMode ? '#4b5563' : '#d1d5db', color: darkMode ? 'white' : '#1f2937'}}
                            className='w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg text-sm sm:text-base focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition-all' required/>
                            <input type='text' name='lastName' placeholder='Last Name'
                            style={{background: darkMode ? '#374151' : '#faede3', borderColor: darkMode ? '#4b5563' : '#d1d5db', color: darkMode ? 'white' : '#1f2937'}}
                            className='w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg text-sm sm:text-base focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition-all' required/>
                            <input type='email' name='email' placeholder='Email Address (Gmail only)'
                            style={{background: darkMode ? '#374151' : '#faede3', borderColor: darkMode ? '#4b5563' : '#d1d5db', color: darkMode ? 'white' : '#1f2937'}}
                            className='w-full px-3 sm:col-span-2 sm:px-4 py-2 sm:py-3 rounded-lg text-sm sm:text-base focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition-all' required/>
                            <input type='tel' name='mobile' placeholder='Mobile Number' inputMode="numeric"  onInput={(e) => e.target.value = e.target.value.replace(/\D/g, "")}
                            style={{background: darkMode ? '#374151' : '#faede3', borderColor: darkMode ? '#4b5563' : '#d1d5db', color: darkMode ? 'white' : '#1f2937'}}
                            className='w-full px-3 sm:col-span-2 sm:px-4 py-2 sm:py-3 rounded-lg text-sm sm:text-base focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition-all' required/>
                            <div className="sm:col-span-2 relative">
                                <textarea name='message' rows='4' maxLength="1000" placeholder='Your Message' onChange={(e) => setMessage(e.target.value)}
                                style={{background: darkMode ? '#374151' : '#faede3', borderColor: darkMode ? '#4b5563' : '#d1d5db', color: darkMode ? 'white' : '#1f2937'}}
                                className='w-full px-3 sm:col-span-2 py-2 sm:px-4 sm:py-3 rounded-lg text-sm sm:text-base focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition-all resize-none overflow-y-auto custom-scrollbar' required/>
                                <div className="absolute bottom-2 right-3 text-xs text-gray-500">
                                    {message.length}/1000 characters 
                                </div>
                            </div>
                            <button type='submit' disabled={loading}
                            style={{background: 'linear-gradient(to right, #f97316, #f59e0b)'}}
                            className='w-full sm:col-span-2 py-2 sm:py-3 text-white font-semibold rounded-lg text-sm sm:text-base hover:shadow-lg hover:shadow-orange-500/25 hover:scale-[1.02] transition-all cursor-pointer'>
                                {loading ? "Sending..." : "Send Message"}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
  );
};

export default Contact