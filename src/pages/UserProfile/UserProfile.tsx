import React from 'react';

import { EditUserForm } from '../../components/EditUserForm/EditUserForm';
import { useData } from '../../hook/useData';

import './userprofile.scss';

const UserProfile: React.FC = () => {
  const { currentUser, setCurrentUser } = useData();

  const [edit, setEdit] = React.useState<boolean>(true);
  const userMaket = {
    id: 1,
    name: 'string',
    username: 'string',
    address: { street: 'string', city: 'string', zipcode: 'string' },
    company: {
      name: 'string',
    },
    phone: 'string',
    website: 'string',
    email: 'string',
  };
  const HandleEdit = () => {
    setEdit((edit) => !edit);
  };
  return (
    <div className="container">
      <div className="container__top">
        <div className="container__title">Профиль пользователя</div>
        <button className="container__btn" onClick={() => HandleEdit()}>
          Редактировать
        </button>
      </div>
      <EditUserForm
        currentUser={currentUser ? currentUser : userMaket}
        setCurrentUser={setCurrentUser}
        edit={edit}></EditUserForm>
    </div>
  );
};

export { UserProfile };
