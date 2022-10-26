import styled from 'styled-components';

export const Button = styled.button`
  padding: 20px;
  width: 100px;
  outline: none;
  border: none;
  cursor: pointer;
  border-radius: 16px;
  transition: 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &: hover {
    background-color: rgb(48, 94, 139);
  } ;
`;
export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 20%;
`;
export const Icon = styled.span`
  margin-left: 3px;
`;
