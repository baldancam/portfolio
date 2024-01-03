import React from 'react';

import { BrowserRouter } from 'react-router-dom';
import Header from './components/Header';
import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Skills from './pages/Skills';
import GlobalStyles from './styles/GlobalStyles';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Home />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <GlobalStyles />
    </BrowserRouter>
  );
}

export default App;
