import { Routes, Route } from 'react-router-dom';
import GlobalStyle from './GlobalStyles';
import Home from './pages/Home';
import Web from './pages/Web';
import Design from './pages/Design';
import Photo from './pages/Photo';
import Contact from './pages/Contact';

function App() {
  return (
    <>
      <GlobalStyle />

      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/webdevelopment" element={<Web />} />
          <Route path="/graphicdesign" element={<Design />} />
          <Route path="/photography" element={<Photo />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </>
  );
}
export default App;
