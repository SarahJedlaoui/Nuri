
"use client"
import React, { useState } from "react";

export default function AddYourContent() {
  const [activeTab, setActiveTab] = useState("Podcast");

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-50 p-8">
      {/* Main Container */}
      <div className="bg-white rounded-lg shadow-lg w-full max-w-5xl p-6">
        {/* Header Section */}
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-gray-800">1-Add Your Content</h1>
          <p className="text-gray-600">
            Let’s start by giving your episode a title and brief description
          </p>
        </div>

        {/* Tabs Section */}
        <div className="flex space-x-4 border-b mb-6">
          {["Custom", "Advertisement", "Podcast", "Audiobook", "Meditation", "Sales"].map(
            (tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2 font-medium text-sm ${
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
          <div className="w-1/4 border-r pr-4">
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
                  className="text-sm font-medium text-gray-700 hover:text-blue-600 cursor-pointer"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Main Content */}
          <div className="w-3/4 pl-6">
            <div className="bg-gray-100 p-4 rounded-lg shadow-md">
              <p className="text-gray-700 text-sm leading-relaxed">
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
          <button className="bg-blue-500 text-white px-6 py-2 rounded-md shadow-md hover:bg-blue-600">
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
