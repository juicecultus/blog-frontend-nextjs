import React from 'react';
import Articles from '../components/articles';
import Query from '../components/query';
import ARTICLES_QUERY from '../apollo/queries/article/articles';

const Home = () => {
  return (
    <div>
      <div className='uk-section'>
        <div className='uk-container uk-container-large'>
          <h1>All Mums Talk</h1>
          <Query query={ARTICLES_QUERY}>
            {({ data: { articles } }) => {
              return <Articles articles={articles} />;
            }}
          </Query>
        </div>
      </div>
    </div>
  );
};

export default Home;
