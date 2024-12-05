"use client";

import React, { useRef, useState } from "react";
import Navbar from "../Navbar/index";
import Banner from "../Banner/index";
import Aboutus from "../Aboutus/index";
import Articles from "../Articles/index";
import Articles2 from "../Articles2/index";
import Footer from "../Footer/index";
import { useRouter } from "next/navigation"; 
export default function Nuri() {
  const router = useRouter(); // Initialize the router
  const [messages, setMessages] = useState<
    { sender: "user" | "bot"; content: string | React.ReactNode }[]
  >([]);
  const [input, setInput] = useState("");
  const [step, setStep] = useState(0);
  const [currentView, setCurrentView] = useState<"articles1" | "articles2" | null>(
    null
  ); // Initialize with null to hide the section by default
  const articlesRef = useRef<HTMLDivElement>(null);
  // Predefined AI Responses
  const aiResponses = [
    {
      type: "text",
      content: (
        <>
          <p className="text-gray-800">Choose how you want to display them</p>
          <div className="flex-col gap-4 mt-4">
            <div
              className="border p-4 rounded-md shadow-md cursor-pointer"
              onClick={() => {
                setCurrentView("articles1");
                articlesRef.current?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              <p className="font-bold">Products</p>
              <p>Common Supplements for ADHD Support</p>
              <div className="flex flex-col items-center" >
                <img
                  src="/images/articles/option1.png"
                  alt="Option 1"
                  className="w-100 h-100 object-cover rounded-md"
                />
              </div>
            </div>
            <div
              className="border p-4 rounded-md shadow-md cursor-pointer"
              onClick={() => {
                setCurrentView("articles2");
                articlesRef.current?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              <p className="font-bold">Products</p>
              <p>Common Supplements for ADHD Support (Circular Layout)</p>
              <div className="flex flex-col items-center">
                <img
                  src="/images/articles/option2.png"
                  alt="Option 2"
                  className="w-100 h-100 object-cover rounded-md"
                />
              </div>
            </div>
          </div>
        </>
      ),
    },
    {
      type: "text",
      content:
        "We’re seeing that 10% of your patients are looking for more ways to understand and manage their ADHD. What if we created a podcast to provide them with reliable information and guidance?",
    },
    {
      type: "audio",
      content: (
        <div>
          <p className="text-gray-800">
            Here’s our proposal for the podcast, you can always edit and change
            it
          </p>
          <audio controls className="mt-4">
            <source src="/images/articles/podcast.mp3" type="audio/mpeg" />
            Your browser does not support the audio element.
          </audio>
          <button  onClick={() => router.push("/podcast")} 
          className="mt-4 bg-blue text-white px-4 py-2 rounded-xl shadow-md hover:bg-blue-600">
            Edit Podcast
          </button>
        </div>
      ),
    },
  ];

  // Handle user input submission
  const sendMessage = () => {
    if (!input.trim()) return;

    // Add user message to the chat
    setMessages((prev) => [
      ...prev,
      { sender: "user", content: input.trim() },
    ]);

    // Add bot response based on the current step
    if (step < aiResponses.length) {
      setTimeout(() => {
        setMessages((prev) => [
          ...prev,
          { sender: "bot", content: aiResponses[step].content },
        ]);
        setStep((prev) => prev + 1); // Move to the next step
      }, 500);
    }

    setInput(""); // Clear the input field
  };

  // Handle Enter key press
  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      sendMessage();
    }
  };

  return (
    <main className="flex-row lg:flex md:flex h-screen bg-gray-50">
      {/* Left Chat Section */}
      <div className="lg:w-1/4 h-full flex flex-col bg-white rounded-xl shadow-xl">
        {/* Chat Messages */}
        <div className="bg-gray-100 p-4 rounded-xl shadow-xl flex items-start space-x-3">
          <div className="flex-shrink-0">
            <span className="inline-block bg-blue-500 text-white w-8 h-8 flex items-center justify-center rounded-full">
              ✨
            </span>
          </div>
          <div>
            <p className="text-sm font-medium text-gray-800">Hello!</p>
            <p className="text-sm text-gray-600">Now, how can I help you?</p>
          </div>
        </div>
        <div className="flex-1 overflow-y-auto p-4 space-y-6">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`p-4 rounded-xl shadow-xl ${message.sender === "user"
                  ? "bg-[#F5F8FF] self-end max-w-[80%] ml-auto"
                  : "bg-gray-100 max-w-[80%]"
                }`}
            >
              {typeof message.content === "string" ? (
                <p
                  className={`text-sm ${message.sender === "user"
                      ? "text-gray-700"
                      : "text-gray-800"
                    }`}
                >
                  {message.content}
                </p>
              ) : (
                message.content
              )}
            </div>
          ))}
        </div>

        {/* Input Section */}
        <div className="p-4 bg-white border-t shadow-sm flex items-center gap-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyPress}
            placeholder="Write your answer"
            className="flex-1 border border-gray-300 rounded-full px-4 py-2 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            onClick={sendMessage}
            className="bg-[#4A90E2] text-white px-4 py-2 rounded-full shadow-md hover:bg-[#4A90E2]"
          >
            →
          </button>
        </div>
      </div>

      {/* Scrollable Section */}
      <div className="lg:w-3/4 overflow-y-scroll rounded-xl shadow-xl">
        <div className="p-6">
          <Navbar />
          <Banner />
          <Aboutus />
          <div ref={articlesRef}>
          {currentView === "articles1" && <Articles2 />}
          {currentView === "articles2" && <Articles />}
          </div>
          {/* Dynamically Render Articles or Articles2 */}
          
        </div>
      </div>
    </main>
  );
}
