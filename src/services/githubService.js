import axios from 'axios';

export const getGitHubData = async () => {
  const { data } = await axios.get('/api/github/zayennn');
  return data;
};