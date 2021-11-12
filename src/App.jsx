import { BrowserRouter as Router, Routes, Route,} from 'react-router-dom';
import About from './pages/about';
import Projects from './pages/projects';
import Resume from './pages/resume';
import GeneralInfo from './components/GeneralInfo';
import { StyledApp } from './App.styled';


function App() {
  return (
    <StyledApp className="app">
      <div className="app-container">
        <GeneralInfo />
        <Router>
          <Routes>
            <Route path="/" element={<About />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/projects" element={<Projects />} />
          </Routes>
        </Router>
      </div>
    </StyledApp>
  );
}

export default App;
