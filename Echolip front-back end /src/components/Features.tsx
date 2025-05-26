import React from 'react';
import { 
  Video, 
  FileOutput, 
  Database, 
  Cpu, 
  LineChart 
} from 'lucide-react';

const Features: React.FC = () => {
  return (
    <section id="features" className="py-20 bg-gray-950">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center text-sm text-teal-400 mb-3">
            <span className="mr-2">🔄</span>
            FEATURES
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Key Capabilities
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            LipNet combines advanced deep learning techniques to achieve accurate lip reading.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <FeatureCard 
            icon={<Video className="text-violet-400" />}
            title="Video Input"
            description="Process silent videos with lip movements at variable frame rates and resolutions."
            highlight="violet"
          />
          
          <FeatureCard 
            icon={<FileOutput className="text-teal-400" />}
            title="Text Output"
            description="Generate accurate text transcriptions based solely on visual lip movement cues."
            highlight="teal"
          />
          
          <FeatureCard 
            icon={<Database className="text-orange-400" />}
            title="Pretrained Weights"
            description="Use our pretrained model weights for immediate evaluation or continue training for domain-specific tasks."
            highlight="orange"
          />
          
          <FeatureCard 
            icon={<Cpu className="text-rose-400" />}
            title="Model Architecture"
            description="Combines 3D convolutional layers, bidirectional LSTMs, and dense layers for optimal performance."
            highlight="rose"
          />
          
          <FeatureCard 
            icon={<Database className="text-blue-400" />}
            title="Data Pipeline"
            description="Custom TensorFlow dataset for efficient processing of video frames and text alignments."
            highlight="blue"
          />
          
          <FeatureCard 
            icon={<LineChart className="text-emerald-400" />}
            title="Custom Callbacks"
            description="Monitor predictions during training with specialized callbacks for real-time insight."
            highlight="emerald"
          />
        </div>
        
        <div className="mt-16 bg-gradient-to-r from-violet-900/20 via-teal-900/20 to-violet-900/20 border border-gray-800 rounded-xl p-6 lg:p-8">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4">Dataset Structure</h3>
              <p className="text-gray-300 mb-6">
                LipNet is trained on a structured dataset of video files and their corresponding text alignments.
              </p>
              
              <div className="bg-gray-900 border border-gray-800 rounded-lg p-4 font-mono text-sm overflow-x-auto">
                <pre className="text-gray-300">
{`data/
  ├── s1/
  │   ├── video1.mpg
  │   ├── video2.mpg
  │   └── ...
  └── alignments/
      └── s1/
          ├── video1.align
          ├── video2.align
          └── ...`}
                </pre>
              </div>
            </div>
            
            <div className="bg-gray-900 border border-gray-800 rounded-lg p-4 text-sm">
              <h4 className="text-lg font-semibold mb-3 text-violet-400">Example Code Snippet</h4>
              <pre className="language-python font-mono text-gray-300 overflow-x-auto">
{`# Define vocabulary
vocab = [x for x in "abcdefghijklmnopqrstuvwxyz'?!123456789 "]

# Load and preprocess data
train_dataset = LipNetDataset(
    video_path="data/s1",
    align_path="data/alignments/s1",
    batch_size=32
)

# Build model architecture
model = LipNet(
    vocab_size=len(vocab) + 1,  # +1 for CTC blank token
    max_sequence_length=75
)`}
              </pre>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  highlight: 'violet' | 'teal' | 'orange' | 'rose' | 'blue' | 'emerald';
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description, highlight }) => {
  const highlightClasses = {
    violet: 'from-violet-900/20 to-violet-900/5 border-violet-800/30 hover:border-violet-700/50',
    teal: 'from-teal-900/20 to-teal-900/5 border-teal-800/30 hover:border-teal-700/50',
    orange: 'from-orange-900/20 to-orange-900/5 border-orange-800/30 hover:border-orange-700/50',
    rose: 'from-rose-900/20 to-rose-900/5 border-rose-800/30 hover:border-rose-700/50',
    blue: 'from-blue-900/20 to-blue-900/5 border-blue-800/30 hover:border-blue-700/50',
    emerald: 'from-emerald-900/20 to-emerald-900/5 border-emerald-800/30 hover:border-emerald-700/50',
  };
  
  return (
    <div className={`bg-gradient-to-b ${highlightClasses[highlight]} border rounded-xl p-6 transition-all hover:transform hover:scale-105`}>
      <div className="w-12 h-12 rounded-lg bg-gray-800 flex items-center justify-center mb-4">
        {React.cloneElement(icon as React.ReactElement, { size: 24 })}
      </div>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </div>
  );
};

export default Features;