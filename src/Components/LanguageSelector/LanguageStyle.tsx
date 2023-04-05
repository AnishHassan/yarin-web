import styled from 'styled-components';

export const LanguageSelector = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid white;
  border-radius: 4px;
  padding: 8px;
  color: white;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  font-size : 20px;
  font-family: 'Rubik', sans-serif;
  &:hover {
    background-color: white;
    color: black;
  }
`;

export const LanguageText = styled.span`
  margin-right: 8px;
`;