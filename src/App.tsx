import React from 'react';
import Layout from './page/layout';
import Header from './components/header';
import Footer from './components/footer';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Layout />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
