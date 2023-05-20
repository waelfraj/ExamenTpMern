import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Person } from '../../components/person/person.interface';

export const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:8000' }),
  tagTypes: ['Categories'],
  endpoints: (builder) => ({
    getusers: builder.query<Person[], null>({
      query: () => '/users/getAll',
      providesTags: ['Categories'],
    }),
    createUser: builder.mutation<Person, Person>({
      query: (user: Person) => ({
        url: `/users/add`,
        method: 'POST',
        body: user,
      }),
      invalidatesTags: ['Categories'],
    }),
    updateUser: builder.mutation<Person, { id: number; user: Partial<Person> }>({
      query: ({ id, user }) => ({
        url: `/users/update/${id}`,
        method: 'PATCH',
        body: user,
      }),
      invalidatesTags: ['Categories'],
    }),
    deleteUser: builder.mutation({
      query: (id) => ({
        url: `/users/delete/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Categories'],
    }),
  }),
});

export const {
  useGetusersQuery,
  useCreateUserMutation,
  useDeleteUserMutation,
  useUpdateUserMutation,
} = userApi;
