import { createContext, useState } from 'react';
import axios from 'axios';

import mockUser from './mockData.js/mockUser';
import mockRepos from "./mockData.js/mockRepos";
import mockFollowers from "./mockData.js/mockFollowers";


export const GithubContext = createContext();

export const GithubProvider = ({ children }) => {
  const [githubUser, setGithubUser ] = useState(mockUser);
  const [repos, setRepos] = useState(mockRepos);
  const [followers, setFollowers] = useState(mockFollowers);
  // request loading
  const [ isLoading, setIsLoading ] = useState(false);

  const searchUser = async (searchTerm) => {
    setIsLoading(true);

    const params = {
      dataType: ["Survey (FNDDS)"],
      // dataType: ["Foundation"],
      pagesize: 30,
    };

    const response = await axios.get(
      `${process.env.REACT_APP_ROOT_URL}/search?app_id=${
        process.env.REACT_APP_APPLICATION_ID
      }&app_key=${encodeURIComponent(
        process.env.REACT_APP_API_KEY
      )}&q=${searchTerm}`
    );

    console.log(response);
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
