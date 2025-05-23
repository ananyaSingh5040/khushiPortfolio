import React from "react";
import { GlowCard } from "../GlowCard";

const Achievements = () => {
  return (
    <div className="min-h-[calc(100vh-4rem)] px-4 py-12 flex flex-col items-center">
      <h1 className="text-4xl font-bold text-center mb-12">My Achievements</h1>

      <div className="flex flex-col gap-6 max-w-6xl w-full">
        {/* 1st Card – image on right */}
        <GlowCard
          title="Reseach paper acceptance"
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
                Presented my research paper,{" "}
                <strong>
                  "Detecting Irregularities in Energy Consumption Patterns Using
                  Machine Learning for Fault Detection and Prevention"
                </strong>
                , at <strong>WCAIAA 2025</strong>, hosted by Sardar Patel
                University. The paper will be published in the{" "}
                <strong>SCOPUS-indexed Springer Book Series</strong>, Lecture
                Notes in Networks and Systems.{" "}
              </p>
            </div>
          </div>
        </GlowCard>

        {/* 2nd Card – image on left */}
        <GlowCard
          title="ICAMC-25_Acceptance of paper"
          description=""
          glowColor="green"
          width="100%"
        >
          <div className="flex flex-col md:flex-row items-center gap-6 text-left p-8">
            <img
              src="/Achievement-2.jpg"
              alt="GeeksforGeeks"
              className="w-full md:w-1/2 rounded-xl shadow-lg transition-transform duration-300 hover:scale-105"
            />
            <div>
              <p className="text-xl font-semibold text-green-400">
                Research paper accepted for presentation at the{" "}
                <strong>
                  25th International Conference on Advances in Management and
                  Computing (ICAMC-25)
                </strong>
                . Explored innovative approaches in [your research focus],
                contributing to advancements in [your research area].
              </p>
            </div>
          </div>
        </GlowCard>

        {/* 3rd Card – image on right */}
        <GlowCard
          title="UI/UX Achievements"
          description=""
          glowColor="blue"
          width="100%"
        >
          <div className="flex flex-col md:flex-row-reverse items-center gap-6 text-left p-8">
            <img
              src="/Achieve.jpg"
              alt="GitHub Achievements"
              className=" w-full md:w-1/2 rounded-xl shadow-lg transition-transform duration-300 hover:scale-105"
            />
            <div>
              <p className="text-xl font-semibold text-blue-400">
                Secured <strong>Third Position</strong> in a prestigious{" "}
                <strong>UI/UX Design Competition</strong>, demonstrating
                creativity, user-centric thinking, and excellence in design
                principles.
              </p>
            </div>
          </div>
        </GlowCard>
      </div>
    </div>
  );
};

export default Achievements;
