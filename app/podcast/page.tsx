
"use client"
import React, { useState } from "react";

export default function AddYourContent() {
  const [activeTab, setActiveTab] = useState("Podcast");

  return (
    <div className="min-h-screen w-full bg-gray-50 flex justify-center items-center">
      {/* Main Container */}
      <div className="bg-[#DEE9FF] rounded-lg shadow-lg w-full max-w-6xl p-8 h-full">
        {/* Header Section */}
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-gray-800">1-Add Your Content</h1>
          <p className="text-gray-600 text-lg">
            Let’s start by giving your episode a title and brief description
          </p>
        </div>

        {/* Tabs Section */}
        <div className="flex space-x-6 border-b mb-6">
          {["Custom", "Advertisement", "Podcast", "Audiobook", "Meditation", "Sales"].map(
            (tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-3 text-lg font-medium ${
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
        <div className="flex">
          {/* Sidebar */}
          <div className="w-1/4 border-r pr-6">
            <ul className="space-y-4">
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
                  className="text-base font-medium text-gray-700 hover:text-blue-600 cursor-pointer"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Main Content */}
          <div className="w-3/4 pl-6">
            <div className="bg-gray-100 p-6 rounded-lg shadow-md h-full">
              <p className="text-gray-700 text-base leading-relaxed">
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
          <button className="bg-blue-500 text-black px-8 py-3 text-lg rounded-md shadow-md hover:bg-blue-600">
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
