import React from 'react';

const Architecture: React.FC = () => {
  return (
    <section id="architecture" className="py-20 bg-gray-950">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center text-sm text-teal-400 mb-3">
            <span className="mr-2">🎨</span>
            MODEL ARCHITECTURE
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            How LipNet Works
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            The LipNet architecture combines several neural network components for optimal performance.
          </p>
        </div>
        
        <div className="max-w-5xl mx-auto relative">
          {/* Architecture diagram */}
          <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 lg:p-8 mb-12">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-2 md:gap-4">
              {/* Input */}
              <div className="md:col-span-2 flex flex-col items-center">
                <div className="h-24 w-full bg-violet-900/30 border border-violet-700/50 rounded-lg flex items-center justify-center mb-2">
                  <span className="text-violet-300 font-medium text-sm">Input Video</span>
                </div>
                <div className="text-xs text-gray-400 text-center">
                  75x50x100<br />(frames×height×width)
                </div>
                <div className="hidden md:block h-8 w-8 my-2">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-600">
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                </div>
              </div>
              
              {/* Conv3D Layers */}
              <div className="md:col-span-8 space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
                  {architectureLayers.conv3d.map((layer, index) => (
                    <ArchitectureLayerCard 
                      key={index}
                      title={layer.title}
                      details={layer.details}
                      color="violet"
                    />
                  ))}
                </div>
                
                <div className="flex justify-center">
                  <div className="h-8 w-8">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-600">
                      <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {architectureLayers.lstm.map((layer, index) => (
                    <ArchitectureLayerCard 
                      key={index}
                      title={layer.title}
                      details={layer.details}
                      color="teal"
                    />
                  ))}
                </div>
                
                <div className="flex justify-center">
                  <div className="h-8 w-8">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-600">
                      <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 gap-2">
                  {architectureLayers.dense.map((layer, index) => (
                    <ArchitectureLayerCard 
                      key={index}
                      title={layer.title}
                      details={layer.details}
                      color="orange"
                    />
                  ))}
                </div>
              </div>
              
              {/* Output */}
              <div className="md:col-span-2 flex flex-col items-center">
                <div className="h-8 w-8 my-2 hidden md:block">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-600">
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                </div>
                <div className="h-24 w-full bg-teal-900/30 border border-teal-700/50 rounded-lg flex items-center justify-center mb-2">
                  <span className="text-teal-300 font-medium text-sm">Output Text</span>
                </div>
                <div className="text-xs text-gray-400 text-center">
                  Text Prediction<br />(CTC Decoded)
                </div>
              </div>
            </div>
          </div>
          
          {/* Custom Loss Function */}
          <div className="bg-gradient-to-r from-violet-900/20 via-orange-900/20 to-teal-900/20 border border-gray-800 rounded-xl p-6">
            <h3 className="text-xl font-semibold mb-4">Custom CTC Loss Function</h3>
            <p className="text-gray-300 mb-6">
              The Connectionist Temporal Classification (CTC) loss function allows the model to learn from sequence data without requiring exact alignments between input and output.
            </p>
            <div className="bg-gray-900 border border-gray-800 rounded-lg p-4 font-mono text-sm overflow-x-auto">
              <pre className="text-gray-300">
{`def CTCLoss(y_true, y_pred):
    # Get batch size
    batch_len = tf.cast(tf.shape(y_true)[0], dtype="int64")
    
    # Get input sequence length (time steps)
    input_length = tf.cast(tf.shape(y_pred)[1], dtype="int64")
    
    # Get label length
    label_length = tf.cast(tf.shape(y_true)[1], dtype="int64")
    
    # Create tensors of input and label lengths
    input_length = input_length * tf.ones(shape=(batch_len, 1), dtype="int64")
    label_length = label_length * tf.ones(shape=(batch_len, 1), dtype="int64")
    
    # Compute CTC loss
    loss = tf.keras.backend.ctc_batch_cost(
        y_true, y_pred, input_length, label_length
    )
    
    return loss`}
              </pre>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

interface ArchitectureLayerCardProps {
  title: string;
  details: string;
  color: 'violet' | 'teal' | 'orange';
}

const ArchitectureLayerCard: React.FC<ArchitectureLayerCardProps> = ({ title, details, color }) => {
  const colorClasses = {
    violet: 'bg-violet-900/30 border-violet-700/50 text-violet-300',
    teal: 'bg-teal-900/30 border-teal-700/50 text-teal-300',
    orange: 'bg-orange-900/30 border-orange-700/50 text-orange-300'
  };
  
  return (
    <div className={`${colorClasses[color]} border rounded-lg p-3 text-center`}>
      <h4 className="font-medium text-sm mb-1">{title}</h4>
      <p className="text-xs text-gray-400">{details}</p>
    </div>
  );
};

const architectureLayers = {
  conv3d: [
    {
      title: "Conv3D Layer 1",
      details: "32 filters, 3×3×3 kernel"
    },
    {
      title: "MaxPooling3D",
      details: "1×2×2 pool size"
    },
    {
      title: "BatchNormalization",
      details: "Normalize activations"
    }
  ],
  lstm: [
    {
      title: "Bidirectional LSTM 1",
      details: "256 units, return sequences"
    },
    {
      title: "Bidirectional LSTM 2",
      details: "256 units, return sequences"
    }
  ],
  dense: [
    {
      title: "Dense Layer",
      details: "Vocab size + 1 units (for CTC blank)"
    }
  ]
};

export default Architecture;