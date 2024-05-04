import { Route, Routes } from 'react-router-dom';
import RootLayout from './layouts/RootLayout';

import { AnimatePresence } from 'framer-motion';

import Home from './pages/Home';
import AboutPage from './pages/AboutPage';
import Gallery from './pages/Gallery';
import ContactPage from './pages/ContactPage';
function App() {
  return (
    <AnimatePresence>
      <div className='App'>
        <Routes>
          <Route path='/' element={<RootLayout />}>
            <Route index element={<Home />} />
            <Route path='/about' element={<AboutPage />} />
            <Route path='/projects' element={<Gallery />} />
            <Route path='/contact' element={<ContactPage />} />
          </Route>
        </Routes>
      </div>
    </AnimatePresence>
  );
}

export default App;
