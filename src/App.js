import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.scss";
import { Layout } from "./components/Layout/Layout";
import { ListUsers } from "./pages/ListUsers/ListUsers";
import { UserProfile } from "./pages/UserProfile/UserProfile";
import { useData } from "./hook/useData";
import { getUser } from "./query/getUser";
function App() {
  const { setUsers } = useData();
  React.useEffect(() => {
    getUser().then((data) => setUsers(data));
   
  }, []);
  
  return (
    <div>
      <Routes>
        <Route path="user-list/" element={<Layout></Layout>}>
          <Route path="user-list/" element={<ListUsers></ListUsers>}></Route>
          <Route
            path="user-list/user/:id"
            element={<UserProfile></UserProfile>}
          ></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;