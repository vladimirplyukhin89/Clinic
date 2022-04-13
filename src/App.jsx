import { Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Contacts from './pages/Contacts';

import RequireAuth from './hoc/RequireAuth';
import AuthProvider from './hoc/AuthProvider';

function App() {
  return (
    <>
      <AuthProvider>
        <Routes>
          <Route element={<Layout />} >
            <Route path="/" element={<Home />} />
            <Route path="/profile" element={
              <RequireAuth>
                <Profile />
              </RequireAuth>
            } />
            <Route path="/contacts" element={<Contacts />} />
          </Route>
        </Routes>
      </AuthProvider>
    </>
  );
};

export default App;
