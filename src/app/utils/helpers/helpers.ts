import { Position, PositionSlot, Team } from "../api/api.model";

export function getTeamPointSum(team: Team): number {
  return team.reduce((total, player) => {
    // console.log(player?.history?.games?.[-1]);
    return (player?.history?.games?.[-1]?.totalPoints ?? 0) + total;
  }, 0);
}


export const PositionMap: [PositionSlot, Position][] =
  [
    [PositionSlot.QB, Position.QB],
    [PositionSlot.RB1, Position.RB],
    [PositionSlot.RB2, Position.RB],
    [PositionSlot.WR1, Position.WR],
    [PositionSlot.WR2, Position.WR],
    [PositionSlot.WR3, Position.WR],
    [PositionSlot.K, Position.K],
    [PositionSlot.DST, Position.DST],
  ];
