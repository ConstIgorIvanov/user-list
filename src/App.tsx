import React from 'react';
import { Routes, Route } from 'react-router-dom';

import { Layout } from './components/Layout/Layout';
import { ListUsers } from './pages/ListUsers/ListUsers';
import { UserProfile } from './pages/UserProfile/UserProfile';

import { useData } from './hook/useData';
import { getUser } from './query/getUser';

import './App.scss';

const App = () => {
  const { setUsers } = useData();

  React.useEffect(() => {
    getUser()
      .then((data) => {
        if (data) {
          setUsers(data);
        }
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout></Layout>}>
          <Route path="/user-list" element={<ListUsers></ListUsers>}></Route>
          <Route path="/user/:id" element={<UserProfile></UserProfile>}></Route>
        </Route>
      </Routes>
    </div>
  );
};

export default App;
