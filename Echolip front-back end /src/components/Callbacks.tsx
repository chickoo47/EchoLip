import React from 'react';
import { Bell, LineChart, CheckSquare, AlertTriangle } from 'lucide-react';

const Callbacks: React.FC = () => {
  return (
    <section id="callbacks" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center text-sm text-teal-400 mb-3">
            <span className="mr-2">📊</span>
            CALLBACKS
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Monitoring Progress
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Custom callbacks help track model performance during training.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <div className="bg-gray-800 border border-gray-700 rounded-xl p-6">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 rounded-lg bg-violet-900/50 flex items-center justify-center mr-3">
                  <Bell size={20} className="text-violet-300" />
                </div>
                <h3 className="text-xl font-semibold">Example Callback</h3>
              </div>
              <p className="text-gray-400 mb-6">
                This callback displays predictions at the end of each epoch to monitor training progress in real-time.
              </p>
              <div className="bg-gray-900 border border-gray-800 rounded-lg p-4 font-mono text-sm overflow-x-auto">
                <pre className="text-gray-300">
{`class PredictionExampleCallback(tf.keras.callbacks.Callback):
    def __init__(self, dataset):
        super().__init__()
        self.dataset = dataset
    
    def on_epoch_end(self, epoch, logs=None):
        # Get a batch from the dataset
        data = self.dataset.next()
        
        # Make prediction
        yhat = self.model.predict(data[0])
        
        # Decode prediction
        decoded = tf.keras.backend.ctc_decode(
            yhat, 
            [75, 75],
            greedy=True
        )[0][0].numpy()
        
        # Convert to text
        prediction = ''.join([
            vocab[i] for i in decoded[0] if i != -1
        ])
        
        # Get ground truth
        ground_truth = ''.join([
            vocab[i] for i in data[1][0] if i != -1
        ])
        
        # Print results
        print("\\nExample:")
        print(f"Ground truth: {ground_truth}")
        print(f"Prediction: {prediction}")`}
                </pre>
              </div>
            </div>
            
            <div>
              <div className="bg-gray-800 border border-gray-700 rounded-xl p-6 mb-6">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 rounded-lg bg-teal-900/50 flex items-center justify-center mr-3">
                    <LineChart size={20} className="text-teal-300" />
                  </div>
                  <h3 className="text-xl font-semibold">Training Callbacks</h3>
                </div>
                <p className="text-gray-400 mb-4">
                  LipNet uses several callbacks during training to improve performance and monitor progress.
                </p>
                <ul className="space-y-2">
                  {[
                    "ModelCheckpoint - Save best weights",
                    "ReduceLROnPlateau - Adjust learning rate",
                    "EarlyStopping - Prevent overfitting",
                    "TensorBoard - Visualize metrics",
                    "Custom prediction callbacks"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-teal-400 mr-2">•</span>
                      <span className="text-gray-300">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-gradient-to-br from-violet-900/20 to-violet-900/10 border border-violet-800/30 rounded-xl p-5">
                  <div className="flex items-center mb-3">
                    <CheckSquare size={18} className="text-violet-400 mr-2" />
                    <h4 className="font-medium">Benefits</h4>
                  </div>
                  <ul className="space-y-1 text-sm text-gray-400">
                    <li className="flex items-start">
                      <span className="text-violet-400 mr-2">•</span>
                      <span>Real-time training insights</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-violet-400 mr-2">•</span>
                      <span>Visual progress monitoring</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-violet-400 mr-2">•</span>
                      <span>Early detection of issues</span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-gradient-to-br from-orange-900/20 to-orange-900/10 border border-orange-800/30 rounded-xl p-5">
                  <div className="flex items-center mb-3">
                    <AlertTriangle size={18} className="text-orange-400 mr-2" />
                    <h4 className="font-medium">Watch For</h4>
                  </div>
                  <ul className="space-y-1 text-sm text-gray-400">
                    <li className="flex items-start">
                      <span className="text-orange-400 mr-2">•</span>
                      <span>Increasing validation loss</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-orange-400 mr-2">•</span>
                      <span>Stagnant accuracy metrics</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-orange-400 mr-2">•</span>
                      <span>Repeating prediction patterns</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-violet-900/20 via-teal-900/20 to-violet-900/20 border border-gray-800 rounded-xl p-6">
            <h3 className="text-xl font-semibold mb-4">Sample Output</h3>
            <p className="text-gray-300 mb-4">
              Example of callback output during training:
            </p>
            <div className="bg-gray-900 border border-gray-800 rounded-lg p-4 font-mono text-xs overflow-x-auto">
              <pre className="text-gray-300">
{`Epoch 5/100
100/100 [==============================] - 22s 220ms/step - loss: 65.4378 - val_loss: 48.7654

Example:
Ground truth: "place blue at g nine please"
Prediction: "place blue at g nine please"

Epoch 6/100
100/100 [==============================] - 21s 214ms/step - loss: 58.9242 - val_loss: 43.1208

Example:
Ground truth: "bin white at c three please"
Prediction: "bin white at c three please"

Epoch 7/100
100/100 [==============================] - 22s 217ms/step - loss: 52.7845 - val_loss: 38.9076

Example:
Ground truth: "set green in h four please"
Prediction: "set green in h four please"

Epoch 8/100
100/100 [==============================] - 21s 212ms/step - loss: 47.1235 - val_loss: 35.6723

Example:
Ground truth: "place red by o seven now"
Prediction: "place red by o seven now"`}
              </pre>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Callbacks;