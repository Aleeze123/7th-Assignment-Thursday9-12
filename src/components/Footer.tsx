import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
const Footer = () => {
  return (
    <div className="bg-blue-100 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-4">
          <p className="text-gray-700 font-medium mb-2">
            &copy; 2024 Aleeza | Assignment 07
          </p>
          <p className="text-gray-600 text-sm">Client-side and Server-side Data Fetching</p>
        </div>
        <div className="mt-4 flex justify-center space-x-6">
          <a
            href="https://github.com/Aleeze123/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-blue-500 transition duration-300 flex items-center space-x-2">
            <FaGithub className="text-xl" />
            <span className="hidden sm:inline">GitHub</span>
          </a>
          <a
            href="https://www.linkedin.com/in/aleeza-a-i68735305"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-blue-500 transition duration-300 flex items-center space-x-2">
            <FaLinkedin className="text-xl" />
            <span className="hidden sm:inline">LinkedIn</span>
          </a>
        </div>
        <div className="mt-4 text-sm text-gray-600">
          <p>If you have any questions, feel free to reach out at:</p>
          <p>
            <a
              href="mailto:aleeza@example.com"
              className="text-blue-600 hover:text-blue-800">
              alizey649@gmail.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};
export default Footer;
