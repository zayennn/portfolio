import axios from 'axios';

export const getGitHubData = async () => {
    const response = await axios.get(
        'http://localhost:5000/api/github/zayennn'
    );
    return response.data;
};