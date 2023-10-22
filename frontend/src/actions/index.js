// src/actions/index.js
export const startMatch = (homeTeam, awayTeam) => ({
    type: 'START_MATCH',
    homeTeam,
    awayTeam,
  });
  
  export const updateScore = (matchId, homeScore, awayScore) => ({
    type: 'UPDATE_SCORE',
    matchId,
    homeScore,
    awayScore,
  });
  
  export const finishMatch = (matchId) => ({
    type: 'FINISH_MATCH',
    matchId,
  });
  