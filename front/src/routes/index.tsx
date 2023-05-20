import { useRoutes } from 'react-router-dom';
import CreatePerson from '../components/create-person/CreatePerson';
import ListPersons from '../components/list-persons/list.persons';
export default function Router() {
  return useRoutes([
    { path: '/users', element: <ListPersons /> },
    { path: '/users/new', element: <CreatePerson /> },
    { path: '/users/update/:id', element: <CreatePerson /> },
    { path: '*', element: <h1>Not Found</h1> },
  ]);
}
