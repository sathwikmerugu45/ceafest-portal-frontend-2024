import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  DateTimeISO: { input: any; output: any; }
};

export type CreateEventSjInput = {
  amount?: InputMaybe<Scalars['String']['input']>;
  contactName?: InputMaybe<Scalars['String']['input']>;
  contactNumber?: InputMaybe<Scalars['String']['input']>;
  contentDoc?: InputMaybe<Scalars['String']['input']>;
  description: Scalars['String']['input'];
  eventDate?: InputMaybe<Scalars['String']['input']>;
  poster: Scalars['String']['input'];
  title: Scalars['String']['input'];
  venue: Scalars['String']['input'];
  venueLink: Scalars['String']['input'];
};

export type EditEventSjInput = {
  amount?: InputMaybe<Scalars['String']['input']>;
  contactName?: InputMaybe<Scalars['String']['input']>;
  contactNumber?: InputMaybe<Scalars['String']['input']>;
  contentDoc?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  eventDate?: InputMaybe<Scalars['String']['input']>;
  poster?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  venue?: InputMaybe<Scalars['String']['input']>;
  venueLink?: InputMaybe<Scalars['String']['input']>;
};

export type EventSj = {
  __typename?: 'EventSJ';
  amount: Scalars['String']['output'];
  contactName?: Maybe<Scalars['String']['output']>;
  contactNumber?: Maybe<Scalars['String']['output']>;
  contentDoc?: Maybe<Scalars['String']['output']>;
  description: Scalars['String']['output'];
  eventDate?: Maybe<Scalars['DateTimeISO']['output']>;
  id: Scalars['ID']['output'];
  poster: Scalars['String']['output'];
  title: Scalars['String']['output'];
  users: Array<User>;
  venue: Scalars['String']['output'];
  venueLink: Scalars['String']['output'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createEventSJ: Scalars['Boolean']['output'];
  createUserEventSJ: Scalars['Boolean']['output'];
  deleteEventSJ: Scalars['Boolean']['output'];
  deleteUser: Scalars['Boolean']['output'];
  editEventSJ: Scalars['Boolean']['output'];
  logOutUser: Scalars['Boolean']['output'];
  signInUser: User;
  signUpUser: User;
  updateUserRole: Scalars['Boolean']['output'];
  updateUserToAccessProbStatement: Scalars['Boolean']['output'];
};


export type MutationCreateEventSjArgs = {
  data: CreateEventSjInput;
};


export type MutationCreateUserEventSjArgs = {
  id: Scalars['String']['input'];
};


export type MutationDeleteEventSjArgs = {
  id: Scalars['String']['input'];
};


export type MutationDeleteUserArgs = {
  id: Scalars['String']['input'];
};


export type MutationEditEventSjArgs = {
  data: EditEventSjInput;
  id: Scalars['String']['input'];
};


export type MutationSignInUserArgs = {
  data: SignInInput;
};


export type MutationSignUpUserArgs = {
  data: SignUpInput;
};


export type MutationUpdateUserRoleArgs = {
  email: Scalars['String']['input'];
};


export type MutationUpdateUserToAccessProbStatementArgs = {
  email: Scalars['String']['input'];
};

export type Query = {
  __typename?: 'Query';
  getEventSJs: Array<EventSj>;
  getMe: User;
  getMyEventSJIds: Array<Scalars['String']['output']>;
  getMyUserEventSJsCountById: Scalars['Float']['output'];
  getUsers: Array<User>;
  helloworld: Scalars['String']['output'];
};


export type QueryGetMyUserEventSJsCountByIdArgs = {
  id: Scalars['String']['input'];
};

export type SignInInput = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export type SignUpInput = {
  collegeAddress?: InputMaybe<Scalars['String']['input']>;
  country?: InputMaybe<Scalars['String']['input']>;
  email: Scalars['String']['input'];
  gender: Scalars['String']['input'];
  hostel?: InputMaybe<Scalars['String']['input']>;
  isIITM?: Scalars['Boolean']['input'];
  mobile: Scalars['String']['input'];
  name: Scalars['String']['input'];
  organization: Scalars['String']['input'];
  password: Scalars['String']['input'];
  type: Scalars['String']['input'];
};

export type User = {
  __typename?: 'User';
  CEAFESTID: Scalars['String']['output'];
  collegeAddress?: Maybe<Scalars['String']['output']>;
  country?: Maybe<Scalars['String']['output']>;
  email: Scalars['String']['output'];
  emailVerified: Scalars['Boolean']['output'];
  eventsjs?: Maybe<Array<EventSj>>;
  gender: Scalars['String']['output'];
  hostel?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  isIITM: Scalars['Boolean']['output'];
  mobile: Scalars['String']['output'];
  name: Scalars['String']['output'];
  organization?: Maybe<Scalars['String']['output']>;
  payment?: Maybe<Scalars['Boolean']['output']>;
  role: UserRole;
  type: Scalars['String']['output'];
};

/** This are the allowed roles for user */
export enum UserRole {
  Admin = 'ADMIN',
  User = 'USER'
}

export type SignInUserMutationVariables = Exact<{
  data: SignInInput;
}>;


export type SignInUserMutation = { __typename?: 'Mutation', signInUser: { __typename?: 'User', name: string } };

export type SignUpUserMutationVariables = Exact<{
  data: SignUpInput;
}>;


export type SignUpUserMutation = { __typename?: 'Mutation', signUpUser: { __typename?: 'User', name: string } };

export type LogOutUserMutationVariables = Exact<{ [key: string]: never; }>;


export type LogOutUserMutation = { __typename?: 'Mutation', logOutUser: boolean };

export type UpdateUserToAccessProbStatementMutationVariables = Exact<{
  email: Scalars['String']['input'];
}>;


export type UpdateUserToAccessProbStatementMutation = { __typename?: 'Mutation', updateUserToAccessProbStatement: boolean };

export type GetMeQueryVariables = Exact<{ [key: string]: never; }>;


export type GetMeQuery = { __typename?: 'Query', getMe: { __typename?: 'User', id: string, CEAFESTID: string, name: string, email: string, mobile: string, gender: string, isIITM: boolean, hostel?: string | null, organization?: string | null, type: string, collegeAddress?: string | null, emailVerified: boolean, country?: string | null, role: UserRole, payment?: boolean | null } };

export type GetUsersQueryVariables = Exact<{ [key: string]: never; }>;


export type GetUsersQuery = { __typename?: 'Query', getUsers: Array<{ __typename?: 'User', id: string, CEAFESTID: string, name: string, email: string, mobile: string, gender: string, isIITM: boolean, hostel?: string | null, organization?: string | null, type: string, collegeAddress?: string | null, emailVerified: boolean, payment?: boolean | null, country?: string | null, role: UserRole }> };


export const SignInUserDocument = gql`
    mutation SignInUser($data: SignInInput!) {
  signInUser(data: $data) {
    name
  }
}
    `;
export type SignInUserMutationFn = Apollo.MutationFunction<SignInUserMutation, SignInUserMutationVariables>;

/**
 * __useSignInUserMutation__
 *
 * To run a mutation, you first call `useSignInUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSignInUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [signInUserMutation, { data, loading, error }] = useSignInUserMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useSignInUserMutation(baseOptions?: Apollo.MutationHookOptions<SignInUserMutation, SignInUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SignInUserMutation, SignInUserMutationVariables>(SignInUserDocument, options);
      }
export type SignInUserMutationHookResult = ReturnType<typeof useSignInUserMutation>;
export type SignInUserMutationResult = Apollo.MutationResult<SignInUserMutation>;
export type SignInUserMutationOptions = Apollo.BaseMutationOptions<SignInUserMutation, SignInUserMutationVariables>;
export const SignUpUserDocument = gql`
    mutation SignUpUser($data: SignUpInput!) {
  signUpUser(data: $data) {
    name
  }
}
    `;
export type SignUpUserMutationFn = Apollo.MutationFunction<SignUpUserMutation, SignUpUserMutationVariables>;

/**
 * __useSignUpUserMutation__
 *
 * To run a mutation, you first call `useSignUpUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSignUpUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [signUpUserMutation, { data, loading, error }] = useSignUpUserMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useSignUpUserMutation(baseOptions?: Apollo.MutationHookOptions<SignUpUserMutation, SignUpUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SignUpUserMutation, SignUpUserMutationVariables>(SignUpUserDocument, options);
      }
export type SignUpUserMutationHookResult = ReturnType<typeof useSignUpUserMutation>;
export type SignUpUserMutationResult = Apollo.MutationResult<SignUpUserMutation>;
export type SignUpUserMutationOptions = Apollo.BaseMutationOptions<SignUpUserMutation, SignUpUserMutationVariables>;
export const LogOutUserDocument = gql`
    mutation logOutUser {
  logOutUser
}
    `;
export type LogOutUserMutationFn = Apollo.MutationFunction<LogOutUserMutation, LogOutUserMutationVariables>;

/**
 * __useLogOutUserMutation__
 *
 * To run a mutation, you first call `useLogOutUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLogOutUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [logOutUserMutation, { data, loading, error }] = useLogOutUserMutation({
 *   variables: {
 *   },
 * });
 */
export function useLogOutUserMutation(baseOptions?: Apollo.MutationHookOptions<LogOutUserMutation, LogOutUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LogOutUserMutation, LogOutUserMutationVariables>(LogOutUserDocument, options);
      }
export type LogOutUserMutationHookResult = ReturnType<typeof useLogOutUserMutation>;
export type LogOutUserMutationResult = Apollo.MutationResult<LogOutUserMutation>;
export type LogOutUserMutationOptions = Apollo.BaseMutationOptions<LogOutUserMutation, LogOutUserMutationVariables>;
export const UpdateUserToAccessProbStatementDocument = gql`
    mutation UpdateUserToAccessProbStatement($email: String!) {
  updateUserToAccessProbStatement(email: $email)
}
    `;
export type UpdateUserToAccessProbStatementMutationFn = Apollo.MutationFunction<UpdateUserToAccessProbStatementMutation, UpdateUserToAccessProbStatementMutationVariables>;

/**
 * __useUpdateUserToAccessProbStatementMutation__
 *
 * To run a mutation, you first call `useUpdateUserToAccessProbStatementMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateUserToAccessProbStatementMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateUserToAccessProbStatementMutation, { data, loading, error }] = useUpdateUserToAccessProbStatementMutation({
 *   variables: {
 *      email: // value for 'email'
 *   },
 * });
 */
export function useUpdateUserToAccessProbStatementMutation(baseOptions?: Apollo.MutationHookOptions<UpdateUserToAccessProbStatementMutation, UpdateUserToAccessProbStatementMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateUserToAccessProbStatementMutation, UpdateUserToAccessProbStatementMutationVariables>(UpdateUserToAccessProbStatementDocument, options);
      }
export type UpdateUserToAccessProbStatementMutationHookResult = ReturnType<typeof useUpdateUserToAccessProbStatementMutation>;
export type UpdateUserToAccessProbStatementMutationResult = Apollo.MutationResult<UpdateUserToAccessProbStatementMutation>;
export type UpdateUserToAccessProbStatementMutationOptions = Apollo.BaseMutationOptions<UpdateUserToAccessProbStatementMutation, UpdateUserToAccessProbStatementMutationVariables>;
export const GetMeDocument = gql`
    query GetMe {
  getMe {
    id
    CEAFESTID
    name
    email
    mobile
    gender
    isIITM
    hostel
    organization
    type
    collegeAddress
    emailVerified
    country
    role
    payment
  }
}
    `;

/**
 * __useGetMeQuery__
 *
 * To run a query within a React component, call `useGetMeQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetMeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetMeQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetMeQuery(baseOptions?: Apollo.QueryHookOptions<GetMeQuery, GetMeQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetMeQuery, GetMeQueryVariables>(GetMeDocument, options);
      }
export function useGetMeLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetMeQuery, GetMeQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetMeQuery, GetMeQueryVariables>(GetMeDocument, options);
        }
export function useGetMeSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetMeQuery, GetMeQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetMeQuery, GetMeQueryVariables>(GetMeDocument, options);
        }
export type GetMeQueryHookResult = ReturnType<typeof useGetMeQuery>;
export type GetMeLazyQueryHookResult = ReturnType<typeof useGetMeLazyQuery>;
export type GetMeSuspenseQueryHookResult = ReturnType<typeof useGetMeSuspenseQuery>;
export type GetMeQueryResult = Apollo.QueryResult<GetMeQuery, GetMeQueryVariables>;
export const GetUsersDocument = gql`
    query GetUsers {
  getUsers {
    id
    CEAFESTID
    name
    email
    mobile
    gender
    isIITM
    hostel
    organization
    type
    collegeAddress
    emailVerified
    payment
    country
    role
  }
}
    `;

/**
 * __useGetUsersQuery__
 *
 * To run a query within a React component, call `useGetUsersQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUsersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUsersQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetUsersQuery(baseOptions?: Apollo.QueryHookOptions<GetUsersQuery, GetUsersQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetUsersQuery, GetUsersQueryVariables>(GetUsersDocument, options);
      }
export function useGetUsersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetUsersQuery, GetUsersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetUsersQuery, GetUsersQueryVariables>(GetUsersDocument, options);
        }
export function useGetUsersSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetUsersQuery, GetUsersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetUsersQuery, GetUsersQueryVariables>(GetUsersDocument, options);
        }
export type GetUsersQueryHookResult = ReturnType<typeof useGetUsersQuery>;
export type GetUsersLazyQueryHookResult = ReturnType<typeof useGetUsersLazyQuery>;
export type GetUsersSuspenseQueryHookResult = ReturnType<typeof useGetUsersSuspenseQuery>;
export type GetUsersQueryResult = Apollo.QueryResult<GetUsersQuery, GetUsersQueryVariables>;