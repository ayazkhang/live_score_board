// reducers/index.js
import { combineReducers } from 'redux';

const matches = (state = [], action) => {
  switch (action.type) {
    case 'START_MATCH':
      return [...state, { id: state.length + 1, homeTeam: action.homeTeam, awayTeam: action.awayTeam, homeScore: 0, awayScore: 0 }];
    case 'UPDATE_SCORE':
      return state.map(match =>
        match.id === action.matchId
          ? { ...match, homeScore: action.homeScore, awayScore: action.awayScore }
          : match
      );
    case 'FINISH_MATCH':
      return state.filter(match => match.id !== action.matchId);
    default:
      return state;
  }
};

export default combineReducers({
  matches,
});
