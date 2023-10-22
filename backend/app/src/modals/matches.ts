import { pool } from '../database/db';
import { Match, new_match, update_match } from '../types/types';

export const get = async (): Promise<Match[] | unknown> => {
  const query = 'SELECT * FROM matches ORDER BY (home_score + away_score) DESC, start_time DESC';

  try {
    const result = await pool.query(query);
    return result.rows;
  } catch (error:unknown) {
    return error;
  }
} 

export const create = async (new_match:new_match): Promise<Match[] | unknown> => {
  const start_time = new Date();
  const home_score = 0;
  const away_score = 0;

  const query = 'INSERT INTO matches (home_team, away_team, home_score, away_score, start_time) VALUES ($1, $2, $3, $4, $5) RETURNING *';
  const values = [new_match.home_team, new_match.away_team, home_score, away_score, start_time];

  try {
    const result = await pool.query(query, values);
    return result.rows[0];
  } catch (error:unknown) {
    console.error(error);
  }
   
};

export const update = async (update_match:update_match): Promise<Match[] | string | unknown> => {

  const query = 'UPDATE matches SET home_score = $1, away_score = $2 WHERE id = $3 RETURNING *';
  const values = [update_match.home_score, update_match.away_score, update_match.id];

  try {
    const result = await pool.query(query, values);
    if (result.rows.length === 0) {
      return 'Match not found';
    } else {
      return result.rows[0];
    }
  } catch (error) {
    return error ;
  }
};


export const remove = async (match_id:number | string) => {

  const query = 'DELETE FROM matches WHERE id = $1';
  const values = [match_id];

  try {
    const result = await pool.query(query, values);
    if (result.rowCount === 0) {
      return 'Match not found';
    } else {
      return 204 ;
    }
  } catch (error) {
    return (error);
  }
}



