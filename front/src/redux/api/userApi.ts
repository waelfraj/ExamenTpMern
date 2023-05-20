import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Person } from '../../components/person/person.interface';

export const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:8000' }),
  endpoints: (builder) => ({
    getusers: builder.query<Person[], null>({
      query: () => '/users/getAll',
    }),
    createUser: builder.mutation<Person, Person>({
      query: (user: Person) => ({
        url: `/users/add`,
        method: 'POST',
        body: user,
      }),
    }),
    updateUser: builder.mutation({
      query: ({ id, body }) => ({
        url: `/users/update/${id}`,
        method: 'PATCH',
        body: body,
      }),
    }),
    deleteUser: builder.mutation({
      query: (id) => ({
        url: `/users/delete/${id}`,
        method: 'DELETE',
      }),
    }),
  }),
});

export const {
  useGetusersQuery,
  useCreateUserMutation,
  useDeleteUserMutation,
  useUpdateUserMutation,
} = userApi;
