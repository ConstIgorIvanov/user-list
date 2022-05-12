import React from "react";
import { EditUserForm } from "../../components/EditUserForm/EditUserForm";
import { useData } from "../../hook/useData";
import "./userprofile.scss";
const UserProfile = () => {
  const { currentUser } = useData();

  const [edit, setEdit] = React.useState(true);
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
      <EditUserForm currentUser={currentUser} edit={edit}></EditUserForm>
    </div>
  );
};

export { UserProfile };
