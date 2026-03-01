import React from 'react'
import instagram from '../assets/social/instagram.png';
import github from '../assets/social/github.png';
import youtube from '../assets/social/youtube.png';
import hero from '../assets/ui/hero.png';
import hi from '../assets/ui/hi.png';
import CV from '../assets/CV.pdf';
import { DownloadIcon, Mail } from 'lucide-react';

const Hero = ({darkMode}) => {
    const socialIcons = [
        {icon: instagram, alt: 'instagram'},
        {icon: github, alt: 'github'},
        {icon: youtube, alt: 'youtube'},       
    ];

  return (
    <div className={`relative overflow-hidden h-auto flex flex-col ${
        darkMode ? 'bg-gray-900' : 'bg-white'}`}>
        <section
        id='home'
        data-aos='fade-up'
        data-aos-delay='250'
        className='body-font z-10'>
            <div className='container mx-auto flex px-4 sm:px-8 lg:px-14 py-12 lg:py-14 flex-col lg:flex-row items-center justify-between lg:mt-14 mt-14'>
                <div
                className='lg:w-1/2 w-full flex flex-col items-center lg:items-start text-center lg:text-left mb-12 lg:mb-0'>
                    <div className='flex  justify-center lg:justify-start gap-4 sm:gap-6 mb-6 sm:mb-7 w-full'>
                        {socialIcons.map((social, index) => (
                            <a
                            key={index}
                            href='#'
                            target='_blank'
                            rel="noopener noreferrer"
                            data-aos-delay={`${400 + index * 100}`}>
                                <img src={social.icon} alt={social.alt}
                                className={`w-8 h-8 sm:w-10 sm:h-10
                                    object-contain ${darkMode
                                    ? ''
                                    : 'filter brightness-75'
                                    }`}>    
                                </img>
                            </a>
                        ))}
                    </div>
                        <h1 className={`title-font text-3xl sm:text-4xl lg:text-5xl mb-4 font-bold ${
                            darkMode ? 'text-white' : 'text-gray-900'}`}>
                            Hi, I am Suryansh Singh
                        </h1>
                        <p className={`mb-6 sm:mb-8 leading-relaxed max-w-md sm:max-w-lg ${
                            darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit...
                        </p>
                    <div className='w-full pt-4 sm:pt-6'>
                        <div className='flex flex-col sm:flex-row justify-center lg:justify-start gap-3 sm:gap-4'>
                            <a href={CV} download className='w-full sm:w-auto'>
                                <button className="w-full sm:w-auto inline-flex items-center justify-center bg-linear-to-r from-orange-500 to-amber-500 border-0 py-3 px-6 sm:px-8 hover:shadow-[0_0_40px_rgb(255,165,0,0.7)] rounded-full text-base sm:text-lg font-semibold transition-all duration-300 transform cursor-pointer">
                                    <DownloadIcon className='w-4 h-4 sm:w-5 mr-2'/>
                                    Download CV
                                </button>
                            </a>
                            <a href='#contact' className='w-full sm:w-auto'>
                                <button className="w-full sm:w-auto inline-flex items-center justify-center bg-linear-to-r from-orange-500 to-amber-500 border-0 py-3 px-6 sm:px-8 hover:shadow-[0_0_40px_rgb(255,165,0,0.7)] rounded-full text-base sm:text-lg font-semibold transition-all duration-300 transform cursor-pointer">
                                    <Mail className='w-4 h-4 sm:w-5 sm:h-5 mr-2'/>
                                    Contact ME
                                </button>
                            </a>
                        </div>
                    </div>                    
                </div>
                <div className='lg:w-1/2 w-full max-w-md lg:max-w-lg mt-8 lg:mt-0 flex justify-center'
                data-aos='fade-left'
                data-aos-delay='400'>
                    <div className='relative w-4/5 sm:w-3/4 lg:w-full'>
                        <div className='relative overflow-hidden'>
                            <img src={hero} alt='Hero image' className='w-full h-auto object-cover transform hover:scale-105 transition-transform duration-500'/>
                            <div>
                                <img src={hi} alt='Hi icon' className='absolute top-4 sm:top-1 left-6 sm:left-20 w-14 h-14 sm:h-20 object-contain animate-bounce opacity-90 z-10'/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={`absolute -top-20 -left-20 w-40 h-40 sm:w-64 sm:h-64 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse delay-1000 hidden sm:block ${darkMode ? "bg-linear-to-r from-orange-500 via-amber-500 to-yellow-400" : "bg-linear-to-r from-purple-400 via-pink-400 to-red-400"}`}>

            </div>
        </section>    
    </div>
  )
}

export default Hero