"use client"
import React, { useState } from "react";

export default function AddYourContent() {
  const [activeTab, setActiveTab] = useState("Podcast");

  return (
    <div className="min-h-screen w-full bg-gray-50 flex justify-center items-center p-4">
      {/* Main Container */}
      <div className="bg-[#DEE9FF] rounded-lg shadow-lg w-full max-w-6xl p-6 md:p-8">
        {/* Header Section */}
        <div className="mb-6 text-center md:text-left">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800">
            1-Add Your Content
          </h1>
          <p className="text-gray-600 text-sm md:text-lg">
            Let’s start by giving your episode a title and brief description
          </p>
        </div>

        {/* Tabs Section */}
        <div className="flex flex-wrap gap-2 md:gap-4 border-b mb-6 overflow-auto">
          {["Custom", "Advertisement", "Podcast", "Audiobook", "Meditation", "Sales"].map(
            (tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 md:px-6 py-2 md:py-3 text-sm md:text-lg font-medium ${
                  activeTab === tab
                    ? "text-blue-600 border-b-2 border-blue-600"
                    : "text-gray-500 hover:text-blue-600"
                }`}
              >
                {tab}
              </button>
            )
          )}
        </div>

        {/* Content Section */}
        <div className="flex flex-col md:flex-row">
          {/* Sidebar */}
          <div className="w-full md:w-1/4 border-b md:border-b-0 md:border-r pb-4 md:pb-0 pr-0 md:pr-6">
            <ul className="space-y-2 md:space-y-4">
              {[
                "NotebookLM Style",
                "News show",
                "Quick episode (Classic)",
                "Blog to Podcast",
                "Newsletter to Podcast",
                "Research Paper to Podcast",
                "Guest Interview",
                "Podcast Intro",
              ].map((item) => (
                <li
                  key={item}
                  className="text-sm md:text-base font-medium text-gray-700 hover:text-blue-600 cursor-pointer"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Main Content */}
          <div className="w-full md:w-3/4 mt-4 md:mt-0 md:pl-6">
            <div className="bg-gray-100 p-4 md:p-6 rounded-lg shadow-md">
              <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                Lorem ipsum dolor sit amet consectetur. Curabitur pretium nisi mus suscipit nec
                neque nulla. Orci eget ut diam odio ipsum donec auctor. Et pretium netus quis
                netus sollicitudin ullamcorper fringilla. Arcu eros nisl varius imperdiet
                adipiscing imperdiet. Quisque ac tempus senectus aliquam eu convallis.
              </p>
            </div>
          </div>
        </div>

        {/* Footer Section */}
        <div className="flex justify-end mt-6">
          <button className="bg-blue-500 text-black px-6 md:px-8 py-2 md:py-3 text-sm md:text-lg rounded-md shadow-md hover:bg-blue-600">
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
