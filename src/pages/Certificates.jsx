import React from "react";
import { GlowCard } from "../GlowCard";

const Certificates = () => {
  return (
    <div className="min-h-[calc(100vh-4rem)] px-4 py-12 flex flex-col items-center">
      {/* Centered Heading */}
      <h1 className="text-4xl font-bold text-center mb-12">My Certificates</h1>

      {/* Cards stacked vertically */}
      <div className="flex flex-col gap-6 max-w-6xl w-full ">
        {/* 1st Card – image left */}
        <GlowCard
          title="Udemy Certificate"
          description=""
          glowColor="purple"
          width="100%"
        >
          <div className="flex flex-col md:flex-row mb-5 items-center gap-6 mt-5 text-left">
            <img
              src="/courseraCertificate.jpg"
              alt="Udemy"
              className="w-full md:w-1/2 rounded-xl shadow-lg transition-transform duration-300 hover:scale-105"
            />
            <div className="flex-1">
              <p className="text-xl font-semibold text-purple-400">
                OOPS Concept In C++
              </p>
            </div>
          </div>
        </GlowCard>

        {/* 2nd Card – image right */}
        <GlowCard title="Coursera" description="" glowColor="blue" width="100%">
  <div className="flex flex-col md:flex-row-reverse items-center gap-6 text-left">
    <img
      src="/IBMCertificate.jpg"
      alt="Coursera"
      className="w-full md:w-1/2 rounded-xl shadow-lg transition-transform duration-300 hover:scale-105"
    />
    <div className="flex-1">
      <p className="text-xl font-semibold text-blue-400">
       Introduction to Hardware and Operating Systems
      </p>
    </div>
  </div>
</GlowCard>

{/* 3rd Card – image left again */}
<GlowCard title="Udemy" description="" glowColor="green" width="100%">
  <div className="flex flex-col md:flex-row items-center gap-6 text-left">
    <img
      src="/GoogleCertificate.jpg"
      alt="GFG Certificate"
      className="w-full md:w-1/2 rounded-xl shadow-lg transition-transform duration-300 hover:scale-105"
    />
    <div className="flex-1">
      <p className="text-xl font-semibold text-green-400">
    The Bits and Bytes of Computer Networking
      </p>
    </div>
  </div>
</GlowCard>

      </div>
    </div>
  );
};

export default Certificates;
