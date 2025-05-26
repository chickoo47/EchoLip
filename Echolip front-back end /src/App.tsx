import React from 'react';
import Layout from './components/Layout';
import Hero from './components/Hero';
import Overview from './components/Overview';
import Features from './components/Features';
import Training from './components/Training';
import Architecture from './components/Architecture';
import Visualizations from './components/Visualizations';
import Testing from './components/Testing';
import Callbacks from './components/Callbacks';
import Future from './components/Future';
import Background3D from './components/Background3D';

function App() {
  React.useEffect(() => {
    document.title = "Echolip - Lip Reading Model with TensorFlow";
  }, []);

  return (
    <>
      <Background3D />
      <Layout>
        <Hero />
        <Overview />
        <Features />
        <Training />
        <Architecture />
        <Visualizations />
        <Testing />
        <Callbacks />
        <Future />
      </Layout>
    </>
  );
}

export default App;