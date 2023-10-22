// src/components/Match/ScoreUpdateForm.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateScore, finishMatch } from '../../actions';

function ScoreUpdateForm({ match }) {
  const dispatch = useDispatch();
  const [homeScore, setHomeScore] = useState('');
  const [awayScore, setAwayScore] = useState('');

  const handleUpdate = async () => {
    if (homeScore !== '' && awayScore !== '') {
      try {
        await dispatch(updateScore(match.id, parseInt(homeScore), parseInt(awayScore)));
        setHomeScore('');
        setAwayScore('');
      } catch (error) {
        console.error("Error updating score:", error);
        // You can also set an error state and display an error message to the user.
      }
    }
  };

  const handleFinish = async () => {
    try {
      await dispatch(finishMatch(match.id));
    } catch (error) {
      console.error("Error finishing match:", error);
      // You can also set an error state and display an error message to the user.
    }
  };

  return (
    <div>
      <h3>
        {match.homeTeam} {match.homeScore} - {match.awayScore} {match.awayTeam}
      </h3>
      <input
        type="number"
        placeholder="Home Score"
        value={homeScore}
        onChange={(e) => setHomeScore(e.target.value)}
      />
      <input
        type="number"
        placeholder="Away Score"
        value={awayScore}
        onChange={(e) => setAwayScore(e.target.value)}
      />
      <button onClick={handleUpdate}>Update Score</button>
      <button onClick={handleFinish}>Finish Match</button>
    </div>
  );
}

export default ScoreUpdateForm;
