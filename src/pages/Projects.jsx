import React from "react";
import { GlowCard } from "../GlowCard";

const Projects = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-black to-blue-900 text-white px-6 py-16">
      <h1 className="text-4xl font-bold text-center mb-12">My Projects</h1>

      <div className="flex flex-col items-center gap-10">
        <GlowCard
          title="Customer Testimonals"
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
                Developed a dynamic and visually engaging{" "}
                <span className="font-semibold text-blue-400">
                  customer testimonials section{" "}
                </span>
                for a business website. This feature highlights{" "}
                <span className="font-semibold text-blue-400">
                  real user feedback
                </span>{" "}
                to boost brand credibility and trust among potential clients.
                The section is designed to fit seamlessly into the website’s
                modern aesthetic, making it both eye-catching and authentic.
              </p>

              <p>
                Created an intuitive and accessible{" "}
                <span className="font-semibold text-blue-400">layout</span>{" "}
                featuring{" "}
                <span className="font-semibold text-blue-400">
                  customer photos, roles, and short experiences
                </span>
                with the product or service. Each testimonial is thoughtfully
                structured to emphasize the customer's positive impact and
                story, enhancing emotional connection with site visitors.
              </p>

              <p>
                Focused heavily on{" "}
                <span className="font-semibold text-blue-400">
                  clean UI/UX principles
                </span>{" "}
                to ensure easy readability across devices. Used{" "}
                <span className="font-semibold text-blue-400">
                  responsive design techniques
                </span>{" "}
                and subtle animations to create a smooth, professional browsing
                experience.
              </p>

              <p>
                Additionally, optimized the section for{" "}
                <span className="font-semibold text-blue-400">
                  SEO performance
                </span>{" "}
                by ensuring that customer testimonials are structured properly
                for search engines, boosting discoverability and site ranking.
              </p>

              <p>
                This project plays a critical role in{" "}
                <span className="font-semibold text-blue-400">
                  marketing and customer acquisition strategies
                </span>
                , significantly improving user confidence and conversion rates.
              </p>

              <p className="font-semibold text-sm text-blue-300">
                Tech Stack: React.js, Tailwind CSS, Framer Motion (for
                animations).
              </p>
            </div>
          </div>
        </GlowCard>

        <GlowCard
          title="AI-powered web app that scans food products"
          description=""
          glowColor="blue"
          width="70rem"
        >
          <div className="flex flex-col md:flex-row-reverse items-center gap-6 text-left">
            {/* Image on right */}
            <img
              src="/Achievement2.jpg" // Replace with your actual image path
              alt="Task Management App"
              className="w-full md:w-1/4 rounded-xl shadow-lg transition-transform duration-300 hover:scale-105"
            />

            {/* Text on left */}
            <div className="space-y-4">
              <p>
                Developed an{" "}
                <span className="font-semibold text-red-400">
                  AI-powered web application
                </span>
                that enables users to scan food product labels using{" "}
                <span className="font-semibold text-red-400">
                  OCR (Optical Character Recognition)
                </span>
                and{" "}
                <span className="font-semibold text-red-400">
                  NLP (Natural Language Processing)
                </span>
                technologies. The system intelligently extracts text from
                product packaging and analyzes ingredient lists to identify{" "}
                <span className="font-semibold text-red-400">
                  harmful substances
                </span>{" "}
                that could pose risks to{" "}
                <span className="font-semibold text-red-400">
                  heart health
                </span>
                .
              </p>

              <p>
                Integrated{" "}
                <span className="font-semibold text-red-400">
                  real-time ingredient databases
                </span>
                from trusted sources such as{" "}
                <span className="font-semibold text-red-400">FDA</span> and{" "}
                <span className="font-semibold text-red-400">FSSAI</span>{" "}
                through{" "}
                <span className="font-semibold text-red-400">
                  automated web scraping
                </span>
                . This ensures that the application stays updated with the
                latest food safety information and regulatory guidelines.
              </p>

              <p>
                Engineered the backend using{" "}
                <span className="font-semibold text-red-400">Flask</span> for
                efficient API handling and smooth processing of OCR and NLP
                workflows. Implemented asynchronous data fetching and caching
                strategies to deliver{" "}
                <span className="font-semibold text-red-400">
                  fast and accurate results
                </span>
                to users.
              </p>

              <p>
                Deployed the application on{" "}
                <span className="font-semibold text-red-400">
                  Google Cloud Platform (GCP)
                </span>
                to ensure{" "}
                <span className="font-semibold text-red-400">
                  high scalability, low latency
                </span>
                , and{" "}
                <span className="font-semibold text-red-400">
                  reliable performance
                </span>{" "}
                even under heavy user loads.
              </p>

              <p className="font-semibold text-sm text-red-300">
                Tech Stack: Python, Flask, Google Cloud Platform, Tesseract OCR,
                BeautifulSoup, NLP libraries (spaCy).
              </p>
            </div>
          </div>
        </GlowCard>

        <GlowCard
          title="AI-based air quality prediction system"
          description=""
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
                Developed an{" "}
                <span className="font-semibold text-green-400">
                  AI-based air quality prediction system
                </span>{" "}
                utilizing real-time{" "}
                <span className="font-semibold text-green-400">
                  IoT sensor data
                </span>{" "}
                and{" "}
                <span className="font-semibold text-green-400">
                  machine learning techniques
                </span>
                .
              </p>

              <p>
                Applied{" "}
                <span className="font-semibold text-green-400">
                  feature engineering
                </span>
                ,{" "}
                <span className="font-semibold text-green-400">
                  data normalization
                </span>
                , and{" "}
                <span className="font-semibold text-green-400">
                  hyperparameter tuning (GridSearchCV)
                </span>{" "}
                to improve prediction accuracy.
              </p>

              <p>
                Built an interactive{" "}
                <span className="font-semibold text-green-400">
                  Flask web app
                </span>{" "}
                to display{" "}
                <span className="font-semibold text-green-400">
                  real-time AQI forecasts
                </span>
                ,{" "}
                <span className="font-semibold text-green-400">
                  pollution trends
                </span>
                , and{" "}
                <span className="font-semibold text-green-400">
                  risk analysis
                </span>
                .
              </p>

              <p>
                Deployed the model using{" "}
                <span className="font-semibold text-green-400">AWS EC2</span>{" "}
                and{" "}
                <span className="font-semibold text-green-400">Flask API</span>,
                ensuring{" "}
                <span className="font-semibold text-green-400">
                  real-time data processing and monitoring
                </span>
                .
              </p>

              <p className="font-semibold text-sm text-green-300">
                Tech Stack: Python, Flask, Scikit-learn, AWS EC2, IoT Sensors,
                Pandas, GridSearchCV.
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
