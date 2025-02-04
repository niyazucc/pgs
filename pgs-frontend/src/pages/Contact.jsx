import React from 'react'
import Navbar from '../components/Navbar';

export default function Contact() {
    return (
        <>
            <Navbar />
            <section className="bg-white dark:bg-gray-900">
                <div className="py-8 px-4 mx-auto max-w-screen-md text-center lg:py-16 lg:px-12">
                    <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">Contact Us</h1>
                    <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">
                        Have questions? Reach out to us, and we’ll be happy to assist you.
                    </p>
                    <form className="space-y-6">
                        <input type="text" placeholder="Your Name" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500" />
                        <input type="email" placeholder="Your Email" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500" />
                        <textarea placeholder="Your Message" rows="4" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500"></textarea>
                        <button type="submit" className="w-full bg-slate-700 text-white py-3 rounded-lg hover:bg-primary-800 focus:ring-4 focus:ring-primary-300">Send Message</button>
                    </form>
                </div>
            </section>

        </>
    );
}