import { ListUserItem } from '../../components/ListUserItem/ListUserItem';
import { useData } from '../../hook/useData';

import './listuser.scss';

const ListUsers: React.FC = () => {
  const { users } = useData();

  return (
    <div className="listuser__container">
      <div className="listuser__container__title">Список пользователей</div>
      <ul className="listuser__container__list">
        {users ? (
          <div className="listuser__container__flex">
            {users.map((user) => (
              <ListUserItem
                key={user.id}
                id={user.id}
                name={user.name}
                city={user.address.city}
                company={user.company.name}></ListUserItem>
            ))}
            <div className="right">Найдено {users.length} пользователей</div>
          </div>
        ) : (
          <div>loading</div>
        )}
      </ul>
    </div>
  );
};

export { ListUsers };
