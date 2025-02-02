const API_BASE_URL = 'https://api.example.com';

export const loginUser = async (credentials) => {
    try {
        const response = await fetch(`${API_BASE_URL}/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(credentials),
        });
        return await response.json();
    } catch (error) {
        console.error('Error logging in:', error);
        throw error;
    }
};

export const fetchAccountData = async (userId) => {
    try {
        const response = await fetch(`${API_BASE_URL}/users/${userId}/account`);
        return await response.json();
    } catch (error) {
        console.error('Error fetching account data:', error);
        throw error;
    }
};