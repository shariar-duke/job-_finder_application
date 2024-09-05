// src/App.js
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import AddJob from './components/Form/AddJob';
import Editjob from './components/Form/Editjob';
import Home from './components/Home/Home';
import Layout from './components/Layout/Layout';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="add-job" element={<AddJob />} />
          <Route path="edit-job" element={<Editjob />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
