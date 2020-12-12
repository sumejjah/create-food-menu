import { createContext, useState } from 'react';
import axios from 'axios';

import mockUser from './mockData.js/mockUser';
import mockRepos from "./mockData.js/mockRepos";
import mockFollowers from "./mockData.js/mockFollowers";

const rootUrl = 'https://api.github.com';

export const GithubContext = createContext();

export const GithubProvider = ({ children }) => {
  const [githubUser, setGithubUser ] = useState(mockUser);
  const [repos, setRepos] = useState(mockRepos);
  const [followers, setFollowers] = useState(mockFollowers);
  // request loading
  const [ isLoading, setIsLoading ] = useState(false);

  const searchUser = async (user) => {
    setIsLoading(true);

    const response = await axios(`${rootUrl}/users/${user}`);
  };

  return (
    <GithubContext.Provider
      value={{
        githubUser,
        repos,
        followers,
        isLoading,
        searchUser
      }}
    >
      {children}
    </GithubContext.Provider>
  );
}
