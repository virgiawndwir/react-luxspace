import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import HomePage from './pages/HomePage';
import Details from './pages/Details';
import Cart from './pages/Cart';

import './assets/css/tailwind.css'
import Congratulation from './pages/Congratulation';
import NotFound from './pages/NotFound';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<HomePage/>}/>
          <Route path="/categories/:idc" element={<Details/>}/>
          <Route path="/cart" element={<Cart/>}/>
          <Route path="/congratulation" element={<Congratulation/>}/>
          <Route path="*" element={<NotFound/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
