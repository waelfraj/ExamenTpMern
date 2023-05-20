import { useState, useEffect } from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import { useUpdateUserMutation } from '../../redux/api/userApi';
import { Person } from '../person/person.interface';

export default function EditPerson() {
  const { id } = useParams();

  const { state } = useLocation();
  const navigate = useNavigate();

  const [person, setPerson] = useState<Person>(state);

  const [updateUser, { isError, isLoading }] = useUpdateUserMutation();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch(`/users/${id}`);
        const data = await response.json();
        setPerson(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchUser();
  }, [id]);

  const onSavePerson = async () => {
    await updateUser({ user: person, id: Number(id) })
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
        <label htmlFor="firstName">First Name</label>
        <input
          type="text"
          name="firstName"
          value={person?.firstName || ''}
          onChange={(e) =>
            setPerson({
              ...person,
              firstName: e.target.value,
            })
          }
        />
        <hr />
        <label htmlFor="lastName">Last Name</label>
        <input
          type="text"
          name="lastName"
          value={person?.lastName || ''}
          onChange={(e) =>
            setPerson({
              ...person,
              lastName: e.target.value,
            })
          }
        />
        <hr />
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          value={person?.email || ''}
          onChange={(e) =>
            setPerson({
              ...person,
              email: e.target.value,
            })
          }
        />
        <hr />
        <button type="button" onClick={onSavePerson}>
          Save
        </button>
      </form>
    </div>
  );
}
