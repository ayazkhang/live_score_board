
const data = [
  {
    home_team: 'Team A',
    away_team: 'Team B',
    home_score: 2,
    away_score: 1,
    start_time: new Date('2023-10-15T15:00:00'),
  },
  {
    home_team: 'Team X',
    away_team: 'Team Y',
    home_score: 0,
    away_score: 0,
    start_time: new Date('2023-10-16T14:30:00'),
  },
];

export const seed = async (knex:any) => {

  await knex('matches').del();
  await knex('matches').insert(data);

};
