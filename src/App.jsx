import { Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import Login from './pages/Login';
import Contacts from './pages/Contacts';
import Notfound from './pages/Notfound';

function App() {
  return (
    <>
      <Routes>
        <Route element={<Layout />} >
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="*" element={<Notfound />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
