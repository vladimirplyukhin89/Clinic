import { Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import Contacts from './pages/Contacts';
import Login from './pages/Login';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />} >
          <Route index element={<Home />} />
          <Route path='contacts' element={<Contacts />} />
          <Route path='login' element={<Login />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
