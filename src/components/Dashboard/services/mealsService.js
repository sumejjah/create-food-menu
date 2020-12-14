import axios from 'axios';

export const getMealsByKeyword = async (params) => {
  const response = await axios.post(
    `${process.env.REACT_APP_API_URL}/search`,
    params
  );

  return response.data;
};

export const downloadRecipe = async (params) => {
  const response = await axios.post(
    `${process.env.REACT_APP_API_URL}/meal/download`,
    params
  );

  return response;
}
