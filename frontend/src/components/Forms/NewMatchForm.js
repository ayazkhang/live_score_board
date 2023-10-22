import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { startMatch } from '../../actions';

function NewMatchForm() {
  const dispatch = useDispatch();
  const [homeTeam, setHomeTeam] = useState('');
  const [awayTeam, setAwayTeam] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await dispatch(startMatch(homeTeam, awayTeam));
      setHomeTeam('');
      setAwayTeam('');
    } catch (error) {
      console.error("Error starting match:", error);
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Home Team"
        value={homeTeam}
        onChange={(e) => setHomeTeam(e.target.value)}
      />
      <input
        type="text"
        placeholder="Away Team"
        value={awayTeam}
        onChange={(e) => setAwayTeam(e.target.value)}
      />
      <button type="submit">Start Match</button>
    </form>
  );
}

export default NewMatchForm;
