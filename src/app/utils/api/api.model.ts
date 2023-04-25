// ENRICHED -> compiled on frontend - i.e. data is queried from a separate source and put together by the frontend
// for example: the backend will only store user1, user2 and week for Matchup, and the frontend will "enrich" by loading in the rosters, queried from the Roster table
// data queried from backend
export interface User {
  id: string;
  firstName: string;
  lastName: string;
  teamName: string;
  email: string;
  seasonWins?: number;
  totalPoints?: number;
  pointsPerGame?: number; // calculated on the frontend
}

// this could be either an array that we assumes always remains in order, or it could be store like QB: string; RB1: string; etc...
// I'd probably lean towards doing the above but I compiled like this for ease of testing - I'm envisioning a modular frontend that allows something
// like swapping RB1 for RB2 for ease of visualization
export interface Roster {
  parentId: string;
  qb?: Player;
  rb1?: Player;
  rb2?: Player;
  wr1?: Player;
  wr2?: Player;
  wr3?: Player;
  k?: Player;
  dst?: Player;
  bench?: Team; // not in backend
  active?: Team; // not in backend
}

// not sure how much of this is actually necessary if we're doing the majority of calculations on the backend
// we may also want to link this by using a playerId/parentId field and just storing in the DB raw instead of in an array
export interface PlayerGameReport {
  // general
  isBye: boolean;
  totalPoints: number;
  twoPointConversions?: number;
  // not really sure if we want to have a more robust client side display of these stats, including them here for now
  // RB
  rushingYards?: number;
  rushingTouchdowns?: number;
  // WR
  receivingTouchdowns?: number;
  // QB
  passingYards?: number;
  passingTouchdowns?: number;
  completions?: number;
  // defense / QB
  interceptions?: number;
  // defense
  safeties?: number;
  defensiveTouchdowns?: number;
  yardsGivenUp?: number;
  // defense / offense
  fumbles?: number;
  // K
  PATs?: number;
  fieldGoals?: number;
}

export interface Matchup {
  user1: string; // user ID
  user2: string; // user ID
  week: number;
}

export interface EnrichedMatchup extends Matchup {
  team1?: Roster;
  team2?: Roster;
}

export interface Player {
  id: string;
  firstName: string;
  lastName: string;
  position: Position;
  history: PlayerHistory; // could be an enriched field
  owner?: string | null; // id of owner user, defaults to undefined/null if unowned
  active?: boolean;
}

// everything we need to display to the user
export interface AllLeagueData {
  participants: User[];
  players: Player[];
  matchups: Matchup[];
  rosters: Roster[];
  currentWeek: number;
}

export interface PlayerHistory {
  games: PlayerGameReport[];
}

export type Team = (Player | undefined)[];

// enums
export enum Position {
  QB = 'QB',
  WR = 'WR',
  RB = 'RB',
  K = 'K',
  TE = 'TE',
  DST = 'D/ST',
}

export enum PositionSlot {
  QB = 'qb',
  RB1 = 'rb1',
  RB2 = 'rb2',
  WR1 = 'wr1',
  WR2 = 'wr2',
  WR3 = 'wr3',
  K = 'k',
  DST = 'dst',
}
