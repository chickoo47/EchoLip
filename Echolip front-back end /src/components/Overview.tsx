import React from 'react';
import { Code, Database, BarChart } from 'lucide-react';

const Overview: React.FC = () => {
  return (
    <section id="overview" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center text-sm text-teal-400 mb-3">
              <span className="mr-2">🚀</span>
              OVERVIEW
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              What is <span className="text-violet-400">LipNet</span>?
            </h2>
            <p className="text-xl text-gray-300 leading-relaxed">
              LipNet is an advanced deep learning model designed for silent lip reading.
            </p>
          </div>
          
          <div className="prose prose-invert max-w-none">
            <p className="text-gray-300 mb-6 leading-relaxed">
              LipNet takes silent video clips as input, analyzes the movement of lips frame by frame, and predicts the corresponding text captions. The model leverages cutting-edge neural network architectures to achieve impressive results in translating visual lip movements into textual representations.
            </p>
            
            <div className="bg-gray-800 border border-gray-700 rounded-xl p-6 mb-8">
              <h3 className="flex items-center text-xl font-semibold mb-4">
                <Code size={20} className="mr-2 text-teal-400" />
                Core Technologies
              </h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start">
                  <span className="bg-violet-900/30 text-violet-300 rounded-md p-1 mr-2 mt-0.5">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M16 6l4 4-4 4M8 6l-4 4 4 4M12 2l4 16"></path>
                    </svg>
                  </span>
                  <div>
                    <span className="font-medium">3D Convolutional Layers</span> - Extract spatiotemporal features from sequences of video frames
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="bg-teal-900/30 text-teal-300 rounded-md p-1 mr-2 mt-0.5">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect>
                      <rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect>
                      <line x1="6" y1="6" x2="6" y2="6"></line>
                      <line x1="6" y1="18" x2="6" y2="18"></line>
                    </svg>
                  </span>
                  <div>
                    <span className="font-medium">Bidirectional LSTM Networks</span> - Capture sequential relationships in both forward and backward directions
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="bg-orange-900/30 text-orange-300 rounded-md p-1 mr-2 mt-0.5">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                      <polyline points="15 3 21 3 21 9"></polyline>
                      <line x1="10" y1="14" x2="21" y2="3"></line>
                    </svg>
                  </span>
                  <div>
                    <span className="font-medium">Connectionist Temporal Classification (CTC)</span> - Handles variable-length sequence alignment between input and output
                  </div>
                </li>
              </ul>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 rounded-xl p-6">
                <div className="flex items-center mb-4">
                  <Database size={20} className="mr-2 text-violet-400" />
                  <h3 className="text-xl font-semibold">Input Processing</h3>
                </div>
                <p className="text-gray-300">
                  LipNet processes video frames of lip movements, normalizes them, and passes them through the neural network architecture to extract meaningful patterns.
                </p>
              </div>
              
              <div className="bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 rounded-xl p-6">
                <div className="flex items-center mb-4">
                  <BarChart size={20} className="mr-2 text-teal-400" />
                  <h3 className="text-xl font-semibold">Output Generation</h3>
                </div>
                <p className="text-gray-300">
                  The model outputs character probabilities at each timestep, which are then decoded using CTC decoding to produce the final text prediction.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Overview;