import React from 'react';
import { useQuery } from '@apollo/react-hooks';

// Using useQuery hook to call Strapi server at this address http://localhost:1337/graphql.
// Sending an id if it exists (necessary when fetching just one article).

const Query = ({ children, query, id }) => {
  const { data, loading, error } = useQuery(query, {
    variables: { id: id }
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {JSON.stringify(error)}</p>;

  // If request is successful, return the child component with the retrieved data as prop.
  return children({ data });
};

export default Query;
