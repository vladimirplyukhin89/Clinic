import { Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import Login from './pages/Login';
import Contacts from './pages/Contacts';
import Notfound from './pages/Notfound';

import RequireAuth from './hoc/RequireAuth';
import AuthProvider from './hoc/AuthProvider';

function App() {
  return (
    <>
      <AuthProvider>
        <Routes>
          <Route element={<Layout />} >
            <Route path="/" element={<Home />} />
            <Route path="/login" element={
              <RequireAuth>
                <Login />
              </RequireAuth>
            } />
            <Route path="/contacts" element={<Contacts />} />
            <Route path="*" element={<Notfound />} />
          </Route>
        </Routes>
      </AuthProvider>
    </>
  );
};

export default App;
