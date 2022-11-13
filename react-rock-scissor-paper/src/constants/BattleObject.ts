interface BattleObjectInterface {
  [index: string]: { [key: string]: string };
}

export const BattleObject: BattleObjectInterface = {
  rock: {
    rock: 'draw',
    scissor: 'win',
    paper: 'lose',
  },
  scissor: {
    rock: 'lose',
    scissor: 'draw',
    paper: 'win',
  },
  paper: {
    rock: 'win',
    scissor: 'lose',
    paper: 'draw',
  },
};
