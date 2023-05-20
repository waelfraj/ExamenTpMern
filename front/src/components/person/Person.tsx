import { Person } from './person.interface';
import { useDeleteUserMutation } from '../../redux/api/userApi';
import { useNavigate } from 'react-router-dom';
import EditPerson from '../edit-person/editPerson';
export default function PersonComponent({ id, firstName, lastName, email }: Person) {
  const navigate = useNavigate();

  const [deleteUser] = useDeleteUserMutation();

  const handleDelete = async () => {
    console.log(id);

    try {
      await deleteUser(id);
    } catch (error) {
      console.log(error);
    }
    navigate('/users');
  };

  return (
    <tr>
      <td>{id}</td>
      <td>{firstName} </td>
      <td>{lastName} </td>
      <td>{email} </td>
      <td>
        <button onClick={() => handleDelete()}>supprimer</button>
        <button
          onClick={() => {
            navigate(`/user/update/${id}`);
          }}
        >
          Modfier
        </button>
      </td>
    </tr>
  );
}
