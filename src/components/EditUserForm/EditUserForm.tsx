import React from 'react';
import './edituserform.scss';
import { useForm } from 'react-hook-form';
import { user } from '../../types/types';

interface EditUserFormProps {
  edit: boolean;
  currentUser: user;
  setCurrentUser: React.Dispatch<React.SetStateAction<user | null>>;
}

const EditUserForm: React.FC<EditUserFormProps> = ({ edit, currentUser, setCurrentUser }) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    setValue,
  } = useForm({
    mode: 'onBlur',
  });

  React.useEffect(() => {
    setValue('name', currentUser.name);
    setValue('username', currentUser.username);
    setValue('email', currentUser.email);
    setValue('street', currentUser.address.street);
    setValue('city', currentUser.address.city);
    setValue('zipcode', currentUser.address.zipcode);
    setValue('phone', currentUser.phone);
    setValue('website', currentUser.website);
  }, [currentUser]);

  const onSubmit = (data: any) => {
    const newData: user = {
      id: 1,
      company: { name: '' },
      name: data.name,
      username: data.username,
      email: data.email,
      address: {
        street: data.street,
        city: data.city,
        zipcode: data.zipcode,
      },
      phone: data.phone,
      website: data.website,
    };
    const consoleUser = {
      name: data.name,
      username: data.username,
      email: data.email,
      address: {
        street: data.street,
        city: data.city,
        zipcode: data.zipcode,
      },
      phone: data.phone,
      website: data.website,
    };

    console.log(JSON.stringify(consoleUser));
    setCurrentUser(newData);
  };
  return (
    <div>
      <form className="form" onSubmit={handleSubmit(onSubmit)}>
        <label className="form__input">
          name:
          <input
            className={errors.name ? 'error' : ''}
            disabled={edit}
            readOnly={edit}
            {...register('name', {
              required: 'поле пустое',
            })}
          />
        </label>
        <label className="form__input">
          username:
          <input
            className={errors.username ? 'error' : ''}
            disabled={edit}
            readOnly={edit}
            {...register('username', {
              required: 'поле пустое',
            })}
          />
        </label>
        <label className="form__input">
          email:
          <input
            className={errors.email ? 'error' : ''}
            disabled={edit}
            readOnly={edit}
            {...register('email', {
              required: 'поле пустое',
            })}
          />
        </label>
        <label className="form__input">
          street:
          <input
            className={errors.street ? 'error' : ''}
            disabled={edit}
            readOnly={edit}
            {...register('street', {
              required: 'поле пустое',
            })}
          />
        </label>
        <label className="form__input">
          city:
          <input
            className={errors.city ? 'error' : ''}
            disabled={edit}
            readOnly={edit}
            {...register('city', {
              required: 'поле пустое',
            })}
          />
        </label>
        <label className="form__input">
          zipcode:
          <input
            className={errors.zipcode ? 'error' : ''}
            disabled={edit}
            readOnly={edit}
            {...register('zipcode', {
              required: 'поле пустое',
            })}
          />
        </label>
        <label className="form__input">
          phone:
          <input
            className={errors.phone ? 'error' : ''}
            disabled={edit}
            readOnly={edit}
            {...register('phone', {
              required: 'поле пустое',
            })}
          />
        </label>
        <label className="form__input">
          website:
          <input
            className={errors.website ? 'error' : ''}
            disabled={edit}
            readOnly={edit}
            {...register('website', {
              required: 'поле пустое',
            })}
          />
        </label>
        <label className="form__input__comment">
          Comment:
          <textarea
            className={errors.comment ? 'error_comment' : 'form__comment'}
            disabled={edit}
            readOnly={edit}
            {...register('comment', {
              required: 'поле пустое',
            })}
          />
        </label>
        <input className="form__btn" type="submit" disabled={edit} />
      </form>
    </div>
  );
};

export { EditUserForm };
