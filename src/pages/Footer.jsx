import React from 'react';
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer = ({darkMode}) => {
    const currentYear = new Date().getFullYear();
  return (
    <footer style={{background: darkMode ? 'linear-gradient(to bottom, #000000, #111827)' : 'linear-gradient(to bottom, #f3f4f6, #e5e7eb)', borderColor: darkMode ? '#374151' : '#d1d5db'}}
    className='border-t'>
        <div className='container mx-auto px-4 py-8'>
            <div className='flex flex-col md:flex-row justify-between items-center gap-6'>
                <div className='text-center md:text-left'>
                    <h3 className='text-2xl font-bold mb-2 text-orange-500 dark:text-white'>
                        Portfolio
                    </h3>
                    <p className='text-sm'
                    style={{color: darkMode ? '#9ca3af' : '#6b7280'}}>
                        Full Stack Developer & UI/UX Designer
                    </p>
                </div>
                <div className='flex gap-4 justify-center md:justify-center'>
                    <a href="#"
                    rel="noopener noreferrer"
                    className='w-10 h-10 rounded-full flex items-center justify-center hover:scale-110 transition-all hover:bg-linear-to-r hover:bg-[#181717] hover:text-white bg-[#374151] dark:bg-[#f3f4f6] dark:text-[#374151] text-white cursor-pointer hover:shadow-lg hover:shadow-orange-500/30'>
                        <FaGithub/>
                    </a>
                    <a href="#"
                    rel="noopener noreferrer"
                    className='w-10 h-10 rounded-full flex items-center justify-center hover:scale-110 transition-all hover:bg-linear-to-r hover:bg-[#0A66C2] hover:text-white bg-[#374151] dark:bg-[#f3f4f6] dark:text-[#374151] text-white cursor-pointer hover:shadow-lg hover:shadow-orange-500/30'>
                        <FaLinkedin/>
                    </a>
                    <a href="#"
                    rel="noopener noreferrer"
                    className='w-10 h-10 rounded-full flex items-center justify-center hover:scale-110 transition-all hover:bg-linear-to-r hover:bg-[#1DA1F2] hover:text-white bg-[#374151] dark:bg-[#f3f4f6] dark:text-[#374151] text-white cursor-pointer hover:shadow-lg hover:shadow-orange-500/30'>
                        <FaTwitter/>
                    </a>
                    <a href="#"
                    rel="noopener noreferrer"
                    className='w-10 h-10 rounded-full flex items-center justify-center hover:scale-110 transition-all hover:bg-linear-to-r hover:from-pink-500 hover:to-yellow-500 hover:text-white bg-[#374151] dark:bg-[#f3f4f6] dark:text-[#374151] text-white cursor-pointer hover:shadow-lg hover:shadow-orange-500/30'>
                        <FaInstagram/>
                    </a>
                    <a href="#"
                    rel="noopener noreferrer"
                    className='w-10 h-10 rounded-full flex items-center justify-center hover:scale-110 transition-all hover:bg-linear-to-r hover:bg-[#1877F2] hover:text-white bg-[#374151] dark:bg-[#f3f4f6] dark:text-[#374151] text-white cursor-pointer hover:shadow-lg hover:shadow-orange-500/30'>
                        <FaFacebook/>
                    </a>
                </div>
                <div className='text-center md:text-right'>
                    <p className='text-sm text-[#6b7280] dark:text-[#9ca3af] text-center md:text-right'>
                        © {currentYear} Made by
                        <a href='#'
                        className='block mt-1 text-[#f97316] font-semibold'>
                            Suryansh Singh
                        </a>
                    </p>
                </div>
            </div>
        </div>
    </footer>
  );
};

export default Footer