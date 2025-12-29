import axios from 'axios';

const API_BASE_URL = 'http://localhost:5000/api';

export const getGitHubData = async () => {
    try {
        const { data } = await axios.get(
            `${API_BASE_URL}/github/zayennn`
        );

        return data;
    } catch (error) {
        console.error(
            'Backend GitHub error:',
            error?.response?.status,
            error?.response?.data
        );
        throw error;
    }
};