import gql from 'graphql-tag';
import * as React from 'react';
import * as ApolloReactCommon from '@apollo/react-common';
import * as ApolloReactComponents from '@apollo/react-components';
import * as ApolloReactHoc from '@apollo/react-hoc';
import * as ApolloReactHooks from '@apollo/react-hooks';
export type Maybe<T> = T | null;
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string,
  String: string,
  Boolean: boolean,
  Int: number,
  Float: number,
  DateTime: any,
};

export type AggregateCountry = {
   __typename?: 'AggregateCountry',
  count: Scalars['Int'],
};

export type AggregateLandmark = {
   __typename?: 'AggregateLandmark',
  count: Scalars['Int'],
};

export type Country = {
   __typename?: 'Country',
  id: Scalars['ID'],
  name: Scalars['String'],
  landmarks?: Maybe<Array<Landmark>>,
};


export type CountryLandmarksArgs = {
  where?: Maybe<LandmarkWhereInput>,
  orderBy?: Maybe<LandmarkOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};

export type CountryConnection = {
   __typename?: 'CountryConnection',
  pageInfo: PageInfo,
  edges: Array<CountryEdge>,
  aggregate: AggregateCountry,
};

export type CountryEdge = {
   __typename?: 'CountryEdge',
  node: Country,
  cursor: Scalars['String'],
};

export enum CountryOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

export type CountryWhereInput = {
  id?: Maybe<Scalars['ID']>,
  id_not?: Maybe<Scalars['ID']>,
  id_in?: Maybe<Array<Scalars['ID']>>,
  id_not_in?: Maybe<Array<Scalars['ID']>>,
  id_lt?: Maybe<Scalars['ID']>,
  id_lte?: Maybe<Scalars['ID']>,
  id_gt?: Maybe<Scalars['ID']>,
  id_gte?: Maybe<Scalars['ID']>,
  id_contains?: Maybe<Scalars['ID']>,
  id_not_contains?: Maybe<Scalars['ID']>,
  id_starts_with?: Maybe<Scalars['ID']>,
  id_not_starts_with?: Maybe<Scalars['ID']>,
  id_ends_with?: Maybe<Scalars['ID']>,
  id_not_ends_with?: Maybe<Scalars['ID']>,
  name?: Maybe<Scalars['String']>,
  name_not?: Maybe<Scalars['String']>,
  name_in?: Maybe<Array<Scalars['String']>>,
  name_not_in?: Maybe<Array<Scalars['String']>>,
  name_lt?: Maybe<Scalars['String']>,
  name_lte?: Maybe<Scalars['String']>,
  name_gt?: Maybe<Scalars['String']>,
  name_gte?: Maybe<Scalars['String']>,
  name_contains?: Maybe<Scalars['String']>,
  name_not_contains?: Maybe<Scalars['String']>,
  name_starts_with?: Maybe<Scalars['String']>,
  name_not_starts_with?: Maybe<Scalars['String']>,
  name_ends_with?: Maybe<Scalars['String']>,
  name_not_ends_with?: Maybe<Scalars['String']>,
  createdAt?: Maybe<Scalars['DateTime']>,
  createdAt_not?: Maybe<Scalars['DateTime']>,
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>,
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>,
  createdAt_lt?: Maybe<Scalars['DateTime']>,
  createdAt_lte?: Maybe<Scalars['DateTime']>,
  createdAt_gt?: Maybe<Scalars['DateTime']>,
  createdAt_gte?: Maybe<Scalars['DateTime']>,
  updatedAt?: Maybe<Scalars['DateTime']>,
  updatedAt_not?: Maybe<Scalars['DateTime']>,
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>,
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>,
  updatedAt_lt?: Maybe<Scalars['DateTime']>,
  updatedAt_lte?: Maybe<Scalars['DateTime']>,
  updatedAt_gt?: Maybe<Scalars['DateTime']>,
  updatedAt_gte?: Maybe<Scalars['DateTime']>,
  landmarks_every?: Maybe<LandmarkWhereInput>,
  landmarks_some?: Maybe<LandmarkWhereInput>,
  landmarks_none?: Maybe<LandmarkWhereInput>,
  AND?: Maybe<Array<CountryWhereInput>>,
  OR?: Maybe<Array<CountryWhereInput>>,
  NOT?: Maybe<Array<CountryWhereInput>>,
};

export type CountryWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>,
  name?: Maybe<Scalars['String']>,
};


export type Landmark = {
   __typename?: 'Landmark',
  id: Scalars['ID'],
  name: Scalars['String'],
  city_name: Scalars['String'],
  rating?: Maybe<Scalars['Int']>,
  country: Country,
  LocationString?: Maybe<Scalars['String']>,
};

export type LandmarkConnection = {
   __typename?: 'LandmarkConnection',
  pageInfo: PageInfo,
  edges: Array<LandmarkEdge>,
  aggregate: AggregateLandmark,
};

export type LandmarkEdge = {
   __typename?: 'LandmarkEdge',
  node: Landmark,
  cursor: Scalars['String'],
};

export enum LandmarkOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  CityNameAsc = 'city_name_ASC',
  CityNameDesc = 'city_name_DESC',
  RatingAsc = 'rating_ASC',
  RatingDesc = 'rating_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

export type LandmarkWhereInput = {
  id?: Maybe<Scalars['ID']>,
  id_not?: Maybe<Scalars['ID']>,
  id_in?: Maybe<Array<Scalars['ID']>>,
  id_not_in?: Maybe<Array<Scalars['ID']>>,
  id_lt?: Maybe<Scalars['ID']>,
  id_lte?: Maybe<Scalars['ID']>,
  id_gt?: Maybe<Scalars['ID']>,
  id_gte?: Maybe<Scalars['ID']>,
  id_contains?: Maybe<Scalars['ID']>,
  id_not_contains?: Maybe<Scalars['ID']>,
  id_starts_with?: Maybe<Scalars['ID']>,
  id_not_starts_with?: Maybe<Scalars['ID']>,
  id_ends_with?: Maybe<Scalars['ID']>,
  id_not_ends_with?: Maybe<Scalars['ID']>,
  name?: Maybe<Scalars['String']>,
  name_not?: Maybe<Scalars['String']>,
  name_in?: Maybe<Array<Scalars['String']>>,
  name_not_in?: Maybe<Array<Scalars['String']>>,
  name_lt?: Maybe<Scalars['String']>,
  name_lte?: Maybe<Scalars['String']>,
  name_gt?: Maybe<Scalars['String']>,
  name_gte?: Maybe<Scalars['String']>,
  name_contains?: Maybe<Scalars['String']>,
  name_not_contains?: Maybe<Scalars['String']>,
  name_starts_with?: Maybe<Scalars['String']>,
  name_not_starts_with?: Maybe<Scalars['String']>,
  name_ends_with?: Maybe<Scalars['String']>,
  name_not_ends_with?: Maybe<Scalars['String']>,
  city_name?: Maybe<Scalars['String']>,
  city_name_not?: Maybe<Scalars['String']>,
  city_name_in?: Maybe<Array<Scalars['String']>>,
  city_name_not_in?: Maybe<Array<Scalars['String']>>,
  city_name_lt?: Maybe<Scalars['String']>,
  city_name_lte?: Maybe<Scalars['String']>,
  city_name_gt?: Maybe<Scalars['String']>,
  city_name_gte?: Maybe<Scalars['String']>,
  city_name_contains?: Maybe<Scalars['String']>,
  city_name_not_contains?: Maybe<Scalars['String']>,
  city_name_starts_with?: Maybe<Scalars['String']>,
  city_name_not_starts_with?: Maybe<Scalars['String']>,
  city_name_ends_with?: Maybe<Scalars['String']>,
  city_name_not_ends_with?: Maybe<Scalars['String']>,
  rating?: Maybe<Scalars['Int']>,
  rating_not?: Maybe<Scalars['Int']>,
  rating_in?: Maybe<Array<Scalars['Int']>>,
  rating_not_in?: Maybe<Array<Scalars['Int']>>,
  rating_lt?: Maybe<Scalars['Int']>,
  rating_lte?: Maybe<Scalars['Int']>,
  rating_gt?: Maybe<Scalars['Int']>,
  rating_gte?: Maybe<Scalars['Int']>,
  createdAt?: Maybe<Scalars['DateTime']>,
  createdAt_not?: Maybe<Scalars['DateTime']>,
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>,
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>,
  createdAt_lt?: Maybe<Scalars['DateTime']>,
  createdAt_lte?: Maybe<Scalars['DateTime']>,
  createdAt_gt?: Maybe<Scalars['DateTime']>,
  createdAt_gte?: Maybe<Scalars['DateTime']>,
  updatedAt?: Maybe<Scalars['DateTime']>,
  updatedAt_not?: Maybe<Scalars['DateTime']>,
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>,
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>,
  updatedAt_lt?: Maybe<Scalars['DateTime']>,
  updatedAt_lte?: Maybe<Scalars['DateTime']>,
  updatedAt_gt?: Maybe<Scalars['DateTime']>,
  updatedAt_gte?: Maybe<Scalars['DateTime']>,
  country?: Maybe<CountryWhereInput>,
  AND?: Maybe<Array<LandmarkWhereInput>>,
  OR?: Maybe<Array<LandmarkWhereInput>>,
  NOT?: Maybe<Array<LandmarkWhereInput>>,
};

export type LandmarkWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>,
};

export type Mutation = {
   __typename?: 'Mutation',
  deleteCountry?: Maybe<Country>,
};


export type MutationDeleteCountryArgs = {
  where: CountryWhereUniqueInput
};

export type PageInfo = {
   __typename?: 'PageInfo',
  hasNextPage: Scalars['Boolean'],
  hasPreviousPage: Scalars['Boolean'],
  startCursor?: Maybe<Scalars['String']>,
  endCursor?: Maybe<Scalars['String']>,
};

export type Query = {
   __typename?: 'Query',
  country?: Maybe<Country>,
  countries: Array<Country>,
  countriesConnection: CountryConnection,
  landmark?: Maybe<Landmark>,
  landmarks: Array<Landmark>,
  landmarksConnection: LandmarkConnection,
  fiveStar: Array<Landmark>,
};


export type QueryCountryArgs = {
  where: CountryWhereUniqueInput
};


export type QueryCountriesArgs = {
  where?: Maybe<CountryWhereInput>,
  orderBy?: Maybe<CountryOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type QueryCountriesConnectionArgs = {
  where?: Maybe<CountryWhereInput>,
  orderBy?: Maybe<CountryOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type QueryLandmarkArgs = {
  where: LandmarkWhereUniqueInput
};


export type QueryLandmarksArgs = {
  where?: Maybe<LandmarkWhereInput>,
  orderBy?: Maybe<LandmarkOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type QueryLandmarksConnectionArgs = {
  where?: Maybe<LandmarkWhereInput>,
  orderBy?: Maybe<LandmarkOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type QueryFiveStarArgs = {
  rating?: Maybe<Scalars['Int']>
};

export type AllCountryNamesQueryVariables = {};


export type AllCountryNamesQuery = (
  { __typename?: 'Query' }
  & { countries: Array<(
    { __typename?: 'Country' }
    & Pick<Country, 'name'>
  )> }
);

export type AllLandmarkNamesQueryVariables = {};


export type AllLandmarkNamesQuery = (
  { __typename?: 'Query' }
  & { landmarks: Array<(
    { __typename?: 'Landmark' }
    & Pick<Landmark, 'name' | 'city_name'>
  )> }
);

export type LookupLInCountryQueryVariables = {
  name: Scalars['String']
};


export type LookupLInCountryQuery = (
  { __typename?: 'Query' }
  & { countries: Array<(
    { __typename?: 'Country' }
    & Pick<Country, 'name'>
    & { landmarks: Maybe<Array<(
      { __typename?: 'Landmark' }
      & Pick<Landmark, 'name' | 'city_name'>
    )>> }
  )> }
);


export const AllCountryNamesDocument = gql`
    query AllCountryNames {
  countries {
    name
  }
}
    `;
export type AllCountryNamesComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<AllCountryNamesQuery, AllCountryNamesQueryVariables>, 'query'>;

    export const AllCountryNamesComponent = (props: AllCountryNamesComponentProps) => (
      <ApolloReactComponents.Query<AllCountryNamesQuery, AllCountryNamesQueryVariables> query={AllCountryNamesDocument} {...props} />
    );
    
export type AllCountryNamesProps<TChildProps = {}> = ApolloReactHoc.DataProps<AllCountryNamesQuery, AllCountryNamesQueryVariables> | TChildProps;
export function withAllCountryNames<TProps, TChildProps = {}>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  AllCountryNamesQuery,
  AllCountryNamesQueryVariables,
  AllCountryNamesProps<TChildProps>>) {
    return ApolloReactHoc.withQuery<TProps, AllCountryNamesQuery, AllCountryNamesQueryVariables, AllCountryNamesProps<TChildProps>>(AllCountryNamesDocument, {
      alias: 'allCountryNames',
      ...operationOptions
    });
};

/**
 * __useAllCountryNamesQuery__
 *
 * To run a query within a React component, call `useAllCountryNamesQuery` and pass it any options that fit your needs.
 * When your component renders, `useAllCountryNamesQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAllCountryNamesQuery({
 *   variables: {
 *   },
 * });
 */
export function useAllCountryNamesQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<AllCountryNamesQuery, AllCountryNamesQueryVariables>) {
        return ApolloReactHooks.useQuery<AllCountryNamesQuery, AllCountryNamesQueryVariables>(AllCountryNamesDocument, baseOptions);
      }
export function useAllCountryNamesLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<AllCountryNamesQuery, AllCountryNamesQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<AllCountryNamesQuery, AllCountryNamesQueryVariables>(AllCountryNamesDocument, baseOptions);
        }
export type AllCountryNamesQueryHookResult = ReturnType<typeof useAllCountryNamesQuery>;
export type AllCountryNamesLazyQueryHookResult = ReturnType<typeof useAllCountryNamesLazyQuery>;
export type AllCountryNamesQueryResult = ApolloReactCommon.QueryResult<AllCountryNamesQuery, AllCountryNamesQueryVariables>;
export const AllLandmarkNamesDocument = gql`
    query AllLandmarkNames {
  landmarks {
    name
    city_name
  }
}
    `;
export type AllLandmarkNamesComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<AllLandmarkNamesQuery, AllLandmarkNamesQueryVariables>, 'query'>;

    export const AllLandmarkNamesComponent = (props: AllLandmarkNamesComponentProps) => (
      <ApolloReactComponents.Query<AllLandmarkNamesQuery, AllLandmarkNamesQueryVariables> query={AllLandmarkNamesDocument} {...props} />
    );
    
export type AllLandmarkNamesProps<TChildProps = {}> = ApolloReactHoc.DataProps<AllLandmarkNamesQuery, AllLandmarkNamesQueryVariables> | TChildProps;
export function withAllLandmarkNames<TProps, TChildProps = {}>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  AllLandmarkNamesQuery,
  AllLandmarkNamesQueryVariables,
  AllLandmarkNamesProps<TChildProps>>) {
    return ApolloReactHoc.withQuery<TProps, AllLandmarkNamesQuery, AllLandmarkNamesQueryVariables, AllLandmarkNamesProps<TChildProps>>(AllLandmarkNamesDocument, {
      alias: 'allLandmarkNames',
      ...operationOptions
    });
};

/**
 * __useAllLandmarkNamesQuery__
 *
 * To run a query within a React component, call `useAllLandmarkNamesQuery` and pass it any options that fit your needs.
 * When your component renders, `useAllLandmarkNamesQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAllLandmarkNamesQuery({
 *   variables: {
 *   },
 * });
 */
export function useAllLandmarkNamesQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<AllLandmarkNamesQuery, AllLandmarkNamesQueryVariables>) {
        return ApolloReactHooks.useQuery<AllLandmarkNamesQuery, AllLandmarkNamesQueryVariables>(AllLandmarkNamesDocument, baseOptions);
      }
export function useAllLandmarkNamesLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<AllLandmarkNamesQuery, AllLandmarkNamesQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<AllLandmarkNamesQuery, AllLandmarkNamesQueryVariables>(AllLandmarkNamesDocument, baseOptions);
        }
export type AllLandmarkNamesQueryHookResult = ReturnType<typeof useAllLandmarkNamesQuery>;
export type AllLandmarkNamesLazyQueryHookResult = ReturnType<typeof useAllLandmarkNamesLazyQuery>;
export type AllLandmarkNamesQueryResult = ApolloReactCommon.QueryResult<AllLandmarkNamesQuery, AllLandmarkNamesQueryVariables>;
export const LookupLInCountryDocument = gql`
    query LookupLInCountry($name: String!) {
  countries(where: {name_contains: $name}) {
    name
    landmarks {
      name
      city_name
    }
  }
}
    `;
export type LookupLInCountryComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<LookupLInCountryQuery, LookupLInCountryQueryVariables>, 'query'> & ({ variables: LookupLInCountryQueryVariables; skip?: boolean; } | { skip: boolean; });

    export const LookupLInCountryComponent = (props: LookupLInCountryComponentProps) => (
      <ApolloReactComponents.Query<LookupLInCountryQuery, LookupLInCountryQueryVariables> query={LookupLInCountryDocument} {...props} />
    );
    
export type LookupLInCountryProps<TChildProps = {}> = ApolloReactHoc.DataProps<LookupLInCountryQuery, LookupLInCountryQueryVariables> | TChildProps;
export function withLookupLInCountry<TProps, TChildProps = {}>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  LookupLInCountryQuery,
  LookupLInCountryQueryVariables,
  LookupLInCountryProps<TChildProps>>) {
    return ApolloReactHoc.withQuery<TProps, LookupLInCountryQuery, LookupLInCountryQueryVariables, LookupLInCountryProps<TChildProps>>(LookupLInCountryDocument, {
      alias: 'lookupLInCountry',
      ...operationOptions
    });
};

/**
 * __useLookupLInCountryQuery__
 *
 * To run a query within a React component, call `useLookupLInCountryQuery` and pass it any options that fit your needs.
 * When your component renders, `useLookupLInCountryQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useLookupLInCountryQuery({
 *   variables: {
 *      name: // value for 'name'
 *   },
 * });
 */
export function useLookupLInCountryQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<LookupLInCountryQuery, LookupLInCountryQueryVariables>) {
        return ApolloReactHooks.useQuery<LookupLInCountryQuery, LookupLInCountryQueryVariables>(LookupLInCountryDocument, baseOptions);
      }
export function useLookupLInCountryLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<LookupLInCountryQuery, LookupLInCountryQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<LookupLInCountryQuery, LookupLInCountryQueryVariables>(LookupLInCountryDocument, baseOptions);
        }
export type LookupLInCountryQueryHookResult = ReturnType<typeof useLookupLInCountryQuery>;
export type LookupLInCountryLazyQueryHookResult = ReturnType<typeof useLookupLInCountryLazyQuery>;
export type LookupLInCountryQueryResult = ApolloReactCommon.QueryResult<LookupLInCountryQuery, LookupLInCountryQueryVariables>;