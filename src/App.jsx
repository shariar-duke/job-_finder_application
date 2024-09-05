// src/App.js
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import AddJob from './components/AddJob/AddJob';
import Home from './components/Home/Home';
import Layout from './components/Layout/Layout';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="add-job" element={<AddJob />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
