import React from 'react';
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin, FaTwitter,FaWhatsapp,FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

const Footer = ({darkMode}) => {
    const currentYear = new Date().getFullYear();
  return (
    <footer style={{background: darkMode ? 'linear-gradient(to bottom, #000000, #111827)' : 'linear-gradient(to bottom, #f3f4f6, #e5e7eb)', borderColor: darkMode ? '#374151' : '#d1d5db'}}
    className='border-t'>
        <div className='container mx-auto px-4 py-6 sm:py-8'>
            <div className='flex flex-col gap-8  md:flex-row md:justify-between'>
                <div className='text-center md:text-left'>
                    <a href="#" className='text-3xl font-bold mb-2'
                     style={{ color: darkMode ? '#ffffff' : '#123123' }}>
                        Suryansh Singh
                    </a>
                    <p className='text-sm'
                    style={{color: darkMode ? '#9ca3af' : '#6b7280'}}>
                        Full Stack Developer & UI/UX Designer
                    </p>
                    <br></br>
                    <p className='text-sm'
                    style={{color: darkMode ? '#9ca3af' : '#6b7280'}}>
                       I enjoy turning complex problems into simple,<br></br> 
                       elegant solutions and continuously learning to<br></br>
                       stay up-to-date with the latest technologies.
                    </p>                 
                </div>
                <div className='flex flex-col items-center gap-4'>
                    <div className='flex flex-wrap gap-3 sm:flex-row justify-center md:justify-end mt-4'>
                        <a href="https://github.com/suryanshsingh07"
                        target='_blank'
                        rel="noopener noreferrer"
                        className='w-10 h-10 rounded-full flex items-center justify-center hover:scale-110 transition-all hover:bg-linear-to-r hover:bg-[#181717] hover:text-white bg-[#374151] dark:bg-[#f3f4f6] dark:text-[#374151] text-white cursor-pointer hover:shadow-lg hover:shadow-orange-500/30'>
                            <FaGithub/>
                        </a>
                        <a href="https://www.linkedin.com/in/suryansh-singh-thakur/"
                        target='_blank'
                        rel="noopener noreferrer"
                        className='w-10 h-10 rounded-full flex items-center justify-center hover:scale-110 transition-all hover:bg-linear-to-r hover:bg-[#0A66C2] hover:text-white bg-[#374151] dark:bg-[#f3f4f6] dark:text-[#374151] text-white cursor-pointer hover:shadow-lg hover:shadow-orange-500/30'>
                            <FaLinkedin/>
                        </a>
                        <a href="https://x.com/essential_ladka"
                        target='_blank'
                        rel="noopener noreferrer"
                        className='w-10 h-10 rounded-full flex items-center justify-center hover:scale-110 transition-all hover:bg-linear-to-r hover:bg-[#1DA1F2] hover:text-white bg-[#374151] dark:bg-[#f3f4f6] dark:text-[#374151] text-white cursor-pointer hover:shadow-lg hover:shadow-orange-500/30'>
                            <FaTwitter/>
                        </a>
                        <a href="https://www.instagram.com/essential_ladka?igsh=MWc2bTJraWV2cHdjdQ=="
                        target='_blank'
                        rel="noopener noreferrer"
                        className='w-10 h-10 rounded-full flex items-center justify-center hover:scale-110 transition-all hover:bg-linear-to-r hover:from-pink-500 hover:to-yellow-500 hover:text-white bg-[#374151] dark:bg-[#f3f4f6] dark:text-[#374151] text-white cursor-pointer hover:shadow-lg hover:shadow-orange-500/30'>
                            <FaInstagram/>
                        </a>
                        <a href="https://www.facebook.com/share/1BaiL4Lvip/"
                        target='_blank'
                        rel="noopener noreferrer"
                        className='w-10 h-10 rounded-full flex items-center justify-center hover:scale-110 transition-all hover:bg-linear-to-r hover:bg-[#1877F2] hover:text-white bg-[#374151] dark:bg-[#f3f4f6] dark:text-[#374151] text-white cursor-pointer hover:shadow-lg hover:shadow-orange-500/30'>
                            <FaFacebook/>
                        </a>
                    </div>
                    <div className='flex flex-wrap gap-3 sm:flex-row justify-center md:justify-end mt-4'>
                        <a href="#" className={`transition-colors ${darkMode ? 'text-gray-400 hover:text-orange-500' : 'text-gray-700 hover:text-orange-500'}`}>
                            Home
                        </a>
                        <a href="#about" className={`transition-colors ${darkMode ? 'text-gray-400 hover:text-orange-500' : 'text-gray-700 hover:text-orange-500'}`}>
                            About
                        </a>
                        <a href="#skills" className={`transition-colors ${darkMode ? 'text-gray-400 hover:text-orange-500' : 'text-gray-700 hover:text-orange-500'}`}>
                            Skills
                        </a>
                        <a href="#projects" className={`transition-colors ${darkMode ? 'text-gray-400 hover:text-orange-500' : 'text-gray-700 hover:text-orange-500'}`}>
                            Projects
                        </a>
                        <a href="#certificates" className={`transition-colors ${darkMode ? 'text-gray-400 hover:text-orange-500' : 'text-gray-700 hover:text-orange-500'}`}>
                            Certificates
                        </a>
                        <a href="#contact" className={`transition-colors ${darkMode ? 'text-gray-400 hover:text-orange-500' : 'text-gray-700 hover:text-orange-500'}`}>
                            Contact
                        </a>
                    </div>
                    <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                        className='mt-4 px-3 py-2 bg-orange-500 text-white rounded-full hover:bg-orange-600 transition'>
                        Back to Top
                    </button>
                </div>
                <div className='text-center md:text-center max-w-xs mx-auto md:mx-0'>
                    <h4 className='text-2xl font-bold mb-2'
                        style={{ color: darkMode ? '#ffffff' : '#123123' }}>
                            Contact ME
                    </h4>
                    <p className='text-xs flex items-center gap-2 break-all' style={{color: darkMode ? '#9ca3af' : '#6b7280'}}>
                        <FaEnvelope className="text-orange-500"/>
                        <a target="_blank" rel="noopener noreferrer" href='https://mail.google.com/mail/?view=cm&to=suryanshsinghchauhanthakur@gmail.com' className='text-orange-400 hover:underline'>suryanshsinghchauhanthakur@gmail.com</a>
                    </p>
                    <p className='text-xs flex items-center gap-2 break-all' style={{color: darkMode ? '#9ca3af' : '#6b7280'}}>
                        <FaWhatsapp className="text-green-500" />
                        <a target="_blank" rel="noopener noreferrer" href='https://wa.me/918874518917' className='text-orange-400 hover:underline'>+91 88745 18917</a>
                    </p>
                    <p className='text-xs flex items-center gap-2 break-all' style={{color: darkMode ? '#9ca3af' : '#6b7280'}}>
                        <FaPhone className="text-blue-400 rotate-90"/>
                        <a className='text-orange-400 hover:underline'>+91 88745 18917</a>
                    </p>
                     <p className='text-xs flex items-center gap-2 break-all' style={{color: darkMode ? '#9ca3af' : '#6b7280'}}>
                        <FaMapMarkerAlt className="text-red-500"/>
                        <a target="_blank" rel="noopener noreferrer" href='https://maps.app.goo.gl/RMw9q76TYNCmBehZ9' className='text-orange-400 hover:underline'>Lucknow, Uttar Pradesh, India</a>
                    </p>
                    <br></br>
                    <p className='text-sm text-[#6b7280] dark:text-[#9ca3af] text-center md:text-right'>
                        <span>© {currentYear} Made by </span>
                        <a href='#'
                        className='mt-1 text-[#f97316] font-semibold'>
                            Suryansh Singh
                        </a>
                        <span className='block text-center'>• All rights reserved</span>
                    </p>
                </div>
            </div>
        </div>
    </footer>
  );
};

export default Footer