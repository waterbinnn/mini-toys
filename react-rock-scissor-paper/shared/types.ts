export interface ResultsInterface {
  [key: string]: Array<string | number>;
}

export interface BattleType {
  computerChoice: string;
  result: string;
  setResult: React.Dispatch<React.SetStateAction<string>>;
  computerScore: number;
  setComputerScore: React.Dispatch<React.SetStateAction<number>>;
  userScore: number;
  setUserScore: React.Dispatch<React.SetStateAction<number>>;
  checker: (input: string) => void;
  reset: () => void;
}
