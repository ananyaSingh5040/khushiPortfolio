import React from 'react';

const Skills = () => {
  return (
    <div className="min-h-[calc(100vh-4rem)] px-4 py-12 flex flex-col items-center">
      {/* Centered Heading */}
      <h1 className="text-4xl font-bold text-center mb-12">My Skills</h1>

      {/* Languages Section */}
      <div className="mb-12">
        <h2 className="text-3xl font-semibold mb-4">Languages</h2>
        <div className="flex flex-wrap gap-8 justify-center">
          <div className="flex flex-col items-center">
            <img
              src="/js.jpg" // Add your image path here
              alt="JavaScript"
              className="w-24 h-24 mb-2"
            />
            <p className="text-xl font-semibold">JavaScript</p>
          </div>
          <div className="flex flex-col items-center">
            <img
              src="/python.jpg" // Add your image path here
              alt="Python"
              className="w-24 h-24 mb-2"
            />
            <p className="text-xl font-semibold">Python</p>
          </div>
          <div className="flex flex-col items-center">
            <img
              src="/c.jpg" // Add your image path here
              alt="C++"
              className="w-24 h-24 mb-2"
            />
            <p className="text-xl font-semibold">C++</p>
          </div>
        </div>
      </div>

      {/* Tools/Platforms Section */}
      <div className="mb-12">
        <h2 className="text-3xl font-semibold mb-4">Tools/Platforms</h2>
        <div className="flex flex-wrap gap-8 justify-center">
          <div className="flex flex-col items-center">
            <img
              src="/mongodb.jpg" // Add your image path here
              alt="MongoDB"
              className="w-24 h-24 mb-2"
            />
            <p className="text-xl font-semibold">MongoDB</p>
          </div>
          <div className="flex flex-col items-center">
            <img
              src="/mysql.jpg" // Add your image path here
              alt="MySQL"
              className="w-24 h-24 mb-2"
            />
            <p className="text-xl font-semibold">MySQL</p>
          </div>
        </div>
      </div>

      {/* Frameworks Section */}
      <div className="mb-12">
        <h2 className="text-3xl font-semibold mb-4">Frameworks</h2>
        <div className="flex flex-wrap gap-8 justify-center">
          <div className="flex flex-col items-center">
            <img
              src="/tailwindcss.jpg" // Add your image path here
              alt="Tailwind CSS"
              className="w-24 h-24 mb-2"
            />
            <p className="text-xl font-semibold">Tailwind CSS</p>
          </div>
          <div className="flex flex-col items-center">
            <img
              src="/bootstrap.jpg" // Add your image path here
              alt="Bootstrap"
              className="w-24 h-24 mb-2"
            />
            <p className="text-xl font-semibold">Bootstrap</p>
          </div>
          <div className="flex flex-col items-center">
            <img
              src="/nodejs.jpg" // Add your image path here
              alt="NodeJS"
              className="w-24 h-24 mb-2"
            />
            <p className="text-xl font-semibold">NodeJS</p>
          </div>
          <div className="flex flex-col items-center">
            <img
              src="/React.jpg" // Add your image path here
              alt="ReactJS"
              className="w-24 h-24 mb-2"
            />
            <p className="text-xl font-semibold">ReactJS</p>
          </div>
          <div className="flex flex-col items-center">
            <img
              src="/expressjs.jpg" // Add your image path here
              alt="ExpressJS"
              className="w-24 h-24 mb-2"
            />
            <p className="text-xl font-semibold">ExpressJS</p>
          </div>
        </div>
      </div>

      {/* Others Section */}
      <div>
        <h2 className="text-3xl font-semibold mb-4">Others</h2>
        <div className="flex flex-wrap gap-8 justify-center">
          <div className="flex flex-col items-center">
            <img
              src="/html.jpg" // Add your image path here
              alt="HTML"
              className="w-24 h-24 mb-2"
            />
            <p className="text-xl font-semibold">HTML</p>
          </div>
          <div className="flex flex-col items-center">
            <img
              src="/Css.jpg" // Add your image path here
              alt="CSS"
              className="w-24 h-24 mb-2"
            />
            <p className="text-xl font-semibold">CSS</p>
          </div>
          <div className="flex flex-col items-center">
            <img
              src="/git.jpg" // Add your image path here
              alt="Git"
              className="w-24 h-24 mb-2"
            />
            <p className="text-xl font-semibold">Git</p>
          </div>
          <div className="flex flex-col items-center">
            <img
              src="/Github.jpg" // Add your image path here
              alt="Github"
              className="w-24 h-24 mb-2"
            />
            <p className="text-xl font-semibold">Github</p>
          </div>
          <div className="flex flex-col items-center">
            <img
              src="/php.jpg" // Add your image path here
              alt="JWT Authentication"
              className="w-24 h-24 mb-2"
            />
            <p className="text-xl font-semibold">PHP</p>
          </div>
          <div className="flex flex-col items-center">
            <img
              src="/laravel.jpg" // Add your image path here
              alt="Laravel"
              className="w-24 h-24 mb-2"
            />
            <p className="text-xl font-semibold">Laravel</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
