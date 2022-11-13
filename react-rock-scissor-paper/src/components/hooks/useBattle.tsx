import { useState } from 'react';
import { BattleObject } from '../../constants/BattleObject';
import { BattleType } from '../../../shared/types';
import { setResultStorage } from '../../storage';

export const useBattle = (): BattleType => {
  const [computerChoice, setComputerChoice] = useState('');
  const [result, setResult] = useState('');
  const [computerScore, setComputerScore] = useState(0);
  const [userScore, setUserScore] = useState(0);

  const checker = (input: string): void => {
    let choices: string[] = ['rock', 'paper', 'scissor'];
    let num: number = Math.floor(Math.random() * 3);

    const computerChoice: string = choices[num];

    let computer = BattleObject[input][computerChoice];

    if (computer === 'win') {
      setResult('YOU WIN');
      setUserScore(userScore + 1);
    } else if (computer === 'lose') {
      setResult('YOU LOSE');
      setComputerScore(computerScore + 1);
    } else {
      setResult('DRAW');
    }

    //save in localstorage
    setResultStorage([computerChoice, computerScore, userScore]);
  };

  const reset = () => {
    setResult('');
    setComputerScore(0);
    setUserScore(0);
  };

  return {
    computerChoice,
    result,
    setResult,
    computerScore,
    setComputerScore,
    userScore,
    setUserScore,
    checker,
    reset,
  };
};
