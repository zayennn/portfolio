import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { useState, useEffect } from "react";
import Navbar from "./components/Navbar/Navbar";
import CursorAnimation from "./components/CursorAnimation/CursorAnimation";
import PageTransition from "./components/PageTransition/PageTransition";
import Footer from "./components/Footer/Footer"; // Import Footer
import Home from "./pages/Home/Home";
import Projects from "./pages/Projects/Projects";
import Skills from "./pages/Skills/Skills";
import Into from "./pages/Into/Into";
import BehindTheCode from "./pages/BehindTheCode/BehindTheCode";
import Contact from "./pages/Contact/Contact";
import "./App.css";

function AppContent() {
  const location = useLocation();
  const [showPage, setShowPage] = useState(true);
  const [prevLocation, setPrevLocation] = useState(location);

  useEffect(() => {
    window.scrollTo(0, 0);

    if (location.pathname !== prevLocation.pathname) {
      setShowPage(false);
      setPrevLocation(location);
    }
  }, [location, prevLocation]);

  const handleLoadingComplete = () => {
    setShowPage(true);
  };

  const pageVariants = {
    initial: {
      opacity: 0,
      y: 20
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1]
      }
    },
    exit: {
      opacity: 0,
      y: -20,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <>
      <CursorAnimation />
      <Navbar />

      <PageTransition onLoadingComplete={handleLoadingComplete} />

      <AnimatePresence mode="wait">
        {showPage && (
          <motion.div
            key={location.pathname}
            initial="initial"
            animate="animate"
            exit="exit"
            variants={pageVariants}
            style={{ minHeight: 'calc(100vh - 80px)' }}
          >
            <Routes location={location}>
              <Route path="/" element={<Home />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/skills" element={<Skills />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/into" element={<Into />} />
              <Route path="/behind-the-code" element={<BehindTheCode />} />
            </Routes>
          </motion.div>
        )}
      </AnimatePresence>
      
      {/* Add Footer here */}
      <Footer />
    </>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;