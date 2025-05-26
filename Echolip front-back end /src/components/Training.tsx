import React from 'react';

const Training: React.FC = () => {
  return (
    <section id="training" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center text-sm text-teal-400 mb-3">
            <span className="mr-2">💡</span>
            TRAINING THE MODEL
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            How LipNet Learns
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            The training process involves multiple steps to ensure optimal model performance.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <ol className="relative border-l border-gray-700">
            {trainingSteps.map((step, index) => (
              <li className="mb-10 ml-6\" key={index}>
                <span className="absolute flex items-center justify-center w-8 h-8 rounded-full -left-4 ring-4 ring-gray-900 bg-violet-900 text-violet-200">
                  {index + 1}
                </span>
                <h3 className="flex items-center mb-2 text-xl font-semibold text-white">
                  {step.title}
                </h3>
                <p className="mb-4 text-gray-400 leading-relaxed">
                  {step.description}
                </p>
                
                {step.code && (
                  <div className="bg-gray-800 border border-gray-700 rounded-lg p-4 font-mono text-sm mb-4 overflow-x-auto">
                    <pre className="text-gray-300">
                      {step.code}
                    </pre>
                  </div>
                )}
              </li>
            ))}
          </ol>
          
          <div className="bg-gradient-to-r from-violet-900/20 via-teal-900/20 to-violet-900/20 border border-gray-800 rounded-xl p-6 mt-12">
            <h3 className="text-xl font-semibold mb-4">Training Commands</h3>
            <div className="bg-gray-800 border border-gray-700 rounded-lg p-4 font-mono text-sm overflow-x-auto">
              <pre className="text-gray-300">
{`model.fit(
    train,
    validation_data=test,
    epochs=100,
    callbacks=[
        checkpoint_callback,
        reduce_lr,
        early_stopping,
        example_callback
    ]
)`}
              </pre>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const trainingSteps = [
  {
    title: "Define Vocabulary",
    description: "Create a vocabulary list that includes all characters the model needs to predict.",
    code: `vocab = [x for x in "abcdefghijklmnopqrstuvwxyz'?!123456789 "]`
  },
  {
    title: "Load and Preprocess Data",
    description: "Videos are split into frames, normalized, and paired with text alignments.",
    code: `# Load data
data = load_data('data/s1/')

# Preprocess frames
frames = preprocess_frames(data)

# Get text alignments
alignments = load_alignments('data/alignments/s1/')`
  },
  {
    title: "Build the Model",
    description: "Construct the neural network architecture with convolutional layers, LSTM layers, and output layers.",
    code: `# Model architecture
model = Sequential([
    Conv3D(filters=32, kernel_size=(3, 3, 3), activation='relu'),
    MaxPooling3D(pool_size=(1, 2, 2)),
    BatchNormalization(),
    
    Bidirectional(LSTM(units=256, return_sequences=True)),
    Bidirectional(LSTM(units=256, return_sequences=True)),
    
    Dense(units=len(vocab) + 1)  # +1 for CTC blank token
])`
  },
  {
    title: "Define Loss Function",
    description: "Use CTC Loss to handle variable-length sequences and alignment issues.",
    code: `def CTCLoss(y_true, y_pred):
    batch_len = tf.cast(tf.shape(y_true)[0], dtype="int64")
    input_length = tf.cast(tf.shape(y_pred)[1], dtype="int64")
    label_length = tf.cast(tf.shape(y_true)[1], dtype="int64")
    
    input_length = input_length * tf.ones(shape=(batch_len, 1), dtype="int64")
    label_length = label_length * tf.ones(shape=(batch_len, 1), dtype="int64")
    
    loss = tf.keras.backend.ctc_batch_cost(
        y_true, y_pred, input_length, label_length
    )
    return loss`
  },
  {
    title: "Configure Callbacks",
    description: "Set up checkpoints, learning rate scheduling, and custom callbacks for monitoring.",
    code: `# Callbacks
checkpoint_callback = ModelCheckpoint(
    filepath='best_weights.h5',
    monitor='val_loss',
    save_best_only=True
)

reduce_lr = ReduceLROnPlateau(
    monitor='val_loss',
    factor=0.2,
    patience=3
)

early_stopping = EarlyStopping(
    monitor='val_loss',
    patience=10
)

example_callback = PredictionExampleCallback(test_dataset)`
  },
  {
    title: "Train and Validate",
    description: "Train the model on training data and validate performance on test data.",
    code: null
  },
  {
    title: "Resume Training",
    description: "Resume training from a specific checkpoint if needed for further improvements.",
    code: `# Load previous weights
model.load_weights('best_weights.h5')

# Continue training
model.fit(
    train_dataset,
    epochs=50,
    initial_epoch=30,
    callbacks=[...]
)`
  }
];

export default Training;