import React from 'react';
import { Play, Code } from 'lucide-react';

const Visualizations: React.FC = () => {
  return (
    <section id="demo" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center text-sm text-teal-400 mb-3">
            <span className="mr-2">🎥</span>
            VISUALIZATIONS
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            See LipNet in Action
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Visualizations of the model's predictions and performance.
          </p>
        </div>
        
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Video example */}
            <div className="bg-gray-800 border border-gray-700 rounded-xl overflow-hidden">
              <div className="relative aspect-video bg-gray-900 overflow-hidden">
                <img 
                  src="https://images.pexels.com/photos/5878603/pexels-photo-5878603.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                  alt="Person speaking" 
                  className="w-full h-full object-cover opacity-60"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <button className="w-16 h-16 rounded-full bg-violet-700 hover:bg-violet-600 flex items-center justify-center transition-colors">
                    <Play size={28} className="text-white ml-1" />
                  </button>
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-gray-900 to-transparent p-4">
                  <div className="text-sm font-medium text-white">
                    Sample Input: <span className="text-violet-400">"Hello world"</span>
                  </div>
                </div>
              </div>
              <div className="p-5">
                <h3 className="text-xl font-semibold mb-2">Input Video Processing</h3>
                <p className="text-gray-400 mb-4">
                  LipNet processes video frames and extracts lip movement features for prediction.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="text-xs px-2 py-1 rounded-full bg-violet-900/50 text-violet-300">Video Input</span>
                  <span className="text-xs px-2 py-1 rounded-full bg-gray-700 text-gray-300">Frame Extraction</span>
                  <span className="text-xs px-2 py-1 rounded-full bg-gray-700 text-gray-300">Feature Analysis</span>
                </div>
              </div>
            </div>
            
            {/* Prediction output */}
            <div className="bg-gray-800 border border-gray-700 rounded-xl overflow-hidden">
              <div className="relative aspect-video bg-gradient-to-br from-gray-900 to-gray-800 overflow-hidden">
                <div className="absolute inset-0 flex flex-col items-center justify-center p-6">
                  <div className="w-full mb-8">
                    <div className="h-6 bg-gray-700 rounded-full mb-2 overflow-hidden">
                      <div className="h-full w-4/5 bg-gradient-to-r from-violet-500 to-teal-500 rounded-full"></div>
                    </div>
                    <div className="flex justify-between text-xs text-gray-400">
                      <span>Confidence</span>
                      <span>80%</span>
                    </div>
                  </div>
                  
                  <div className="text-center mb-4">
                    <div className="text-sm text-gray-400 mb-2">Predicted Text:</div>
                    <div className="text-2xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-violet-400 to-teal-400">
                      "Hello world"
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap justify-center gap-2 mt-4">
                    {['H', 'e', 'l', 'l', 'o', ' ', 'w', 'o', 'r', 'l', 'd'].map((char, index) => (
                      <div 
                        key={index} 
                        className="w-8 h-8 flex items-center justify-center rounded-md bg-gray-700 text-white"
                        style={{ 
                          animationName: 'fadeIn', 
                          animationDuration: '0.5s', 
                          animationDelay: `${index * 0.1}s`,
                          animationFillMode: 'both' 
                        }}
                      >
                        {char === ' ' ? <span className="w-4 h-0.5 bg-gray-500"></span> : char}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="p-5">
                <h3 className="text-xl font-semibold mb-2">Model Prediction</h3>
                <p className="text-gray-400 mb-4">
                  The model outputs character probabilities which are decoded into text.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="text-xs px-2 py-1 rounded-full bg-teal-900/50 text-teal-300">Text Output</span>
                  <span className="text-xs px-2 py-1 rounded-full bg-gray-700 text-gray-300">CTC Decoding</span>
                  <span className="text-xs px-2 py-1 rounded-full bg-gray-700 text-gray-300">Confidence Score</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Evaluation code */}
          <div className="mt-16 bg-gradient-to-r from-violet-900/20 via-teal-900/20 to-violet-900/20 border border-gray-800 rounded-xl p-6">
            <div className="flex items-center mb-4">
              <Code size={20} className="mr-2 text-teal-400" />
              <h3 className="text-xl font-semibold">Evaluation Code</h3>
            </div>
            <p className="text-gray-300 mb-6">
              Use the following code to evaluate LipNet on your own videos:
            </p>
            <div className="bg-gray-800 border border-gray-700 rounded-lg p-4 font-mono text-sm overflow-x-auto">
              <pre className="text-gray-300">
{`# Load pretrained weights
model.load_weights('lipnet_weights.h5')

# Load video data
video_data = load_video('path/to/your/video.mp4')
processed_frames = preprocess_frames(video_data)

# Make prediction
yhat = model.predict(tf.expand_dims(processed_frames, axis=0))

# Decode the prediction
decoded = tf.keras.backend.ctc_decode(
    yhat, 
    [75],  # Input sequence length
    greedy=True
)[0][0].numpy()

# Convert indices to text
prediction = ''.join([vocab[i] for i in decoded[0] if i != -1])
print("Predicted text:", prediction)

# Visualize a frame
plt.figure(figsize=(10, 5))
plt.imshow(processed_frames[40])  # Show frame #40
plt.title("Sample Frame")
plt.axis('off')
plt.show()`}
              </pre>
            </div>
          </div>
        </div>
      </div>
      
      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
};

export default Visualizations;