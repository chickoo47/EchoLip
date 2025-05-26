import React from 'react';
import { Globe, Zap, Cpu, Clock } from 'lucide-react';

const Future: React.FC = () => {
  return (
    <section id="future" className="py-20 bg-gray-950">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center text-sm text-teal-400 mb-3">
            <span className="mr-2">🌍</span>
            FUTURE ENHANCEMENTS
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            What's Next for LipNet
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            The roadmap for future improvements and expansions.
          </p>
        </div>
        
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <FutureCard 
              icon={<Globe />}
              title="Multilingual Support"
              description="Expand the model to support multiple languages by training on diverse linguistic datasets."
              tasks={[
                "Collect multilingual lip reading datasets",
                "Adapt model architecture for language-specific features",
                "Implement language detection and switching"
              ]}
              color="violet"
            />
            
            <FutureCard 
              icon={<Zap />}
              title="Real-time Processing"
              description="Optimize the model for live video streams to enable real-time lip reading applications."
              tasks={[
                "Reduce model latency and computational requirements",
                "Implement streaming input processing",
                "Create mobile-friendly model variants"
              ]}
              color="teal"
            />
            
            <FutureCard 
              icon={<Cpu />}
              title="Model Architecture"
              description="Explore advanced architectures like Transformers and attention mechanisms."
              tasks={[
                "Implement Transformer-based sequence modeling",
                "Add self-attention for better feature extraction",
                "Experiment with Vision Transformer backbone"
              ]}
              color="orange"
            />
            
            <FutureCard 
              icon={<Clock />}
              title="Long-form Content"
              description="Extend capabilities to handle longer video sequences and full conversations."
              tasks={[
                "Implement sliding window approach for long videos",
                "Add context awareness across sequences",
                "Integrate language models for improved coherence"
              ]}
              color="rose"
            />
          </div>
          
          <div className="mt-16 bg-gradient-to-r from-violet-900/20 via-teal-900/20 to-violet-900/20 border border-gray-800 rounded-xl p-6 lg:p-8 text-center">
            <h3 className="text-2xl font-bold mb-4">Contribute to LipNet</h3>
            <p className="text-gray-300 mb-8 max-w-3xl mx-auto">
              LipNet is an open-source project, and we welcome contributions from developers, researchers, and enthusiasts.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a 
                href="#"
                className="px-6 py-3 rounded-lg bg-violet-700 hover:bg-violet-600 text-white font-medium transition-all flex items-center justify-center"
              >
                GitHub Repository
              </a>
              <a 
                href="#"
                className="px-6 py-3 rounded-lg bg-gray-800 hover:bg-gray-700 text-white font-medium border border-gray-700 transition-all flex items-center justify-center"
              >
                Join Discussion
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

interface FutureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  tasks: string[];
  color: 'violet' | 'teal' | 'orange' | 'rose';
}

const FutureCard: React.FC<FutureCardProps> = ({ icon, title, description, tasks, color }) => {
  const colorClasses = {
    violet: 'bg-violet-900/20 border-violet-800/30',
    teal: 'bg-teal-900/20 border-teal-800/30',
    orange: 'bg-orange-900/20 border-orange-800/30',
    rose: 'bg-rose-900/20 border-rose-800/30'
  };
  
  const iconColorClasses = {
    violet: 'text-violet-400',
    teal: 'text-teal-400',
    orange: 'text-orange-400',
    rose: 'text-rose-400'
  };
  
  return (
    <div className={`${colorClasses[color]} border rounded-xl p-6`}>
      <div className="flex items-center mb-4">
        <div className="w-10 h-10 rounded-lg bg-gray-800 flex items-center justify-center mr-3">
          {React.cloneElement(icon as React.ReactElement, { size: 20, className: iconColorClasses[color] })}
        </div>
        <h3 className="text-xl font-semibold">{title}</h3>
      </div>
      <p className="text-gray-400 mb-4">
        {description}
      </p>
      <div>
        <h4 className="text-sm font-medium mb-2 text-gray-300">Planned Tasks:</h4>
        <ul className="space-y-1">
          {tasks.map((task, index) => (
            <li key={index} className="flex items-start text-sm">
              <span className={`${iconColorClasses[color]} mr-2`}>•</span>
              <span className="text-gray-400">{task}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Future;