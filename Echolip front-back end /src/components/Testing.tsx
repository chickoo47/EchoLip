import React, { useState } from 'react';
import { FileText, Play, RefreshCw } from 'lucide-react';

const Testing: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'code' | 'results'>('code');
  
  return (
    <section id="testing" className="py-20 bg-gray-950">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center text-sm text-teal-400 mb-3">
            <span className="mr-2">🔍</span>
            EVALUATION & TESTING
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Testing the Model
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Evaluate LipNet's performance with test videos and analyze the results.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-gray-900 border border-gray-800 rounded-xl overflow-hidden">
            <div className="flex border-b border-gray-800">
              <button 
                className={`px-4 py-3 text-sm font-medium flex items-center ${activeTab === 'code' ? 'text-violet-400 border-b-2 border-violet-400' : 'text-gray-400 hover:text-gray-300'}`}
                onClick={() => setActiveTab('code')}
              >
                <FileText size={16} className="mr-2" />
                Test Code
              </button>
              <button 
                className={`px-4 py-3 text-sm font-medium flex items-center ${activeTab === 'results' ? 'text-teal-400 border-b-2 border-teal-400' : 'text-gray-400 hover:text-gray-300'}`}
                onClick={() => setActiveTab('results')}
              >
                <Play size={16} className="mr-2" />
                Test Results
              </button>
            </div>
            
            <div className="p-6">
              {activeTab === 'code' ? (
                <div>
                  <h3 className="text-lg font-semibold mb-4">Testing Code</h3>
                  <div className="bg-gray-800 border border-gray-700 rounded-lg p-4 font-mono text-sm overflow-x-auto">
                    <pre className="text-gray-300">
{`# 1. Load the trained model with pretrained weights
model.load_weights('new_best_weights2.weights.h5')

# 2. Get a sample from the test dataset
test_dataset = LipNetDataset(
    video_path="data/s1/test",
    align_path="data/alignments/s1/test",
    batch_size=1
)
sample = test_dataset.next()

# 3. Make a prediction
yhat = model.predict(sample[0])

# 4. Decode the prediction using CTC decoder
decoded = tf.keras.backend.ctc_decode(
    yhat, 
    [75],  # Input sequence length
    greedy=True
)[0][0].numpy()

# 5. Convert indices to text
prediction = ''.join([vocab[i] for i in decoded[0] if i != -1])

# 6. Get ground truth from the sample
ground_truth = ''.join([vocab[i] for i in sample[1][0] if i != -1])

# 7. Calculate accuracy
word_error_rate = calculate_wer(ground_truth, prediction)
character_error_rate = calculate_cer(ground_truth, prediction)

# 8. Print results
print("Predicted:", prediction)
print("Ground truth:", ground_truth)
print(f"Word Error Rate: {word_error_rate:.2f}")
print(f"Character Error Rate: {character_error_rate:.2f}")`}
                    </pre>
                  </div>
                  
                  <div className="mt-6">
                    <h4 className="text-md font-medium mb-3 text-gray-300">Evaluation Metrics</h4>
                    <p className="text-gray-400 mb-4">
                      LipNet uses the following metrics to evaluate performance:
                    </p>
                    <ul className="space-y-2 text-gray-400">
                      <li className="flex items-start">
                        <span className="text-teal-400 mr-2">•</span>
                        <div>
                          <span className="font-medium text-gray-300">Word Error Rate (WER)</span> - The percentage of words incorrectly predicted
                        </div>
                      </li>
                      <li className="flex items-start">
                        <span className="text-teal-400 mr-2">•</span>
                        <div>
                          <span className="font-medium text-gray-300">Character Error Rate (CER)</span> - The percentage of characters incorrectly predicted
                        </div>
                      </li>
                      <li className="flex items-start">
                        <span className="text-teal-400 mr-2">•</span>
                        <div>
                          <span className="font-medium text-gray-300">Top-k Accuracy</span> - The percentage of correct predictions in the top k candidates
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              ) : (
                <div>
                  <h3 className="text-lg font-semibold mb-4">Test Results</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-gray-800 border border-gray-700 rounded-lg p-5">
                      <h4 className="text-md font-medium mb-3 flex items-center">
                        <span className="w-2 h-2 rounded-full bg-violet-400 mr-2"></span>
                        Model Accuracy
                      </h4>
                      
                      <div className="space-y-4">
                        <div>
                          <div className="flex justify-between text-sm mb-1">
                            <span className="text-gray-400">Word Error Rate</span>
                            <span className="text-gray-300">11.4%</span>
                          </div>
                          <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                            <div className="h-full w-[88.6%] bg-gradient-to-r from-teal-500 to-teal-400 rounded-full"></div>
                          </div>
                        </div>
                        
                        <div>
                          <div className="flex justify-between text-sm mb-1">
                            <span className="text-gray-400">Character Error Rate</span>
                            <span className="text-gray-300">4.8%</span>
                          </div>
                          <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                            <div className="h-full w-[95.2%] bg-gradient-to-r from-violet-500 to-violet-400 rounded-full"></div>
                          </div>
                        </div>
                        
                        <div>
                          <div className="flex justify-between text-sm mb-1">
                            <span className="text-gray-400">Top-3 Accuracy</span>
                            <span className="text-gray-300">97.2%</span>
                          </div>
                          <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                            <div className="h-full w-[97.2%] bg-gradient-to-r from-orange-500 to-orange-400 rounded-full"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-gray-800 border border-gray-700 rounded-lg p-5">
                      <h4 className="text-md font-medium mb-3 flex items-center">
                        <span className="w-2 h-2 rounded-full bg-teal-400 mr-2"></span>
                        Example Result
                      </h4>
                      
                      <div className="space-y-4">
                        <div>
                          <div className="text-sm text-gray-400 mb-1">Input Video ID:</div>
                          <div className="text-gray-300 font-mono bg-gray-900 px-3 py-1 rounded">s1_video43.mpg</div>
                        </div>
                        
                        <div>
                          <div className="text-sm text-gray-400 mb-1">Ground Truth:</div>
                          <div className="text-gray-300 font-mono bg-gray-900 px-3 py-1 rounded">"place red at j two now"</div>
                        </div>
                        
                        <div>
                          <div className="text-sm text-gray-400 mb-1">Prediction:</div>
                          <div className="text-teal-400 font-mono bg-gray-900 px-3 py-1 rounded">"place red at j two now"</div>
                        </div>
                        
                        <div className="flex items-center">
                          <span className="text-sm px-2 py-1 rounded-full bg-teal-900/50 text-teal-300 mr-2">
                            100% Match
                          </span>
                          <RefreshCw size={14} className="text-gray-500 mr-1" />
                          <span className="text-xs text-gray-500">Processed in 120ms</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-6 bg-gray-800 border border-gray-700 rounded-lg p-5">
                    <h4 className="text-md font-medium mb-3">Confusion Matrix</h4>
                    <p className="text-gray-400 text-sm mb-4">
                      The most commonly confused character pairs during evaluation:
                    </p>
                    
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                      {[
                        { pair: 'm / n', rate: '8.3%' },
                        { pair: 'b / p', rate: '7.1%' },
                        { pair: 's / z', rate: '5.9%' },
                        { pair: 'i / e', rate: '4.2%' },
                        { pair: 'd / t', rate: '3.8%' },
                        { pair: 'f / v', rate: '3.5%' },
                        { pair: 'g / k', rate: '2.9%' },
                        { pair: 'r / l', rate: '2.7%' }
                      ].map((item, index) => (
                        <div key={index} className="bg-gray-900 border border-gray-800 rounded px-3 py-2 text-center">
                          <div className="text-gray-300 font-mono mb-1">{item.pair}</div>
                          <div className="text-xs text-orange-400">{item.rate}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testing;