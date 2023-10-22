export interface Match {
    id: number;
    homeTeam: string; 
    awayTeam: string; 
    homeScore: number; 
    awayScore: number; 
  }
  
  export interface InsertResponse {
    inserted: boolean;
    record: Match | null;
  }


export interface new_match{
    home_team: string;
    away_team : string
}


export interface update_match {
    home_score: number;
    away_score : number; 
    id:number
}