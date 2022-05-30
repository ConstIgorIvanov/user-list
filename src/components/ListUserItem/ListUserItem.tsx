import { Link } from 'react-router-dom';

import { useData } from '../../hook/useData';

import './useritem.scss';

interface ListUserItemProps {
  id: number;
  name: string;
  city: string;
  company: string;
}

const ListUserItem: React.FC<ListUserItemProps> = ({ id, name, city, company }) => {
  const { findCurrent } = useData();

  const getCurrent = (id: number) => {
    findCurrent(id);
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
      <button className="card__btn" onClick={() => getCurrent(id)}>
        <Link className="card__link" to={`/user/${id}`}>
          Подробнее
        </Link>
      </button>
    </div>
  );
};

export { ListUserItem };
