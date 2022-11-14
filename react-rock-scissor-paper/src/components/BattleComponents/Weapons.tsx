import { useEffect, useState } from 'react';
import { useBattle } from '../hooks/useBattle';
import { getResultStorage } from '../../storage/index';

import {
  Container,
  ScoresWrapper,
  WeaponWrapper,
  WeaponButton,
  WeaponButtonText,
  BattleResult,
  Score,
  ResetButton,
  ResetButtonText,
  BattleDetails,
} from './Weapons.styled';
import Colors from '../../constants/Colors';

function Weapons() {
  const { result, reset, checker, computerScore, userScore } = useBattle();
  const [userChoice, setUserChoice] = useState('');
  const [resultColor, setResultColor] = useState('');

  const handleClick = (choice: string) => {
    setUserChoice(choice);
    checker(choice);
  };

  const results = getResultStorage();
  const computerChoice = results[0];

  useEffect(() => {
    const handleColor = () => {
      if (result === 'YOU WIN') {
        setResultColor(Colors.green);
      } else if (result === 'YOU LOSE') {
        setResultColor(Colors.red);
      } else {
        setResultColor(Colors.grey);
      }
    };
    handleColor();
  }, [result]);

  const handleReset = () => {
    reset();
    setUserChoice('');
  };

  return (
    <>
      <Container>
        <ScoresWrapper>
          <Score>
            Computer : <span>{computerScore}</span>
          </Score>
          <Score>
            You : <span>{userScore}</span>
          </Score>
        </ScoresWrapper>

        <WeaponWrapper>
          <WeaponButton type="button" onClick={() => handleClick('rock')}>
            <WeaponButtonText className="far fa-hand-rock"></WeaponButtonText>
          </WeaponButton>
          <WeaponButton type="button" onClick={() => handleClick('paper')}>
            <WeaponButtonText className="far fa-hand-paper"></WeaponButtonText>
          </WeaponButton>
          <WeaponButton type="button" onClick={() => handleClick('scissor')}>
            <WeaponButtonText className="far fa-hand-scissors"></WeaponButtonText>
          </WeaponButton>
        </WeaponWrapper>

        {userChoice ? (
          <>
            <BattleDetails>
              <p>
                Computer choose
                <span> {computerChoice.toUpperCase()}</span>
              </p>
              <p>
                You choose
                <span> {userChoice.toUpperCase()}</span>
              </p>
              <BattleResult color={resultColor}>{result}</BattleResult>
            </BattleDetails>
            <div>
              <ResetButton type="button" onClick={() => handleReset()}>
                <ResetButtonText>Restart</ResetButtonText>
              </ResetButton>
            </div>
          </>
        ) : null}
      </Container>
    </>
  );
}

export default Weapons;
