import React from 'react';

// Import the background image
import backgroundImage from '../components/bg.jpeg';
// Import the logo image
import logoImage from '../components/logo.jpeg';

export default function Register() {
    return (
        <section 
            className="bg-fixed bg-cover bg-center overflow-y-hidden"
            style={{ backgroundImage: `url(${backgroundImage.src})`, backgroundRepeat: 'repeat' }}
        >
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                <a href="#" className="flex items-center mb-6">
                    <img src={logoImage.src} alt="Logo" className="h-16" />
                </a>
                <div className="w-full bg-transparent rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-black dark:border-red-700">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 className="text-xl text-center font-bold leading-tight tracking-tight text-white md:text-2xl dark:text-red-400">
                            Register
                        </h1>
                        <form className="space-y-4 md:space-y-6" action="#">
                            <div>
                                <label htmlFor="name" className="block mb-2 text-sm font-medium text-white dark:text-red-400">Your Name</label>
                                <input 
                                    type="text" 
                                    name="name" 
                                    id="name" 
                                    className="bg-gray-200 border border-[#A52A2A] text-black text-sm rounded-lg focus:ring-red-500 focus:border-[#A52A2A] block w-full p-2.5 dark:bg-gray-700 dark:border-[#A52A2A] dark:placeholder-red-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-[#A52A2A]" 
                                    placeholder="Username" 
                                    required 
                                />
                            </div>
                            <div>
                                <label htmlFor="age" className="block mb-2 text-sm font-medium text-white dark:text-red-400">Age</label>
                                <input 
                                    type="number" 
                                    name="age" 
                                    id="age" 
                                    className="bg-gray-200 border border-[#A52A2A] text-black text-sm rounded-lg focus:ring-red-500 focus:border-[#A52A2A] block w-full p-2.5 dark:bg-gray-700 dark:border-[#A52A2A] dark:placeholder-red-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-[#A52A2A]" 
                                    placeholder="18"
                                    min="15" 
                                    required 
                                />
                            </div>
                            <div>
                                <label htmlFor="phone" className="block mb-2 text-sm font-medium text-white dark:text-red-400">Phone Number</label>
                                <input 
                                    type="tel" 
                                    name="phone" 
                                    id="phone" 
                                    className="bg-gray-200 border border-[#A52A2A] text-black text-sm rounded-lg focus:ring-red-500 focus:border-[#A52A2A] block w-full p-2.5 dark:bg-gray-700 dark:border-[#A52A2A] dark:placeholder-red-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-[#A52A2A]" 
                                    placeholder="+91 XXX-XXX-XXXX" 
                                    required 
                                />
                            </div>
                            <div>
                                <label htmlFor="college" className="block mb-2 text-sm font-medium text-white dark:text-red-400">College</label>
                                <input 
                                    type="text" 
                                    name="college" 
                                    id="college" 
                                    className="bg-gray-200 border border-[#A52A2A] text-black text-sm rounded-lg focus:ring-red-500 focus:border-[#A52A2A] block w-full p-2.5 dark:bg-gray-700 dark:border-[#A52A2A] dark:placeholder-red-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-[#A52A2A]" 
                                    placeholder="Your College" 
                                    required 
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block mb-2 text-sm font-medium text-white dark:text-red-400">Your Email</label>
                                <input 
                                    type="email" 
                                    name="email" 
                                    id="email" 
                                    className="bg-gray-200 border border-[#A52A2A] text-black text-sm rounded-lg focus:ring-red-500 focus:border-[#A52A2A] block w-full p-2.5 dark:bg-gray-700 dark:border-[#A52A2A] dark:placeholder-red-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-[#A52A2A]" 
                                    placeholder="name@company.com" 
                                    required 
                                />
                            </div>
                        
                            <button 
                                type="submit" 
                                className="w-full text-white bg-red-600 hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
                            >
                                Register
                            </button>
                          
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
