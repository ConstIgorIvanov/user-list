import React from "react";
import "./edituserform.scss";
const EditUserForm = ({ edit, currentUser }) => {
  const [user, setUser] = React.useState({ ...currentUser, comment: null });

  return (
    <div className="form">
      <div className="form__input">
        <div>Name</div>
        <input
          className={edit ? "nonactive" : "active"}
          readOnly={edit}
          value={user.name}
          onChange={(e) =>
            setUser((prev) => ({ ...prev, name: e.target.value }))
          }
        ></input>
      </div>
      <div className="form__input">
        <div>UserName</div>
        <input
          className={edit ? "nonactive" : "active"}
          readOnly={edit}
          value={user.username}
          onChange={(e) =>
            setUser((prev) => ({ ...prev, username: e.target.value }))
          }
        ></input>
      </div>
      <div className="form__input">
        <div>Email</div>
        <input
          className={edit ? "nonactive" : "active"}
          readOnly={edit}
          value={user.email}
          onChange={(e) =>
            setUser((prev) => ({ ...prev, email: e.target.value }))
          }
        ></input>
      </div>
      <div className="form__input">
        <div>street</div>
        <input
          className={edit ? "nonactive" : "active"}
          readOnly={edit}
          value={user.address.street}
          onChange={(e) =>
            setUser((prev) => ({
              ...prev,
              address: { ...prev.address, street: e.target.value },
            }))
          }
        ></input>
      </div>
      <div className="form__input">
        <div>City</div>
        <input
          className={edit ? "nonactive" : "active"}
          readOnly={edit}
          value={user.address.city}
          onChange={(e) =>
            setUser((prev) => ({
              ...prev,
              address: { ...prev.address, city: e.target.value },
            }))
          }
        ></input>
      </div>
      <div className="form__input">
        <div>Zip code</div>
        <input
          className={edit ? "nonactive" : "active"}
          readOnly={edit}
          value={user.address.zipcode}
          onChange={(e) =>
            setUser((prev) => ({
              ...prev,
              address: { ...prev.address, zipcode: e.target.value },
            }))
          }
        ></input>
      </div>
      <div className="form__input">
        <div>Phone</div>
        <input
          className={edit ? "nonactive" : "active"}
          readOnly={edit}
          value={user.phone}
          onChange={(e) =>
            setUser((prev) => ({ ...prev, phone: e.target.value }))
          }
        ></input>
      </div>
      <div className="form__input">
        <div>Website</div>
        <input
          className={edit ? "nonactive" : "active"}
          readOnly={edit}
          value={user.website}
          onChange={(e) =>
            setUser((prev) => ({ ...prev, website: e.target.value }))
          }
        ></input>
      </div>
      <div className="form__comment">
        <div>Comment</div>
        <textarea
          className={edit ? "nonactive" : "comment"}
          readOnly={edit}
          value={user.comment}
          onChange={(e) =>
            setUser((prev) => ({ ...prev, comment: e.target.value }))
          }
        ></textarea>
      </div>
      <button
        disabled={edit}
        className="form__btn"
        onClick={() => {
          console.log(JSON.stringify(user));
        }}
      >
        Отправить
      </button>
    </div>
  );
};

export { EditUserForm };
