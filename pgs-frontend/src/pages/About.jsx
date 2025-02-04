import React from 'react'
import Navbar from '../components/Navbar';

export default function About() {
    return (
        <>
        <Navbar />
        <section className="bg-white dark:bg-gray-900">
            <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
                <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">About Pet Grab System</h1>
                <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
                    Pet Grab System is dedicated to helping pet owners manage their pets effortlessly. Whether it's tracking healthcare, adoption, or everyday needs, our platform ensures your pet’s well-being at your fingertips.
                </p>
            </div>
        </section>
        </>
        
    );
}
