import { Link } from "react-router-dom";
import "./filter.scss";
import {useData} from '../../hook/useData'
const Filter = () => {
  const { sortSity, sortCompany } = useData();
  return (
    <div className="filter">
      <div className="filter__title">Сортировка</div>
      <div className="filter__group__btn">
        <button className="filter__btn">
          <Link className="filter__link" to="/">
            На главную
          </Link>
        </button>
        <button className="filter__btn" onClick={() => sortSity()}>
          По городу
        </button>
        <button className="filter__btn" onClick={() => sortCompany()}>
          По компании
        </button>
      </div>
    </div>
  );
};

export { Filter };
