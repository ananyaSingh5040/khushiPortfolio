import React from 'react'
import { GlowCard } from '../GlowCard'

const Achievements = () => {
  return (
    <div className="min-h-[calc(100vh-4rem)] px-4 py-12 flex flex-col items-center">
      <h1 className="text-4xl font-bold text-center mb-12">My Achievements</h1>

      <div className="flex flex-col gap-6 max-w-6xl w-full">
        {/* 1st Card – image on right */}
        <GlowCard
          title="Build-a-thon Finalist"
          description=""
          glowColor="purple"
          width="100%"
        >
          <div className="flex flex-col md:flex-row-reverse items-center gap-6 text-left">
            <img
              src="/ResearchPaperAchievment.jpg"
              alt="Hireverse Project"
              className="w-full md:w-1/4 rounded-xl shadow-lg transition-transform duration-300 hover:scale-105"
            />
            <div>
              <p className="text-xl font-semibold text-purple-400">
                Ranked among the top 10 teams in Build-a-thon. Built <strong>Hireverse</strong> — an AI-powered recruitment platform with features like automated interview bots, coding tests, performance analytics, and feedback to minimize HR workload and enhance student preparation.
              </p>
            </div>
          </div>
        </GlowCard>

        {/* 2nd Card – image on left */}
        <GlowCard
          title="GeeksforGeeks Milestone"
          description=""
          glowColor="green"
          width="100%"
        >
          <div className="flex flex-col md:flex-row items-center gap-6 text-left p-8">
            <img
              src="/Achievement2.jpg"
              alt="GeeksforGeeks"
              className="w-full md:w-1/2 rounded-xl shadow-lg transition-transform duration-300 hover:scale-105"
            />
            <div>
              <p className="text-xl font-semibold text-green-400">
                Ranked among the top 700 students on GeeksforGeeks. Solved over 200+ DSA problems and consistently contributed to discussions and solutions.
              </p>
            </div>
          </div>
        </GlowCard>

        {/* 3rd Card – image on right */}
        <GlowCard
          title="GitHub Achievements"
          description=""
          glowColor="blue"
          width="100%"
        >
          <div className="flex flex-col md:flex-row-reverse items-center gap-6 text-left p-8">
            <img
              src="/Achievement3.jpg"
              alt="GitHub Achievements"
              className=" w-full md:w-1/3 rounded-xl shadow-lg transition-transform duration-300 hover:scale-105"
            />
            <div>
              <p className="text-xl font-semibold text-blue-400">
                Earned <strong>YOLO</strong> and <strong>Pull Shark</strong> badges on GitHub with a streak of more than 4 months of consistent open-source contributions and pull requests.
              </p>
            </div>
          </div>
        </GlowCard>
      </div>
    </div>
  )
}

export default Achievements