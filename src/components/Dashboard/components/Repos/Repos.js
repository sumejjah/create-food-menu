import React, { useContext } from 'react';
import { GithubContext } from '../../../../context/context';
import { Chart } from '../Charts';

const Repos = () => {
  const { repos } = useContext(GithubContext);

  return <Chart />;
}

export default Repos;