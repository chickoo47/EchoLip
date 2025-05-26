import React from 'react';
import { ArrowRight, Brain, Video, FileText } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen overflow-hidden flex items-center">
      <div className="absolute inset-0 bg-gradient-to-b from-violet-950/50 to-gray-900"></div>
      
      <div className="absolute inset-0">
        <div className="h-full w-full bg-[linear-gradient(to_right,#8882_1px,transparent_1px),linear-gradient(to_bottom,#8882_1px,transparent_1px)] bg-[size:40px_40px] opacity-10"></div>
      </div>
      
      <div className="container mx-auto px-4 py-20 md:py-32 relative z-10">
        <motion.div 
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div 
            className="inline-flex items-center px-3 py-1 rounded-full bg-violet-900/30 border border-violet-700/50 text-violet-300 text-sm mb-6"
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <span className="animate-pulse mr-2 h-2 w-2 rounded-full bg-teal-400"></span>
            Deep Learning Technology
          </motion.div>
          
          <motion.h1 
            className="text-4xl md:text-6xl font-bold mb-6 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Echolip <span className="text-4xl">🎥🧠</span>
            <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-violet-400 via-teal-400 to-violet-400 animate-gradient">
              Lip Reading Model
            </span>
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            A deep learning model that translates silent lip movements into text
            <br className="hidden md:block" /> using advanced neural networks.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row justify-center gap-4 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <motion.a 
              href="#overview" 
              className="px-6 py-3 rounded-lg bg-violet-700 hover:bg-violet-600 text-white font-medium transition-all transform hover:scale-105 flex items-center justify-center group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Explore Project 
              <ArrowRight size={18} className="ml-2 transform group-hover:translate-x-1 transition-transform" />
            </motion.a>
            <motion.a 
              href="#demo"
              className="px-6 py-3 rounded-lg bg-gray-800 hover:bg-gray-700 text-white font-medium border border-gray-700 transition-all flex items-center justify-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View Demo
            </motion.a>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
            {[
              {
                icon: <Video size={24} className="text-violet-300" />,
                title: "Video Input",
                description: "Processes silent video clips of lip movements",
                color: "violet"
              },
              {
                icon: <Brain size={24} className="text-teal-300" />,
                title: "Neural Network",
                description: "3D Convolutions, BiLSTM, and CTC Loss",
                color: "teal"
              },
              {
                icon: <FileText size={24} className="text-orange-300" />,
                title: "Text Output",
                description: "Generates accurate text predictions from lip movements",
                color: "orange"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 + index * 0.1 }}
                whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
              >
                <div className={`bg-${item.color}-900/50 w-12 h-12 rounded-lg flex items-center justify-center mb-4 mx-auto`}>
                  {item.icon}
                </div>
                <h3 className="text-lg font-medium mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;