import React from "react";
import {
  CheckCircle,
  Clock,
  Camera,
  Ban,
  Save,
  Search,
  FileText,
} from "lucide-react";

const TestDetails = ({ onNext, onCancel }) => {
  const details = [
    {
      icon: <CheckCircle className="text-green-500 w-6 h-6" />,
      text: "Ensure a stable internet connection.",
    },
    {
      icon: <Clock className="text-gray-500 w-6 h-6" />,
      text: "The exam is timed — once started, you cannot pause or restart.",
    },
    {
      icon: <Camera className="text-gray-500 w-6 h-6" />,
      text: "Your webcam and microphone may be used for AI proctoring.",
    },
    {
      icon: <Ban className="text-red-500 w-6 h-6" />,
      text: "Switching tabs or using external applications may end the test automatically.",
    },
    {
      icon: <Save className="text-gray-500 w-6 h-6" />,
      text: "Answers are auto-saved after each question.",
    },
    {
      icon: <Search className="text-gray-500 w-6 h-6" />,
      text: "Read each question carefully before moving to the next.",
    },
    {
      icon: <FileText className="text-gray-500 w-6 h-6" />,
      text: "Once submitted, results will be generated automatically.",
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="bg-white rounded-xl shadow-lg w-full p-6 md:p-8">
        <h1 className="text-2xl md:text-3xl font-semibold text-center mb-6">
          Test Details
        </h1>

        <ul className="space-y-4">
          {details.map((item, index) => (
            <li
              key={index}
              className="flex items-start gap-3 text-gray-800 text-sm md:text-base"
            >
              <span className="mt-1">{item.icon}</span>
              <p className="leading-snug">{item.text}</p>
            </li>
          ))}
        </ul>
      </div>
      
      <div className="mt-8 flex justify-between w-full gap-4">
        <button
          onClick={onCancel}
          className="bg-gray-200 text-gray-700 px-6 py-2 rounded-lg text-sm md:text-base hover:bg-gray-300 transition"
        >
          Cancel
        </button>
        <button
          onClick={onNext}
          className="bg-blue-600 text-white px-6 py-2 rounded-lg text-sm md:text-base hover:bg-blue-700 transition"
        >
          Understand & Accept
        </button>
      </div>
    </div>
  );
};

export default TestDetails;