import React from "react";
import { Link } from "react-router-dom";
import { useData } from "../../hook/useData";
import "./useritem.scss";
const ListUserItem = ({ id, name, city, company }) => {
  const { findCurrent } = useData();

  const test = (e) => {
    findCurrent(e);
  };

  return (
    <div className="card">
      <div>
        <div className="card__container">
          <div className="card__title">ФИО:</div> {name}
        </div>
        <div className="card__container">
          <div className="card__title">Город:</div> {city}
        </div>
        <div className="card__container">
          <div className="card__title">Компания:</div> {company}
        </div>
      </div>
      <button className="card__btn" onClick={() => test(id)}>
        <Link className="card__link" to={`/user/${id}`}>
          Подробнее
        </Link>
      </button>
    </div>
  );
};

export { ListUserItem };
