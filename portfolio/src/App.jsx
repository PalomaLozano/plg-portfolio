import { Routes, Route } from 'react-router-dom';
import GlobalStyle from './GlobalStyles';
import Home from './pages/Home';
import Web from './pages/Web';
import Aboutme from './pages/Aboutme';
import Contact from './pages/Contact';

function App() {
  return (
    <>
      <GlobalStyle />

      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/webdevelopment" element={<Web />} />
          <Route path="/aboutme" element={<Aboutme />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </>
  );
}
export default App;
