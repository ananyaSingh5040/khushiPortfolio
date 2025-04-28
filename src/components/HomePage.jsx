import React from "react";
import { FaReact } from "react-icons/fa";
import { MdDataArray } from "react-icons/md";
import { GiArtificialIntelligence } from "react-icons/gi";


const HomePage = () => {
  return (
    <div>
    

      <div className="min-h-screen bg-gradient-to-br from-black via-black to-blue-900 text-white py-16 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
          {/* Left Section - Photo and Details */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left mt-25">
            <img
              src="/KhushiImage.jpg"
              alt="Ananya Singh"
              className="w-60 h-60 rounded-full mb-6"
            />
            <h1 className="text-4xl font-semibold mb-2">Khushi Patel</h1>
            <p className="text-xl font-light mb-6">Machine-Learning Enthusiast</p>
          </div>

          {/* Right Section - About Me */}
          <div className="flex-1 mt-25">
            <h2 className="text-3xl font-extrabold mb-4">About Me</h2>
            <p className="text-lg mb-6">
              Greetings, I’m Khushi Patel, a passionate Computer Science student
              from Lovely Professional University, Phagwara, specializing in:
            </p>

            <div className="mb-8 space-y-4">
              <div className="flex items-center space-x-3 text-xl font-semibold">
                <GiArtificialIntelligence className="text-3xl text-cyan-400" />
                <span>ML & AI</span>
              </div>

              <div className="flex items-center space-x-3 text-xl font-semibold">
                <MdDataArray className="text-3xl text-pink-400" />
                <span>Data Structures & Algorithms</span>
              </div>
            </div>

            <p className="text-lg mb-8">
              I’m deeply committed to building innovative and scalable
              applications that tackle real-world problems through technology.
            </p>

            <div className="flex justify-start gap-6">
              <div className="flex gap-6">
                <a
                  href="/resume"
                  className="text-lg hover:text-blue-900 transition font-medium px-5 py-2 border border-white/30 rounded-md backdrop-blur-md hover:border-white/70 "
                >
                  Resume
                </a>
                <a
                  href="/projects"
                  className="text-lg hover:text-blue-900 transition font-medium px-5 py-2 border border-white/30 rounded-md backdrop-blur-md hover:border-white/70 "
                >
                  Projects
                </a>
              </div>
            </div>

            <p className="mt-8 text-lg">
              With a strong foundation in both ML and AI
              development, I’m eager to contribute to impactful projects and
              continue growing in this exciting field. Currently, I’m pursuing
              my B.Tech in Computer Science & Engineering and constantly honing
              my skills in emerging technologies to stay at the forefront of
              software development.
            </p>
          </div>
        </div>

        <footer className="text-center mt-16">
          <p className="text-sm text-gray-400">© 2025 by Khushi Sharma.</p>
        </footer>
      </div>
    </div>
  );
};

export default HomePage;
