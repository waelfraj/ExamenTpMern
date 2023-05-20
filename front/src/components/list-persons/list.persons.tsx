import { useGetusersQuery } from '../../redux/api/userApi';
import PersonComponent from '../person/Person';
import { Person } from '../person/person.interface';

export default function ListPersons() {
  const { data, isFetching } = useGetusersQuery(null);
  return (
    <>
      <table border={2}>
        <thead>
          <tr>
            <td>#</td>
            <td>first name</td>
            <td>last name</td>
            <td>email</td>
            <td colSpan={2}>Action</td>
          </tr>
        </thead>
        <tbody>
          {data &&
            data.map((person: Person, index: number) => (
              <PersonComponent
                key={index}
                id={person.id}
                firstName={person.firstName}
                lastName={person.lastName}
                email={person.email}
              />
            ))}
        </tbody>
      </table>
    </>
  );
}
