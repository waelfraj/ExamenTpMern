import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCreateUserMutation } from '../../redux/api/userApi';
import { Person } from '../person/person.interface';

export default function CreatePerson() {
  const [person, setPerson] = useState<Person>({ firstName: '', lastName: '', email: '' });
  const [createUser, { isError, isLoading }] = useCreateUserMutation();
  const navigate = useNavigate();

  const onSavePerson = async () => {
    await createUser(person)
      .unwrap()
      .then((res) => {
        if (res) {
          navigate('/users');
        }
      });
  };
  return (
    <div>
      <form method="post">
        <label htmlFor="firstName">first name</label>
        <input
          type="text"
          name="firstName"
          onChange={(e) =>
            setPerson({
              ...person,
              firstName: e.target.value,
            })
          }
        />
        <hr />
        <label htmlFor="lastName">last name</label>
        <input
          type="text"
          name="lastName"
          onChange={(e) =>
            setPerson({
              ...person,
              lastName: e.target.value,
            })
          }
        />
        <hr />
        <label htmlFor="email">email</label>
        <input
          type="email"
          name="email"
          onChange={(e) =>
            setPerson({
              ...person,
              email: e.target.value,
            })
          }
        />
        <hr />
        <button type="button" onClick={onSavePerson}>
          Enregistrer
        </button>
      </form>
    </div>
  );
}
