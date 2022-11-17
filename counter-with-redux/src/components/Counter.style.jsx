import styled from 'styled-components';

export const Container = styled.div`
  width: 45%;
  padding: 40px 30px;
  position: absolute;
  transform: translate(-50%, -50%);
  top: 50%;
  left: 50%;
  border-radius: 10px;
  box-shadow: 0 15px 25px rgba(0, 0, 0, 0.15);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 40px;
`;

export const P = styled.p`
  color: white;
  font-size: 80px;
  font-weight: 700;
`;

export const Button = styled.button`
  padding: 10px;
  border: 1px solid grey;
  border-radius: 4px;
  width: 100px;
  color: grey;

  &:hover {
    opacity: 0.5;
  }
`;
