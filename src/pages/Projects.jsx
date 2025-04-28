import React from "react";
import { GlowCard } from "../GlowCard";

const Projects = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-black to-blue-900 text-white px-6 py-16">
      <h1 className="text-4xl font-bold text-center mb-12">My Projects</h1>

      <div className="flex flex-col items-center gap-10">
        <GlowCard
          title="URL Shortener – Link Management & Tracking Platform"
          description=""
          glowColor="red"
          width="70rem"
        >
          <div className="flex flex-col md:flex-row-reverse items-center gap-6 text-left">
            {/* Image on right */}
            <img
              src="/Achievement1.jpg" // Replace with your actual image path
              alt="URL Shortener"
              className="w-full md:w-1/3 rounded-xl shadow-lg transition-transform duration-300 hover:scale-105"
            />

            {/* Text on left */}
            <div className="space-y-4">
              <p>
                URL shortening and management web platform built using the{" "}
                <span className="font-semibold text-blue-400">MERN stack</span>.
                Users can seamlessly create, customize, and share shortened URLs
                with unique aliases, enhancing accessibility and branding. The
                interface is designed for simplicity and speed, ensuring users
                get things done in just a few clicks.
              </p>

              <p>
                Integrated{" "}
                <span className="font-semibold text-blue-400">
                  user authentication
                </span>{" "}
                using JWT and{" "}
                <span className="font-semibold text-blue-400">
                  role-based authorization
                </span>{" "}
                to provide secure, personalized access. Users can manage their
                URLs from a dedicated panel, with full control over edits,
                deletions, and redirection behaviors.
              </p>
              <p>
                The backend, built with{" "}
                <span className="font-semibold text-blue-400">
                  Node.js and Express.js
                </span>
                , connects with{" "}
                <span className="font-semibold text-blue-400">MongoDB</span> to
                ensure fast and reliable data operations. Middleware handles
                validation, error responses, and API security layers
                efficiently.
              </p>
              <p className="font-semibold text-sm text-blue-300">
                Tech Stack: Node.js, Express.js, MongoDB, JWT.
              </p>
              <p className="font-semibold text-sm text-white-300">
                Link:{" "}
                <a
                  className="font-semibold text-sm text-blue-300"
                  target="_blank"
                  href="https://github.com/ananyaSingh5040/ShortURL"
                >
                  Github-ShortURL
                </a>
              </p>
            </div>
          </div>
        </GlowCard>

        <GlowCard
  title="Task Management App"
  description=""
  glowColor="blue"
  width="70rem"
>
  <div className="flex flex-col md:flex-row-reverse items-center gap-6 text-left">
    {/* Image on right */}
    <img
      src="/Achievement2.jpg" // Replace with your actual image path
      alt="Task Management App"
   className="w-full md:w-1/2 rounded-xl shadow-lg transition-transform duration-300 hover:scale-105"
    />

    {/* Text on left */}
    <div className="space-y-4">
      <p>
        Task management web app built using the{" "}
        <span className="font-semibold text-purple-400">MERN stack</span>. It
        allows users to create, update, and delete tasks with ease. The app
        offers a user-friendly interface designed for seamless task
        organization and management.
      </p>

      <p>
        Implemented{" "}
        <span className="font-semibold text-purple-400">full CRUD functionality</span>
        , enabling users to manage their tasks effectively. The app supports
        user authentication for secure login and real-time task updates.
      </p>

      <p>
        Built with{" "}
        <span className="font-semibold text-purple-400">Node.js</span> and{" "}
        <span className="font-semibold text-purple-400">Express.js</span> on the
        backend, and{" "}
        <span className="font-semibold text-purple-400">React.js</span> for the
        front end, with MongoDB as the database. The app ensures smooth
        operations with state management for real-time updates.
      </p>

      <p className="font-semibold text-sm text-purple-300">
        Tech Stack: React.js, Node.js, Express.js, MongoDB.
      </p>
      <p className="font-semibold text-sm text-white-300">
        Link:{" "}
        <a
          className="font-semibold text-sm text-purple-300"
          target="_blank"
          href="https://lpu-mern.vercel.app/signup"
        >
          Task Management App
        </a>
      </p>
    </div>
  </div>
</GlowCard>

<GlowCard
  title="Cherry Bakes – Vintage Themed Bakery Website"
  description="Frontend Developer"
  glowColor="pink"
  width="70rem"
>
  <div className="flex flex-col md:flex-row-reverse items-center gap-6 text-left">
    {/* Image on right */}
    <img
      src="/Achievement3.jpg" // Replace with your actual image path
      alt="Cherry Bakes Website"
      className="w-full md:w-1/2 rounded-xl shadow-lg transition-transform duration-300 hover:scale-105"
    />

    {/* Text on left */}
    <div className="space-y-4">
      <p>
        Designed and developed <span className="font-semibold text-pink-400">Cherry Bakes</span>, a delightful bakery website with a{" "}
        <span className="font-semibold text-pink-400">vintage aesthetic</span> using just HTML and CSS. The site features a cozy, feminine vibe with soft pastel colors and elegant typography to reflect the brand’s identity.
      </p>

      <p>
        Built <span className="font-semibold text-pink-400">responsive layouts</span> that adapt across devices, ensuring users have a consistent browsing experience whether they’re on mobile, tablet, or desktop. Every element was hand-crafted with love to showcase the bakery's offerings in the most delicious way.
      </p>

      <p>
        Styled using <span className="font-semibold text-pink-400">custom fonts</span>, gentle animations, and smooth hover effects. The website brings a sense of warmth and nostalgia—perfectly aligning with the cozy, old-school bakery vibe.
      </p>

      <p className="font-semibold text-sm text-pink-300">
        Tech Stack: HTML, CSS, JavaScript.
      </p>
      <p className="font-semibold text-sm text-white-300">
        Link:{" "}
        <a
          className="font-semibold text-sm text-pink-300"
          target="_blank"
          href="https://github.com/ananyaSingh5040/cherryBakes"
        >
          Github-Cherry Bakes
        </a>
      </p>
    </div>
  </div>
</GlowCard>

      </div>
      <footer className="text-center mt-16">
          <p className="text-sm text-gray-400">© 2025 by Ananya Singh.</p>
        </footer>
    </div>
  );
};

export default Projects;
