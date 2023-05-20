import { useRoutes } from 'react-router-dom';
import CreatePerson from '../components/create-person/CreatePerson';
import ListPersons from '../components/list-persons/list.persons';
import EditPerson from '../components/edit-person/editPerson';

export default function Router() {
  return useRoutes([
    { path: '/users', element: <ListPersons /> },
    { path: '/users/new', element: <CreatePerson /> },
    { path: '/users/update/:id', element: <EditPerson /> },
    { path: '*', element: <h1>Not Found</h1> },
  ]);
}
