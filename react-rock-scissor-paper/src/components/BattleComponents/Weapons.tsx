import { useState } from 'react';
import { useBattle } from '../hooks/useBattle';
import { getResultStorage } from '../../storage/index';

function Weapons() {
  const { result, reset, checker, computerScore, userScore } = useBattle();
  const [userChoice, setUserChoice] = useState('');

  const handleClick = (choice: string) => {
    setUserChoice(choice);
    checker(choice);
  };

  const results = getResultStorage();
  const computerChoice = results[0];

  const handleReset = () => {
    reset();
    setUserChoice('');
  };

  return (
    <>
      <div>
        <p>
          Computer : <span>{computerScore}</span>
        </p>
        <p>
          You : <span>{userScore}</span>
        </p>
      </div>
      <div>
        <button type="button" onClick={() => handleClick('rock')}>
          <i className="far fa-hand-rock"></i>
        </button>
        <button type="button" onClick={() => handleClick('paper')}>
          <i className="far fa-hand-paper"></i>
        </button>
        <button type="button" onClick={() => handleClick('scissor')}>
          <i className="far fa-hand-scissors"></i>
        </button>
      </div>
      {userChoice ? (
        <>
          <div>
            <p>
              Computer choose
              <span>{computerChoice.toUpperCase()}</span>
            </p>
            <p>
              You choose
              <span>{userChoice.toUpperCase()}</span>
            </p>
            <p>{result}</p>
          </div>
          <div>
            <button type="button" onClick={() => handleReset()}>
              <p>Restart</p>
            </button>
          </div>
        </>
      ) : null}
    </>
  );
}

export default Weapons;
