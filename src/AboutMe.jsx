import React from 'react';
import { Button } from './components/ui/button';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import emailjs from 'emailjs-com';


// Initialize EmailJS with your user ID
emailjs.init("service_nvxljhf");

function sendEmail(e) {
  // Initialize EmailJS with your user ID
    emailjs.init("service_nvxljhf");

    function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('Gmail', 'template_dc6fiam', e.target, 'user_YOUR_USER_ID')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
}

}

// In your Contact Me button's onClick event, call the sendEmail function
<button onClick={sendEmail}>Contact Me</button>

const AboutMe = () => {
    return (
        <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
            <div className="relative py-3 sm:max-w-xl sm:mx-auto">
                <div className="absolute inset-0 bg-gradient-to-r from-gray-400 to-light-blue-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
                <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
                    <div className="max-w-md mx-auto flex space-x-5">
                        <div className="flex-shrink-0">
                            <img src="data:image/jpeg;base64,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" className="h-48 w-48 object-cover rounded-full" />
                        </div>
                        <div className="flex flex-col justify-between">
                            <div>
                                <h2 className="text-2xl font-bold mb-2">Hassan Lafai</h2>
                                <p className="text-gray-500 text-sm">Alternative training IT engineer at Eiffage Rail | ENSIM</p>
                            </div>
                            <div className="flex space-x-3">
                                <a href="https://github.com/HassLaf" target="_blank" rel="noopener noreferrer"><FaGithub className="w-6 h-6 text-gray-700 hover:text-gray-900" /></a>
                                <a href="https://www.linkedin.com/in/hassan-lafai/" target="_blank" rel="noopener noreferrer"><FaLinkedin className="w-6 h-6 text-gray-700 hover:text-gray-900" /></a>
                                <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer"><FaTwitter className="w-6 h-6 text-gray-700 hover:text-gray-900" /></a>
                            </div>
                        </div>
                    </div>
                    <div className="mt-10">
                        <p className="text-gray-700">
                        I'm Hassan LAFAI, a software engineer with a passion for innovation and application development. I'm currently a software engineer at Eiffage Rail Caténaire, contributing to crucial initiatives for the company, and I'm always ready to take on new challenges.
                        </p>
                        <form onSubmit={sendEmail}>
                            <div className="mt-6">
                                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                                    Name
                                </label>
                                <div className="mt-1">
                                    <input
                                        type="text"
                                        name="name"
                                        id="name"
                                        autoComplete="name"
                                        required
                                        className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                                    />
                                </div>
                            </div>
                            <div className="mt-6">
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                    Email
                                </label>
                                <div className="mt-1">
                                    <input
                                        type="email"
                                        name="email"
                                        id="email"
                                        autoComplete="email"
                                        required
                                        className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                                    />
                                </div>
                            </div>
                            <div className="mt-6">
                                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                                    Message
                                </label>
                                <div className="mt-1">
                                    <textarea
                                        name="message"
                                        id="message"
                                        rows="4"
                                        required
                                        className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                                    ></textarea>
                                </div>
                            </div>
                            <div className="mt-6">
                                <Button type="submit" className="text-white font-bold py-2 px-4 rounded">
                                    Send Message
                                </Button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutMe;