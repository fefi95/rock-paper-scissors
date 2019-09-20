export enum Hand {
  rock,
  paper,
  scissors,
}

export interface IPlayer {
  name: string;
  hand: Hand;
}

export enum GameOver {
  tie = "Tie",
  winner = "Winner",
  loser = "Loser",
}

export const handStringToEnum: { [elem: string]: Hand; } = {
  paper: Hand.paper,
  rock: Hand.rock,
  scissors: Hand.scissors,
};

export function getGameOver(player: Hand, bot: Hand): GameOver {
  if (bot === player) {
    return GameOver.tie;
  }
  return (player - bot + 3) % 3 === 1 ? GameOver.winner : GameOver.loser;
}

export function botPlay() {
  return Hand[Math.floor(Math.random() * (3))];
}
