import axios from 'axios';

const API_URL = 'http://localhost:5000/api'; // Update with your backend URL

export const createEnrollment = async (enrollmentData) => {
  try {
    const response = await axios.post(`${API_URL}/create-cenroll`, enrollmentData);
    return response.data;
  } catch (error) {
    console.error('Error creating enrollment:', error);
    throw error;
  }
};

export const getEnrollments = async () => {
  try {
    const response = await axios.get(`${API_URL}/get-cenroll`);
    return response.data;
  } catch (error) {
    console.error('Error fetching enrollments:', error);
    throw error;
  }
};
