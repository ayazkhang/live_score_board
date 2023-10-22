// src/api/index.js
import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL;

export const startMatch = async (homeTeam, awayTeam) => {
  try {
    const response = await axios.post(`${API_URL}/matches`, { homeTeam, awayTeam });
    return response.data;
  } catch (error) {
    console.error("Error starting match:", error);
    throw error;
  }
};

export const updateScore = async (matchId, homeScore, awayScore) => {
  try {
    const response = await axios.put(`${API_URL}/matches/${matchId}`, { homeScore, awayScore });
    return response.data;
  } catch (error) {
    console.error("Error updating score:", error);
    throw error;
  }
};

export const finishMatch = async (matchId) => {
  try {
    const response = await axios.delete(`${API_URL}/matches/${matchId}`);
    return response.data;
  } catch (error) {
    console.error("Error finishing match:", error);
    throw error;
  }
};
