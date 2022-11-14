import styled from 'styled-components';
import Colors from '../../constants/Colors';

export const Container = styled.div`
  width: 45%;
  min-width: 500px;
  background-color: ${Colors.white};
  padding: 40px 30px;
  position: absolute;
  transform: translate(-50%, -50%);
  top: 50%;
  left: 50%;
  border-radius: 10px;
  box-shadow: 0 15px 25px rgba(0, 0, 0, 0.15);
`;

export const ScoresWrapper = styled.div`
  margin-bottom: 50px;
  text-align: right;
  font-weight: 400;
  font-size: 15px;
`;

export const WeaponWrapper = styled.div`
  width: 90%;
  margin: auto;
  display: flex;
  justify-content: space-around;
`;

export const WeaponButton = styled.button`
  background-color: ${Colors.battleButton};
  color: ${Colors.battleIcon};
  border: none;
  font-size: 50px;
  height: 100px;
  width: 100px;
  border-radius: 50%;
  outline: none;
  cursor: pointer;

  &:hover {
    opacity: 0.7;
  }
`;

export const WeaponButtonText = styled.i`
  pointer-events: none;
`;

export const BattleDetails = styled.div`
  margin-top: 30px;
  text-align: center;
  font-size: 15px;
  font-weight: 400;

  p {
    margin-bottom: 10px;
  }
  span {
    font-weight: 700;
  }
`;

export const BattleResult = styled.div`
  width: 180px;
  padding: 10px 0;
  margin: 30px auto;
  font-weight: 600;
  letter-spacing: 0.5px;
  background-color: ${(props) => props.color};
  border-radius: 4px;
`;

export const Score = styled.p`
  &:first-child {
    margin-bottom: 10px;
  }
  span {
    font-weight: 600;
  }
`;

export const ResetButton = styled.button`
  display: block;
  margin: 0 auto;
  padding: 10px 20px;
  border: none;
  border-radius: 20px;
  background-color: ${Colors.reset};
  color: #d32f2f;
  cursor: pointer;

  &:hover {
    opacity: 0.7;
  }
`;

export const ResetButtonText = styled.p`
  font-weight: 500;
  pointer-events: none;
`;
