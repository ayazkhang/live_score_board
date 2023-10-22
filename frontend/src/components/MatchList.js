import React from 'react';
import { useSelector } from 'react-redux';
import ScoreUpdateForm from './Match/ScoreUpdateForm';

function MatchList() {
  const matches = useSelector((state) => state.matches);

  return (
    <div>
      <h2>Live Football World Cup Scoreboard</h2>
      <div>
        {matches.map((match) => (
          <ScoreUpdateForm key={match.id} match={match} />
        ))}
      </div>
    </div>
  );
}

export default MatchList;
