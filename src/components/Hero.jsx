import React, { useState } from 'react'
import {HERO_CONTENT} from '../constants/index.js'
import profilePic from '../assets/kevinRushProfile.png'
import tech from '../assets/undraw_ai_agent_pdkp.svg'
import resume from '../assets/edit1_res.pdf'
import { motion } from "motion/react"
// import { delay } from 'motion'

  

const container = (delay) => ({
    hidden: { x: -100, opacity: 0 },
    visible: {
        x: 0,
        opacity: 1,
        transition: {
            duration: 0.5,
            delay: delay,
        }
    },
})

const Hero = () => {
    const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
        <div className="flex flex-wrap">
            <div className='w-full lg:w-1/2'>
                <div className="flex flex-col items-center lg:items-start">
                    <motion.h1 
                    variants={container(0)}
                    initial="hidden"
                    animate="visible"
                    className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl">
                    Kevin Range
                    </motion.h1>
                    <motion.span 
                    variants={container(0.5)}
                    initial="hidden"
                    animate="visible"
                    className="bg-gradient-to-r from-pink-300 via-slate-500
                    to-purple-500 bg-clip-text text-3xl tracking-tight text-transparent">
                        Back End Developer
                    </motion.span>
                    <motion.p 
                    variants={container(1)}
                    initial="hidden"
                    animate="visible"
                    className="my-2 max-w-xl py-6 font-light tracking-tighter">
                        {HERO_CONTENT}
                    </motion.p>
                </div>
            </div>
            <div className='w-full lg:w-1/2 lg:p-8'>

                {/* <div className='flex justify-center'>
                    <motion.img 
                    initial={{ x: 100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 1, delay: 1.2 }}
                    // src={profilePic} alt="Kevin Rush" 
                    src={tech} 
                    />
                </div> */}

                {/* <div className='relative flex justify-center'> */}
                <div className="flex flex-col items-center">
                    <motion.div 
                            initial={{ x: 100, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ duration: 1, delay: 1.2 }}
                            className="flex flex-col items-center"
                        >
                            <img
                                src={tech}
                                alt="Backend Developer Illustration"
                                className="rounded-xl w-3/4 h-auto"
                            />
                        <motion.button 
                        // initial={{ x: 100, opacity: 0 }}
                        // animate={{ x: 0, opacity: 1 }}
                        // // transition={{ duration: 1, delay: 1.2 }}
                        // transition={{ duration: 1, delay: 1.2, ease: "easeOut" }}

                        // old code for button
                        //     onClick={() => setIsOpen(true)}
                        //     // className="absolute bottom-4 bg-neutral-800 text-white px-4 py-2 rounded-lg shadow-md hover:bg-neutral-700"
                        //     className="mt-6 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 shadow-lg"
                        //     // className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 shadow-lg"
                        // >
                        //     View Resume

                        onClick={() => setIsOpen(true)}
                        // className="mt-6 bg-gradient-to-r from-pink-400 to-purple-500 text-white font-semibold py-6 px-8 rounded-xl shadow-lg transform transition-all duration-300 hover:scale-105 hover:bg-gradient-to-r hover:from-pink-500 hover:to-purple-600 flex items-center space-x-2"
                        // className="mt-6 bg-gradient-to-r from-pink-400 to-purple-500 text-white font-semibold py-4 px-6 sm:py-6 sm:px-8 rounded-xl shadow-lg transform transition-all duration-300 hover:scale-105 hover:bg-gradient-to-r hover:from-pink-500 hover:to-purple-600 flex items-center space-x-2"
                        className="mt-6 bg-gradient-to-r from-pink-400 to-purple-500 text-white font-semibold py-3 px-5 rounded-lg shadow-md transform transition-all duration-300 hover:scale-105 hover:bg-gradient-to-r hover:from-pink-500 hover:to-purple-600 flex items-center space-x-2"

                        whileHover={{ scale: 1.05 }} // Scale effect on hover
                        whileTap={{ scale: 0.95 }}   // Slight scale effect when clicked
                    >
                        <svg
                        className="w-5 h-5 text-white"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M14.752 11.168l-3.91 3.91a1 1 0 01-1.415 0l-3.91-3.91m0 0a1 1 0 010-1.415l3.91-3.91a1 1 0 011.415 0l3.91 3.91m-3.91 3.91l3.91-3.91"
                        />
                        </svg>
                        <span>View Resume</span>

                        </motion.button>
                    </motion.div>
                </div>

            </div>
        </div>

            {/* {isOpen && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                <div className="bg-white rounded-lg overflow-hidden max-w-2xl w-full p-4 relative">
                    <button 
                        onClick={() => setIsOpen(false)}
                        className="absolute top-2 right-2 text-black font-bold text-xl"
                    >
                        ×
                    </button>
                    <iframe 
                        src={resume}
                        className="w-full h-96"
                        title="Resume"
                    ></iframe>
                    <div className="flex justify-end mt-4">
                        <a 
                            href={resume}
                            download
                            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
                        >
                            Download
                        </a>
                    </div>
                </div>
            </div>
        )} */}

            {/* {isOpen && (
            <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.4 }}
                className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-0 z-50"
            >
                <div className="bg-white p-8 rounded-xl shadow-lg w-11/12 max-w-2xl relative">
                <button
                    onClick={() => setIsOpen(false)}
                    className="absolute top-4 right-4 text-black text-xl hover:text-red-500"
                >
                    &times;
                </button>
                <iframe
                    src={resume}
                    title="Resume"
                    className="w-full h-[500px]"
                ></iframe>
                <div className="text-center mt-4">
                    <a 
                    href={resume} 
                    download 
                    className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                    >
                    Download Resume
                    </a>
                </div>
                </div>
            </motion.div>
        )} */}

            {isOpen && (
                        <motion.div 
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="fixed inset-0 z-50 flex items-center justify-center"
                            >
                            {/* Background blur */}
                            <div className="absolute inset-0 bg-white/10 backdrop-blur-sm"></div>

                            {/* Popup Content */}
                                <motion.div
                                    initial={{ scale: 0.8, opacity: 0 }}
                                    animate={{ scale: 1, opacity: 1 }}
                                    exit={{ scale: 0.8, opacity: 0 }}
                                    transition={{ duration: 0.4 }}
                                    // className="relative z-10 bg-white p-4 rounded-lg shadow-lg w-full max-w-4xl" // <-- added width settings
                                    className="relative z-10 bg-white p-4 rounded-lg shadow-lg w-full max-w-4xl" // No border here
                                    >
                                    <button
                                        onClick={() => setIsOpen(false)}
                                        className="absolute top-2 right-4 text-black text-3xl hover:text-red-500"
                                    >
                                        &times;
                                    </button>
                                    <iframe
                                        src={resume}
                                        title="Resume"
                                        // className="w-full h-[600px] rounded-lg border-0" // <-- fixed borders and size
                                        className="w-full h-[600px] rounded-lg" // Removed border class here
                                    ></iframe>
                                </motion.div>
                            </motion.div>

                        )}
    </div>
  )
}

export default Hero
