import axios from 'axios';

export const getMealsByKeyword = async (params) => {
  const response = await axios.post(
    `${process.env.REACT_APP_API_URL}/search`,
    params
  );

  console.log(response);

  return response;
};
