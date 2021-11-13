import { Routes, Route, useLocation} from 'react-router-dom';
import About from './pages/about';
import Projects from './pages/projects';
import Resume from './pages/resume';
import GeneralInfo from './components/GeneralInfo';
import { StyledApp } from './App.styled';
import { AnimatePresence } from 'framer-motion';


function App() {
  const location = useLocation();
  return (
    <StyledApp className="app">
      <div className="app-container">
        <GeneralInfo />
        <AnimatePresence initial={true} exitBeforeEnter>
            <Routes location={location} key={location.key}>
              <Route path="/" element={<About />} />
              <Route path="/resume" element={<Resume />} />
              <Route path="/projects" element={<Projects />} />
            </Routes>
        </AnimatePresence>
      </div>
    </StyledApp>
  );
}

export default App;
