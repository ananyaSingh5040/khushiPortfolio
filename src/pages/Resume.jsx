import React from "react";
import { Link } from "react-router-dom";

const Resume = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-black to-blue-900 text-white px-4 py-20">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-12">My Resume</h1>

        {/* --- Buttons for Both Resumes --- */}
        <div className="flex flex-col md:flex-row justify-center gap-6 mb-12">
          {/* Main CV */}
          <div>
            <h2 className="text-xl font-semibold mb-2">Main CV</h2>
            <div className="flex gap-4 justify-center">
              <a
                href="/MainCV.pdf"
                download
                className="hover:text-blue-900 inline-block px-6 py-3 border border-white/30 rounded-md backdrop-blur-md hover:border-white/70 transition"
              >
                Download General CV
              </a>
              <a
                href="#"
                className="inline-block px-6 py-3 border border-white/30 rounded-md backdrop-blur-md hover:border-white/70 hover:text-blue-900 transition"
              >
                View General CV
              </a>
            </div>
          </div>

          {/* Specialized CV */}
          <div>
            <h2 className="text-xl font-semibold mb-2">Specialized CV</h2>
            <div className="flex gap-4 justify-center">
              <a
                href="/MainCV.pdf"
                download
                className="hover:text-blue-900 inline-block px-6 py-3 border border-white/30 rounded-md backdrop-blur-md hover:border-white/70 transition"
              >
                Download Specialized CV
              </a>
              <a
                href="#special-cv"
                className="inline-block px-6 py-3 border border-white/30 rounded-md backdrop-blur-md hover:border-white/70 hover:text-blue-900 transition"
              >
                View Specialized CV
              </a>
            </div>
          </div>
        </div>

        {/* --- CV Iframes --- */}
        <div className="grid gap-16">
          {/* Main CV Iframe */}
          <div id="main-cv">
            <h3 className="text-2xl font-bold mb-4">Main CV</h3>
            <iframe
              src="/MainCV.pdf"
              title="Main Resume"
              className="w-full h-[80vh] border-none"
              style={{
                border: "none",
                margin: 0,
                padding: 0,
                overflow: "hidden",
              }}
            ></iframe>
          </div>

          {/* Specialized CV Iframe */}
          <div id="special-cv">
            <h3 className="text-2xl font-bold mb-4">Specialized CV</h3>
            <iframe
              src="/MainCV.pdf"
              title="Specialized Resume"
              className="w-full h-[80vh] border-none"
              style={{
                border: "none",
                margin: 0,
                padding: 0,
                overflow: "hidden",
              }}
            ></iframe>
          </div>
        </div>

        {/* Footer */}
        <footer className="text-center mt-16">
          <p className="text-sm text-gray-400">© 2025 by Khushi Patel.</p>
        </footer>
      </div>
    </div>
  );
};

export default Resume;
