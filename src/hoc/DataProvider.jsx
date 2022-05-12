import React from "react";

export const DataContext = React.createContext(null);

export const DataProvider = ({ children }) => {
  const [users, setUsers] = React.useState(null);
  const [currentUser, setCurrentUser] = React.useState(null);
  const findCurrent = (id) => {
    const current = users.find((user) => user.id === id);
    setCurrentUser(current);
  };

  const sortSity = () => {
    if (users) {
      const newUsers = JSON.parse(JSON.stringify(users));
      newUsers.sort((a, b) => (a.address.city > b.address.city ? 1 : -1));
      setUsers(newUsers);
    }
  };
  const sortCompany = () => {
    if (users) {
      const newUsers = JSON.parse(JSON.stringify(users));
      newUsers.sort((a, b) => (a.company.name > b.company.name ? 1 : -1));
      setUsers(newUsers);
    }
  };
  const value = {
    users,
    setUsers,
    findCurrent,
    currentUser,
    sortSity,
    sortCompany,
  };
  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
};
