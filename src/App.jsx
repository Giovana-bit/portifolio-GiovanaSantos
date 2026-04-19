import { Toaster } from "./components/ui/toaster";
import { HashRouter as Router, Route, Routes } from 'react-router-dom';

import PageNotFound from './libs/PageNotFound';
import Home from './pages/Home';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>

      <Toaster />
    </Router>
  );
}

export default App;